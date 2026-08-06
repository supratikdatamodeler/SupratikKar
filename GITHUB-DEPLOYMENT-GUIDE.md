# GitHub Deployment and Update Guide

## Recommended approach

Store the complete source in one GitHub repository and use GitHub Pages with the
included GitHub Actions workflow. Every future push to `main` will rebuild and
publish the website automatically.

## First-time deployment

1. Sign in to GitHub and create a new repository.
2. Suggested repository name: `supratik-kar-research`.
3. Choose **Public** if you use GitHub Free and want GitHub Pages without a paid
   private-repository plan.
4. Extract `Supratik-Kar-Research-GitHub-Codex-Source.zip`.
5. Upload the extracted contents to the repository root. The folders `app`,
   `public`, `.github`, `scripts`, `tests` and the file `package.json` must all
   appear at the top level of the repository.
6. Commit the uploaded files to the `main` branch.
7. Open the repository's **Settings → Pages**.
8. Under **Build and deployment → Source**, choose **GitHub Actions**.
9. Open the **Actions** tab and wait for “Deploy research website to GitHub
   Pages” to complete.
10. GitHub will display the website URL in the deployment summary. For a project
    repository it is normally `https://YOUR-USERNAME.github.io/supratik-kar-research/`.

## Which ZIP file should be used?

- `Supratik-Kar-Research-GitHub-Codex-Source.zip` is the primary package. Upload
  this to GitHub and give it to another Codex account for future revisions.
- `Supratik-Kar-Research-Static-Site.zip` is a generated HTML/CSS/image copy.
  It is useful for backup or another static host, but it is not the preferred
  file for future editing.

## Future updates with Codex

1. Give the institutional Codex account access to the GitHub repository, or
   download and attach the source ZIP.
2. Tell Codex to read `CODEX-HANDOFF.md` before editing.
3. Ask Codex to change the source files under `app/` and `public/`.
4. Codex should run `npm test` before committing.
5. Commit and push the revision to `main`.
6. GitHub Actions automatically republishes the website.

Do not edit `dist/`, `_site/`, `node_modules/` or files inside `work/`. They are
generated and will be replaced during the next build.

## Updating without command-line Git

You may edit or upload files through the GitHub website. For large updates,
GitHub Desktop is easier: clone the repository, replace the revised source
files, review the changes, commit and push.

## Custom domain

After the GitHub Pages site works, a custom domain can be configured under
**Settings → Pages → Custom domain**. Domain ownership and DNS records must be
configured separately.
