# CarePair — marketing site

Production-oriented Next.js 15 site for **Vercel**: SEO metadata, `sitemap.xml`, `robots.txt`, security headers, draft **Privacy** / **Terms** pages, and store CTAs that degrade gracefully when listing URLs are not yet set.

Product copy lives in **`src/lib/site.ts`**. Canonical URL for OG + sitemap: **`NEXT_PUBLIC_SITE_URL`**.

## Deploy (Vercel)

### A — This repo is **only** the landing app (files at the root: `package.json`, `src/`, …)

This is the usual setup when you push **`CarePair/landing`** contents as their **own** GitHub repository.

1. **Root Directory in Vercel:** leave it **empty** or **`.`** (project root). **Do not** set it to `landing` — there is no `landing` subfolder; that setting is only for monorepos.
2. Framework preset: **Next.js** (auto-detected from `package.json`).
3. Build: default **`npm run build`** (or leave blank). Install: **`npm install`** or **`npm ci`** if you commit **`package-lock.json`**.
4. Set environment variables from **`.env.example`** — at minimum **`NEXT_PUBLIC_SITE_URL`** for correct social previews and sitemap.
5. Add **`NEXT_PUBLIC_APP_STORE_URL`** / **`NEXT_PUBLIC_PLAY_STORE_URL`** when listings are live.
6. Add **`NEXT_PUBLIC_CONTACT_EMAIL`** for support / inquiries.

### B — This repo is the **full CarePair monorepo** (`mobile/`, `server/`, `landing/`, …)

1. **Root Directory in Vercel:** set to **`landing`**.
2. Same env vars as above.

### If `*.vercel.app` returns **404** for `/`

- **Standalone repo (A):** Root Directory must **not** be `landing`. Clear it and redeploy.
- **Monorepo (B):** Root Directory **must** be `landing`. Set it and redeploy.

## GitHub Actions

- **Standalone landing repo:** use **`.github/workflows/ci.yml`** in this folder (lint + build at repo root). **Do not** use the monorepo workflow that references `mobile/` and `server/` — it will always fail.
- **Monorepo:** CI for this app is typically configured at the monorepo root with `working-directory: landing` (or deploy only from this subtree).

## Local

**Standalone repo** (you cloned a repo whose root is this app):

```bash
npm install
cp .env.example .env.local
# edit .env.local
npm run dev
```

**Inside the CarePair monorepo** on your machine:

```bash
cd landing
npm install
cp .env.example .env.local
npm run dev
```

## Legal

Privacy and terms pages are **draft templates** with prominent disclaimers. Replace with counsel-approved text before marketing spend or large-scale data collection.
