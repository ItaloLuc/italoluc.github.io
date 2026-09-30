# Ítalo Lúcio — Portfolio

A dark, game-inspired portfolio in Portuguese and English. Static HTML, CSS and JavaScript; no build step, server or API keys required. Hosted on GitHub Pages.

## Run locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. The project editor is at `/admin.html`.

## Update projects

1. Open `admin.html` and edit, add, remove or reorder projects.
2. Save the project to the local draft. Drafts persist in this browser's localStorage; they do not affect the published site. Preview opens the portfolio with the saved local draft.
3. Export `projects.js`. Keep this file as a backup.
4. Replace `data/projects.js` in GitHub with the exported contents and commit. GitHub Pages publishes the change.

The editor also imports exported JavaScript files or JSON arrays, supports English descriptions and accepts image URLs or embedded PNG/JPEG/WebP images up to 1 MB. File imports are parsed as JSON, never evaluated as JavaScript. Only HTTP/HTTPS project links are allowed.

The editor does not have authentication because it cannot write to GitHub or modify public data. Editing requires no password; publishing requires access to the repository. It never requests or stores a GitHub token. Browser data can be cleared; export drafts to keep them.

## Structure

- `index.html`, `portfolio-en.html`: public pages with a built-in VT Pulse fallback when JavaScript or project data is unavailable.
- `data/projects.js`: published projects.
- `js/projects-core.js`: shared validation, import and export.
- `js/main.js`: public project rendering, mobile navigation, clipboard and local preview.
- `admin.html`, `admin.css`, `js/admin.js`: local project editor.
- `style.css`: responsive interface and reduced-motion support.
- Legacy page URLs redirect to their corresponding sections.

The project art is illustrative, not a screenshot. Keyboard navigation, readable text and reduced motion are supported.
