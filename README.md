# Dr. Supratik Kar Research Website

This repository contains the complete, editable source for Dr. Supratik Kar's
professional research website. It is designed for long-term maintenance through
GitHub and can be edited from any Codex account that has access to the repository.

## Which files control the website?

- `app/site-data.ts` — publications, grants, awards, people, links and gallery data.
- `app/page.tsx` — page structure and section order.
- `app/globals.css` — colors, typography, spacing and responsive design.
- `public/` — photographs, logos and other image assets.
- `.github/workflows/deploy-github-pages.yml` — automatic GitHub Pages deployment.
- `scripts/export-github-pages.mjs` — converts the validated site into static files.
- `CODEX-HANDOFF.md` — instructions for a Codex account editing this repository.
- `GITHUB-DEPLOYMENT-GUIDE.md` — step-by-step GitHub setup and update instructions.

Generated folders such as `dist/`, `_site/`, `node_modules/` and `work/` are not
source files and should not be edited.

## Local commands

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
npm test
npm run export:github-pages
```

`npm test` builds the site and verifies its rendered content. The export command
creates `_site/`, which is the static version uploaded by GitHub Pages.

## Updating the live GitHub Pages website

Edit the readable source files, verify with `npm test`, then commit and push to
the `main` branch. GitHub Actions automatically builds and publishes the update.

See [GITHUB-DEPLOYMENT-GUIDE.md](GITHUB-DEPLOYMENT-GUIDE.md) for the first-time
setup and [CODEX-HANDOFF.md](CODEX-HANDOFF.md) for future Codex revisions.
