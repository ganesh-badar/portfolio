# 🚀 Complete Deployment & Operations Guide

This document details the complete deployment architecture, build process, and GitHub Pages operations for the **Ganesh Badar Portfolio** monorepo.

---

## 📌 Quick Summary

- **Live URL:** [https://ganesh-badar.github.io/portfolio/](https://ganesh-badar.github.io/portfolio/)
- **Repository:** [https://github.com/ganesh-badar/portfolio](https://github.com/ganesh-badar/portfolio)
- **Source Branch:** `main` (React frontend + Spring Boot backend)
- **Deployment Branch:** `gh-pages` (Compiled production static build)

---

## 🏛️ Deployment Architecture

```
GitHub Repository (ganesh-badar/portfolio)
│
├── branch: main (Monorepo Source)
│   ├── backend/               # Spring Boot 3 REST API
│   │   ├── pom.xml
│   │   └── src/
│   │
│   └── frontend/              # React 19 + Vite 8 Client
│       ├── package.json
│       ├── vite.config.js     # base: '/portfolio/'
│       ├── index.html         # Canonical: https://ganesh-badar.github.io/portfolio/
│       ├── public/            # Static assets & SVG favicon
│       └── src/               # React components, SVG icons & design system
│
└── branch: gh-pages (Live Production Host)
    └── [Mounted at frontend/dist/]
        ├── index.html         # Production HTML with asset hashes
        ├── favicon.svg        # Clean geometric developer monogram
        ├── profile.jpg        # Verified developer photo
        ├── icons.svg          # Vector symbol sprites
        └── assets/            # Compiled & minified JS + CSS bundles
```

---

## 🛠️ Step-by-Step: How to Build & Deploy to GitHub Pages

### Prerequisites
- Node.js 18+ & npm
- Git authenticated with push access to `github.com/ganesh-badar/portfolio`

### Step 1: Clone or Navigate to Project
```bash
cd portfolio/frontend
```

### Step 2: Ensure Dependencies Are Installed
```bash
npm install
```

### Step 3: Verify Vite Base Path Configuration
In `frontend/vite.config.js`, ensure the `base` matches your GitHub Pages repository name:
```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Critical: Must match repository path on GitHub Pages
})
```

> **Why `/portfolio/`?**  
> Because GitHub Pages hosts project sites at `username.github.io/<repo-name>/`. Setting `base: '/portfolio/'` ensures Vite loads assets from `/portfolio/assets/` rather than the root `/assets/` (which would result in 404 errors).

### Step 4: Build the Production Bundle
```bash
npm run build
```
This compiles the application and outputs optimized bundles to `frontend/dist/`.

### Step 5: Commit & Push Source Code (`main` Branch)
From the root of the repository:
```bash
git add .
git commit -m "feat: your feature or update description"
git push origin main
```

### Step 6: Commit & Push Production Build (`gh-pages` Branch)
The `frontend/dist` directory is connected to the `gh-pages` branch. Navigate into `frontend/dist` and deploy:
```bash
cd frontend/dist
git add -A
git commit -m "deploy: update live site on GitHub Pages"
git push origin gh-pages
```

Within 30–60 seconds, GitHub Pages automatically refreshes the live site at:  
👉 **[https://ganesh-badar.github.io/portfolio/](https://ganesh-badar.github.io/portfolio/)**

---

## ⚡ One-Liner Redeployment Command (PowerShell)

To rebuild and redeploy everything in a single command from `portfolio/frontend`:

```powershell
npm run build; cd dist; git add -A; git commit -m "deploy: update live build on GitHub Pages"; git push origin gh-pages; cd ..
```

---

## 🛡️ Critical Rules & Anti-Vibe Standards

The portfolio strictly adheres to modern engineering and design standards:

1. **Zero Purple Gradients:** All color tokens use obsidian (`#09090b`), deep zinc (`#18181b`), and precision electric blue (`#2563eb`).
2. **Strict Architectural Geometry:** Zero pill buttons (`50px` or `9999px`). All interactive elements use crisp rectangular radii (`4px`–`6px`).
3. **Pure SVG Vector Icons:** Zero emojis across all buttons, section headers, badges, and terminal presets.
4. **Authentic Technical Copy:** Clear, concrete engineering positioning focusing on Java 17, Spring Boot 3, Hibernate ORM, MySQL, and asynchronous architectures.
5. **No AI Slop / Particles:** Zero floating particle engines, blurred orbs, custom cursor blobs, or fake customer counter widgets.
6. **Mandatory Legal Pages:** Fully standalone **Privacy Policy** and **Terms and Conditions** views accessible via footer navigation.

---

## 🔍 Troubleshooting & FAQ

### Issue: Assets return 404 (Blank White Screen)
- **Cause:** `base` path in `vite.config.js` was set to `/` or `./` instead of `/portfolio/`.
- **Fix:** Update `vite.config.js` to `base: '/portfolio/'` and run `npm run build`.

### Issue: GitHub Pages redirects to an old or unowned domain
- **Cause:** A `CNAME` file exists in `dist/` or `public/`.
- **Fix:** Remove `CNAME` from `frontend/public/` and `frontend/dist/`, commit, and push to `gh-pages`.

### Issue: Changes not appearing after push
- **Cause:** GitHub Pages CDN cache or browser cache.
- **Fix:** Hard refresh using `Ctrl + F5` (Windows) or open in an incognito window.
