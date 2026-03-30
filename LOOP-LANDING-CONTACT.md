# Loop — Landing contact & inquiries (production readiness)

**Scope:** `landing/` marketing site only.  
**Goal:** Match **`NEXT_PUBLIC_CONTACT_EMAIL`** with a real, user-visible **support / partnerships / early access** path before launch.

---

## Stage 1 — Ship (done in repo)

| Item | Status |
|------|--------|
| **`/contact`** route + metadata | Done |
| Home **`#contact`** section (same form) | Done |
| Topic + message **mailto** draft (no server secrets) | Done |
| Nav + footer links | Done |
| **`sitemap.xml`** includes `/contact` | Done |
| Fallback copy when email env is unset | Done |

**God 3:** Viable — users can complete an inquiry flow without a backend.

---

## Stage 2 — Configure (you on Vercel)

| Task | Done when |
|------|-----------|
| Set **`NEXT_PUBLIC_CONTACT_EMAIL`** to a monitored inbox | Production + Preview env |
| Smoke-test **Open in email app** on iOS Safari + Android Chrome + desktop | Draft sends from your client |
| Optional: dedicated **`support@`** vs founders’ email | Policy decided |

---

## Stage 3 — Strengthen (optional next loop)

| Task | Notes |
|------|--------|
| Server-side form (Resend, Postmark, etc.) | Better analytics; requires API route + secret |
| Spam protection (Turnstile, hCaptcha) | If you move off mailto |
| Auto-reply / ticketing (Zendesk, Help Scout) | Ops tooling |

**God 9:** Greenlight when Stage 2 is verified on the live **`*.vercel.app`** or custom domain.

---

**Related:** `README.md` (deploy env), `.env.example` (`NEXT_PUBLIC_CONTACT_EMAIL`).
