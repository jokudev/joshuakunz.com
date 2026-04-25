# DevOps Portfolio Site (Astro + Tailwind)

Static portfolio site built with Astro and Tailwind CSS, designed with an infrastructure-blueprint aesthetic and deployed via GitHub Pages.

## Stack

- Astro (static output)
- Tailwind CSS
- lucide-astro icons
- GitHub Actions Pages deployment

## Local Setup

```bash
npm ci
npm run dev
```

Build production output:

```bash
npm run build
```

This generates the static site in `dist/`.

## Content Editing

Update `src/data/profile.ts` to edit:

- profile identity and links
- about text
- skills/toolkit categories
- experience timeline
- projects

## Deployment (GitHub Pages)

The workflow is defined in `.github/workflows/deploy.yml` and runs on pushes to `main`.

### Required repository setting

Enable GitHub Pages from Actions:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── sections/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

