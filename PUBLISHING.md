# Publishing Workflow

This repository is published through GitHub Pages from the `main` branch root.

Live URL:

`https://micheleghezzi.github.io/dottore-agronomo/`

## Current setup

- The repository is already connected to GitHub with SSH.
- Pushes go to `micheleghezzi/dottore-agronomo`.
- GitHub Pages serves the site from the root of `main`.

## Standard update workflow

Open PowerShell and run:

```powershell
Set-Location "I:\My Drive\sito-zio-michele"
git status
git add -A
git commit -m "Describe the website update here"
git push
```

Example:

```powershell
Set-Location "I:\My Drive\sito-zio-michele"
git status
git add -A
git commit -m "Simplify site copy and improve layout"
git push
```

## Notes

- If Git asks for the SSH key passphrase, enter the passphrase for:

`C:\Users\spaci\.ssh\id_ed25519_dottore_agronomo`

- If `git commit` says there is nothing to commit, the working tree is already clean.
- If GitHub Pages does not update immediately, wait a minute and refresh the site.

## Optional checks before pushing

```powershell
Set-Location "I:\My Drive\sito-zio-michele"
git status
git diff --stat
```

## If you want to inspect what will be published

Because this is a static site, the main files are usually:

- `index.html`
- `styles.css`
- `profilo.html`
- `servizi.html`
- `pubblicazioni.html`
- `interventi.html`
- `contatti.html`
- `robots.txt`
- `sitemap.xml`
- `assets/`

## If the remote branch is already tracked

This repository is already set up to track `origin/main`, so in normal use:

```powershell
git push
```

is enough after committing.
