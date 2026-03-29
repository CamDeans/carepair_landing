# VORTEX-ASSETS.md — Landing (Loop F)

**Project:** CarePair marketing site (`landing/`)  
**Date:** 2026-03-29  

---

## F — Stage 5 — Config

Create **`.env.local`** (gitignored) from **`.env.example`** for local preview. In **Vercel**, set the same as **Environment Variables** (Production + Preview optional).

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Required for production SEO** — canonical origin, no trailing slash (e.g. `https://www.carepair.ca`) |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store listing URL |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play listing URL |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Support / inquiries mailto |

No server secrets on this site.

---

## F — Stage 4 — Content

| Item | Source |
|------|--------|
| Value prop, features, pricing | `src/lib/site.ts` — keep aligned with monorepo `VORTEX-HANDOFF.md` |
| Legal | Placeholder disclaimer only — replace with counsel-approved privacy/terms before scale |

---

## F — Stage 7 — Review

- [ ] Store URLs set when apps are public  
- [ ] Pricing line matches actual Stripe / App Store configuration  
- [ ] ICP (“Calgary-first”) updated when geography expands  

---

## Deploy checklist (Vercel)

1. Repo root = contents of `landing/` (or Vercel **Root Directory** = `landing` if monorepo).  
2. Build: `npm run build`, Output: Next.js default.  
3. Node: 20.x LTS (Vercel default).  
4. Set **`NEXT_PUBLIC_SITE_URL`** in Production (and Preview if you share links).  
5. Replace **Privacy** / **Terms** drafts with counsel-approved text before paid acquisition.  
