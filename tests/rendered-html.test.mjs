import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://supratik-kar-research.example/", {
      headers: { accept: "text/html", "x-forwarded-host": "supratik-kar-research.example", "x-forwarded-proto": "https" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

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
  assert.match(html, /Incoming graduate student at Johns Hopkins University/);
  assert.match(html, /Old Research website/);
  assert.match(html, /class="role-title">Associate Editor/);
  assert.match(html, /class="role-journal">Molecular Diversity/);
  assert.match(html, /CMM Laboratory/);
  assert.match(html, /KidneyTox_v1\.0/);
  assert.match(html, /Kean University Student Research Mentor Award/);
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
    readFile(new URL("../public/gallery/wix/cmm-20.webp", import.meta.url)),
    readFile(new URL("../public/gallery/wix/cmm-08.webp", import.meta.url)),
  ]);
});
