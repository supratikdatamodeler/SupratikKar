import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(projectRoot, "dist", "client");
const outputDir = path.join(projectRoot, "_site");
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "example";
const isUserSite = repository.toLowerCase().endsWith(".github.io");
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? (repository && !isUserSite ? `/${repository}` : "");
const publicHost = `${owner}.github.io`;
const publicOrigin = `https://${publicHost}${basePath}`;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const workerUrl = pathToFileURL(path.join(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("staticExport", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request(`https://${publicHost}/`, {
    headers: {
      accept: "text/html",
      "x-forwarded-host": publicHost,
      "x-forwarded-proto": "https",
    },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static rendering failed with HTTP ${response.status}`);

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
  .replace(/\b(href|src|poster)=(["'])\/(?!\/)/gi, `$1=$2${basePath}/`)
  .replace(new RegExp(`https://${publicHost.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/`, "g"), `${publicOrigin}/`)
  .replace(new RegExp(`https://${publicHost.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=["'])`, "g"), publicOrigin);

await writeFile(path.join(outputDir, "index.html"), html, "utf8");
await writeFile(path.join(outputDir, "404.html"), html, "utf8");
await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");

async function rewriteCssUrls(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await rewriteCssUrls(target);
    if (entry.isFile() && entry.name.endsWith(".css")) {
      const css = await readFile(target, "utf8");
      await writeFile(target, css.replace(/url\((['"]?)\/(?!\/)/g, `url($1${basePath}/`), "utf8");
    }
  }
}

await rewriteCssUrls(outputDir);
await rm(path.join(outputDir, "_headers"), { force: true });
await rm(path.join(outputDir, ".assetsignore"), { force: true });

console.log(`GitHub Pages export created at ${outputDir}`);
console.log(`Expected public URL: ${publicOrigin}/`);
