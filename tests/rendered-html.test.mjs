import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function resolveWorkerFetch(moduleNamespace) {
  const worker = [moduleNamespace, moduleNamespace.default, moduleNamespace.default?.default].find(
    (candidate) => typeof candidate?.fetch === "function",
  );

  if (worker) return worker.fetch.bind(worker);

  const rscHandler = [moduleNamespace.default, moduleNamespace.default?.default].find(
    (candidate) => typeof candidate === "function",
  );

  // On Linux, Vinext can emit the RSC request handler as the default server
  // export instead of wrapping it in a Cloudflare Worker-style { fetch } object.
  if (rscHandler) return (request, _env, ctx) => rscHandler(request, ctx);

  throw new TypeError(
    `Generated server module exposes neither fetch() nor a request handler; exports: ${Object.keys(moduleNamespace).join(", ") || "none"}`,
  );
}

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const fetchSite = resolveWorkerFetch(await import(workerUrl.href));

  return fetchSite(
    new Request("https://supratik-kar-research.example/", {
      headers: { accept: "text/html", "x-forwarded-host": "supratik-kar-research.example", "x-forwarded-proto": "https" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("supports Vinext's Linux request-handler export", async () => {
  const fetchSite = resolveWorkerFetch({
    default: async (request, ctx) => new Response(`${new URL(request.url).pathname}:${typeof ctx.waitUntil}`),
    generateStaticParamsMap: {},
  });
  const response = await fetchSite(
    new Request("https://example.test/linux-export"),
    {},
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(await response.text(), "/linux-export:function");
});

test("server-renders the finished research site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Dr\. Supratik Kar \| Computational Chemistry &amp; Predictive Toxicology<\/title>/i);
  assert.match(html, /Making chemistry more/);
  assert.match(html, /Scientist, Educator, Mentor\./);
  assert.match(html, /tenured Associate Professor and Principal Investigator/);
  assert.match(html, /Latest 25 papers/);
  assert.match(html, /10,740/);
  assert.match(html, /125 peer-reviewed articles/);
  assert.match(html, /<strong>30<\/strong><span>Published chapters<\/span>/);
  assert.match(html, /Incoming graduate student at Johns Hopkins University/);
  assert.match(html, /Old Research website/);
  assert.match(html, /class="role-title">Associate Editor/);
  assert.match(html, /class="role-journal">Molecular Diversity/);
  assert.match(html, /CMM Laboratory/);
  assert.match(html, /KidneyTox_v1\.0/);
  assert.match(html, /MammalTox/);
  assert.match(html, /https:\/\/mammaltox\.streamlit\.app\//);
  assert.match(html, /Inavolisib: a second-generation PI3K/);
  assert.match(html, /Kean University Student Research Mentor Award/);
  assert.match(html, /id="news"/);
  assert.match(html, /Research in the news/);
  assert.match(html, /Kean Professor Leading Research Toward Zika Virus Treatment/);
  assert.match(html, /Kean University Gets NSF Grant to Probe Biological Insecticides/);
  assert.match(html, /href="#news">News<\/a>/);
  assert.match(html, /Institutional seed funding/);
  assert.match(html, /Institutional research fund/);
  assert.match(html, /Overall funding including internal projects/);
  assert.match(html, /\$1\.435M/);
  assert.match(html, />21<\/strong><span>Student-involved research articles/);
  assert.match(html, />18×<\/strong><span>Kean students received first authorship/);
  assert.doesNotMatch(html, /Fresenius Kabi/);
  assert.match(html, /og:image[^>]+https:\/\/supratik-kar-research\.example\/og\.png/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
  assert.doesNotMatch(html, /25 papers · 2020—2026/);
});

test("keeps the product metadata and assets wired", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /\/profile\.jpg/);
  assert.match(page, /Google Scholar/);
  assert.match(page, /id="publications"/);
  assert.match(page, /id="news"/);
  assert.match(page, /id="gallery"/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /x-forwarded-host/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await Promise.all([
    readFile(new URL("../public/profile.jpg", import.meta.url)),
    readFile(new URL("../public/og.png", import.meta.url)),
    readFile(new URL("../public/nyc-skyline-panorama.png", import.meta.url)),
    readFile(new URL("../public/gallery/kean-1.jpg", import.meta.url)),
    readFile(new URL("../public/gallery/wix/kean-21.webp", import.meta.url)),
    readFile(new URL("../public/gallery/wix/kean-22.webp", import.meta.url)),
    readFile(new URL("../public/gallery/wix/kean-23.webp", import.meta.url)),
    readFile(new URL("../public/gallery/wix/kean-24.webp", import.meta.url)),
    readFile(new URL("../public/gallery/wix/cmm-20.webp", import.meta.url)),
    readFile(new URL("../public/gallery/wix/cmm-08.webp", import.meta.url)),
    readFile(new URL("../public/news/zika-2025.webp", import.meta.url)),
    readFile(new URL("../public/news/qa-2024.webp", import.meta.url)),
    readFile(new URL("../public/news/top-scientist-2023.webp", import.meta.url)),
    readFile(new URL("../public/news/top-scientists-2024.webp", import.meta.url)),
    readFile(new URL("../public/news/top-scientists-2025.webp", import.meta.url)),
    readFile(new URL("../public/news/nsf-fungi-2025.webp", import.meta.url)),
  ]);
});
