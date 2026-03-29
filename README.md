# CarePair — marketing site

Production-oriented Next.js 15 site for **Vercel**: SEO metadata, `sitemap.xml`, `robots.txt`, security headers, draft **Privacy** / **Terms** pages, and store CTAs that degrade gracefully when listing URLs are not yet set.

Product copy lives in **`src/lib/site.ts`**. Canonical URL for OG + sitemap: **`NEXT_PUBLIC_SITE_URL`**.

## Deploy (Vercel)

1. Connect the GitHub repo (this folder as root, or monorepo with **Root Directory** = `landing`).
2. Set environment variables from **`.env.example`** — at minimum **`NEXT_PUBLIC_SITE_URL`** for correct social previews and sitemap.
3. Add **`NEXT_PUBLIC_APP_STORE_URL`** / **`NEXT_PUBLIC_PLAY_STORE_URL`** when listings are live.
4. Add **`NEXT_PUBLIC_CONTACT_EMAIL`** for support / inquiries.

### If `*.vercel.app` returns **404** for `/`

That almost always means Vercel is building from the **wrong folder**. This repo is a **monorepo**: the Next.js app only lives under **`landing/`**.

1. Open the project on Vercel → **Settings** → **General**.
2. Under **Root Directory**, set **`landing`** (not the repository root), then save.
3. Trigger a new deployment (**Deployments** → **⋯** on the latest → **Redeploy**).

Until this is set, Vercel may finish a build with nothing to serve at `/`, so **GET** and **HEAD** `/` return **404**. Scripts such as **`feedback.js`** (Vercel / browser tooling) can show **HEAD … 404** for the same reason.

## Local

```bash
cd landing
npm install
cp .env.example .env.local
# edit .env.local
npm run dev
```

## Legal

Privacy and terms pages are **draft templates** with prominent disclaimers. Replace with counsel-approved text before marketing spend or large-scale data collection.
