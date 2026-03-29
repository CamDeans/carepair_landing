# VORTEX-HANDOFF.md — Landing (Loop B → Loop C)

**Project:** CarePair marketing site  
**Product source:** CarePair monorepo `VORTEX-HANDOFF.md` + `CarePair_Full_Scope_2026.docx`  
**Stack:** Next.js 15, Tailwind, Vercel  
**Date:** 2026-03-29  

---

## B — Stage 1 — Ideate

**Goal:** Single-page (expandable) landing that explains CarePair to families and caregivers, drives App Store / Play installs, and stays legally honest (marketing only — no web app login).

**Audience:** Calgary-first families (paying) and caregivers (free); tone matches app: calm, trustworthy, professional.

---

## B — Stage 2 — Architect

| Layer | Choice | Rationale |
|--------|--------|-----------|
| Framework | **Next.js 15 App Router** | Vercel-native, SSR/SSG, good SEO defaults |
| Styling | **Tailwind CSS** | Tokens aligned with app (`#0d9488`, `#0f172a`, `#f8fafc`) |
| Content | **`src/lib/site.ts`** | One file to sync with product; env for store URLs |
| Deploy | **Vercel** | Zero-config for Next.js; env in dashboard |

---

## B — Stage 4 — Sitemap

| Route | Purpose |
|-------|---------|
| `/` | Hero, problem/solution, features, pricing, CTAs |
| `/privacy` | Draft privacy policy (counsel must replace) |
| `/terms` | Draft terms of use (counsel must replace) |
| `robots.ts` / `sitemap.ts` | SEO |

**Production loop (repo root):** `VORTEX-LOOP-LANDING-II-PRODUCTION.md`

---

## B — Stage 5 — Design system

Mirrors `mobile/src/theme/tokens.ts`:

| Token | Value |
|--------|--------|
| Primary | `#0d9488` |
| Primary dark | `#0f766e` |
| Background | `#f8fafc` |
| Surface | `#ffffff` |
| Text | `#0f172a` / `#64748b` |

---

## B — Stage 7 — Elements

1. **Header** — wordmark + ICP line  
2. **Hero** — headline, solution line, store CTAs  
3. **Why** — problem + solution + native-only disclaimer  
4. **Feature grid** — Discover, Messages, CareSpace, scheduling, calendar, subscriptions  
5. **Pricing band** — trial + monthly + caregiver free + counsel note  
6. **Footer** — year, “marketing only”  

---

## Handoff — Loop C + L-II (production surface)

**Implemented:** Full marketing **`/`** with header/footer/store CTAs; **`site.ts`** + **`siteUrl.ts`**; **`/privacy`**, **`/terms`** (draft — counsel replaces); **`robots.ts`**, **`sitemap.ts`**, **`not-found.tsx`**; **`JsonLd`**, **`metadataBase`** / OG; **`vercel.json`** security headers; **`README.md`** deploy notes.

**Next (ops / legal, not code):** Set Vercel **`NEXT_PUBLIC_SITE_URL`**, **`NEXT_PUBLIC_APP_STORE_URL`**, **`NEXT_PUBLIC_PLAY_STORE_URL`**, **`NEXT_PUBLIC_CONTACT_EMAIL`**; replace Privacy/Terms with counsel-approved copy; optional brand imagery.

**God gates (L-II):** Treat **3 / 6** as met for scaffold; **9 GREENLIT** when production URL is live and legal copy is final (or explicitly marked draft for unpaid channels only).
