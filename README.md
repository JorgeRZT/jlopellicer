# jlopellicer.com

[![Website](https://img.shields.io/badge/web-jlopellicer.com-e0291b)](https://www.jlopellicer.com)
[![Astro](https://img.shields.io/badge/Astro-static%20site-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](tsconfig.json)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers%20assets-F38020?logo=cloudflare&logoColor=white)](wrangler.jsonc)
[![Node](https://img.shields.io/badge/node-%E2%89%A5%2022-339933?logo=nodedotjs&logoColor=white)](package.json)
[![Languages](https://img.shields.io/badge/i18n-ES%20%7C%20EN-blue)](#editing-the-content)
[![Last commit](https://img.shields.io/github/last-commit/JorgeRZT/jlopellicer)](https://github.com/JorgeRZT/jlopellicer/commits/main)
[![Top language](https://img.shields.io/github/languages/top/JorgeRZT/jlopellicer)](https://github.com/JorgeRZT/jlopellicer)
[![Repo size](https://img.shields.io/github/repo-size/JorgeRZT/jlopellicer)](https://github.com/JorgeRZT/jlopellicer)

Personal site of Jorge López Pellicer, live at **https://www.jlopellicer.com**.

The home page is a conversation: pick a question from the input box and the answer is typed out in the chat. There is also an **Apps** section (with a detail page per app) and a **Blog**. Everything is available in **Spanish** (`/`) and **English** (`/en/`).

Built with [Astro](https://astro.build) as a fully static site and served by Cloudflare. No UI framework and no runtime dependencies.

## Getting started

Requires Node.js 22 or later.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

## Editing the content

| What | Where |
| --- | --- |
| Bio, experience, education, certifications, skills (both languages) | `src/data/profile.ts` |
| Contact links (email, LinkedIn, GitHub) | `contact` in `src/data/profile.ts` |
| Apps shown in `/apps/` and in the chat | `src/data/apps.ts` |
| Chat questions and every UI string | `src/i18n/index.ts` |
| Colors, spacing, shared components | `src/styles/global.css` (tokens in `:root`) |

### Chat questions

Each question in the dropdown is a key in `chat.prompts` (`src/i18n/index.ts`) paired with a block with the same `data-key` in `src/components/HomePage.astro`. To add one, add the key to both languages and the matching answer block.

### Apps

Add an object to the `apps` array in `src/data/apps.ts`. The `slug` becomes the URL (`/apps/<slug>/` and `/en/apps/<slug>/`).

- `icon` is optional: put an image in `public/apps/`. Without it a letter tile is shown.
- `download: true` adds a download button built from the **latest GitHub release** of `repo` (first asset). It is resolved at build time, so redeploy after publishing a new release. Set `GITHUB_TOKEN` in the build environment to avoid GitHub API rate limits.
- `live` adds an "Open app" button for hosted apps.

### Blog

Posts are Markdown files, one per language and with the same file name so the language switcher can link them:

```
src/content/blog/es/my-post.md
src/content/blog/en/my-post.md
```

```md
---
title: Post title
description: One-line summary.
date: 2026-10-21
draft: false   # true hides it from the site
---
```

## Project structure

```
src/
  components/   Sidebar, Footer, HomePage (chat), AppsPage, AppDetail, BlogIndex, PostPage…
  content/blog/ Markdown posts (es/ and en/)
  data/         profile.ts, apps.ts
  i18n/         languages, UI strings, path() helper
  layouts/      Base.astro (frame, sidebar, SEO and hreflang tags)
  pages/        Spanish routes at the root, English under en/
  styles/       global.css
public/         favicon, robots.txt, app icons
```

Spanish is the default language and has no URL prefix; English lives under `/en/`.

## Deployment (Cloudflare)

The site compiles to static files in `dist/`, served as Workers static assets (`wrangler.jsonc`).

```bash
npm run deploy    # astro build && wrangler deploy
```

Then attach `www.jlopellicer.com` to the Worker in the Cloudflare dashboard. It can also be built from Git: connect the repository with build command `npm run build` and output directory `dist`.
