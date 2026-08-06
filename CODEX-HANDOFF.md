# Codex Handoff Instructions

This is the canonical, editable source for Dr. Supratik Kar's research website.
Read this file before making future revisions from any Codex account.

## Source-of-truth files

1. `app/site-data.ts` contains structured scholarly content and links.
2. `app/page.tsx` contains the page sections and visible text.
3. `app/globals.css` contains the complete visual design and responsive rules.
4. `public/` contains every image and logo used by the website.
5. `tests/rendered-html.test.mjs` protects important content and assets.

## Required update procedure

1. Preserve the existing architecture and do not recreate the site from a
   screenshot or generated static HTML.
2. Edit readable source files only. Never hand-edit `dist/` or `_site/`.
3. Keep external links complete and use accessible image alt text.
4. Run `npm test` after all changes.
5. Run `npm run export:github-pages` if a local static copy is needed.
6. Commit only intentional source changes and push them to `main`.
7. Confirm the GitHub Pages workflow succeeds.

## Useful request for a new Codex session

> Open this repository and read CODEX-HANDOFF.md. Update the requested website
> content in app/site-data.ts, app/page.tsx and app/globals.css as appropriate.
> Preserve the existing design, run npm test, commit the verified changes, and
> push to main so GitHub Pages republishes the site.

The `.openai/hosting.json` file belongs to the existing OpenAI Sites project.
Another Codex account may edit the GitHub source without using that project ID.
GitHub Pages deployment is controlled by `.github/workflows/deploy-github-pages.yml`.
