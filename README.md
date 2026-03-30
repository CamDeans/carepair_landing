# CarePair — marketing site

Production-oriented Next.js 15 site for **Vercel**: SEO metadata, `sitemap.xml`, `robots.txt`, security headers, draft **Privacy** / **Terms** pages, and store CTAs that degrade gracefully when listing URLs are not yet set.

Product copy lives in **`src/lib/site.ts`**. Canonical URL for OG + sitemap: **`NEXT_PUBLIC_SITE_URL`**.

## Deploy (Vercel)

### A — This repo is **only** the landing app (files at the root: `package.json`, `src/`, …)

This is the usual setup when you push **`CarePair/landing`** contents as their **own** GitHub repository.

1. **Root Directory in Vercel:** leave it **empty** or **`.`** (project root). **Do not** set it to `landing` — there is no `landing` subfolder; that setting is only for monorepos.
2. Framework preset: **Next.js** (the repo includes **`vercel.json`** with `"framework": "nextjs"` to reinforce this).
3. **Build & Development Settings:** use default **Build** (`npm run build`) and **Install** (`npm install`, or `npm ci` if **`package-lock.json`** is committed). **Output Directory must be empty** — if it is set to `out`, `dist`, or `.next/export`, you will get **404** on `/`.
4. Set environment variables from **`.env.example`** — **`NEXT_PUBLIC_SITE_URL`** should include **`https://`** (e.g. `https://carepair-landing.vercel.app`). If unset, the app uses **`VERCEL_URL`** at build time when Vercel provides it, else `https://carepair.app`.
5. Add **`NEXT_PUBLIC_APP_STORE_URL`** / **`NEXT_PUBLIC_PLAY_STORE_URL`** when listings are live.
6. Set **`NEXT_PUBLIC_CONTACT_EMAIL`** to a monitored inbox — it powers the **`/contact`** inquiry form (mailto drafts with topic + message). Without it, visitors see a polite “not configured” state.

### B — This repo is the **full CarePair monorepo** (`mobile/`, `server/`, `landing/`, …)

1. **Root Directory in Vercel:** set to **`landing`**.
2. Same env vars as above.

### If `*.vercel.app` returns **404** for `/`

- **Standalone repo (A):** Root Directory must **not** be `landing`. Clear it and redeploy.
- **Monorepo (B):** Root Directory **must** be `landing`. Set it and redeploy.
- **Any setup:** In **Settings → General → Build & Development Settings**, ensure **Output Directory** is **empty**. A wrong value here is a common cause of **404** on otherwise “successful” builds.
- Open the latest **Deployment → Build Logs** and confirm **`next build`** completed and there is no framework mismatch.

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

## Brand & shared assets

Canonical files live in the monorepo **`brand/`** folder (`logo-mark.svg`, `tokens.json`). The marketing site serves the mark from **`public/brand/`** (keep identical to `brand/logo-mark.svg` when you edit). See **`brand/README.md`** and **`brand/LOOP-BRAND-AND-ASSETS.md`** (Vortex-style **God 3 / 6 / 9** checklist). If this repo is **landing-only**, copy `brand/*` into `public/brand/` and document palette in your README fork.

## Contact & inquiries (production loop)

See **`LOOP-LANDING-CONTACT.md`** for the staged checklist (ship → Vercel env → optional server-side form). The live UI is **`/contact`** and the **`#contact`** section on the home page.

## Legal

Privacy and terms pages are **draft templates** with prominent disclaimers. Replace with counsel-approved text before marketing spend or large-scale data collection.
