# Security Policy — UTTsolar.in

## Reporting Vulnerabilities

Please report security vulnerabilities **privately** by contacting the project owner directly. Do **not** open a public GitHub issue for security concerns.

We aim to respond within 72 hours and resolve critical issues within 7 days.

---

## Implemented Security Measures

### HTTP Security Headers (next.config.js)
| Header | Value |
|---|---|
| Content-Security-Policy | Strict per-directive policy; unsafe-eval removed in production |
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload |
| X-Content-Type-Options | nosniff |
| X-Frame-Options | DENY |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera, microphone, geolocation, payment all denied |

### API Route Security (/api/contact, /api/calculator-lead)
- **POST-only enforcement** — GET/PUT/DELETE/PATCH return 405
- **Rate limiting**: 3 submissions per minute per IP (with auto-cleanup)
- **Body size limit**: 10KB maximum per request
- **Content-Type enforcement**: Only application/json accepted
- **Zod server-side validation** on all inputs with .trim() on strings
- **No PII in logs**: names and phone numbers are never logged
- **Generic error responses**: Internal error details never sent to client
- **Safe JSON parsing**: try/catch around JSON.parse, not request.json()

### Form Security
- Client-side validation before submission
- Honeypot field (hidden input) for bot protection
- Server-side re-validation (never trust client-side)

### Dependency Security
**Known Advisory (Low Runtime Risk)**:
PostCSS vulnerabilities (GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849) exist in Next.js internal build-time PostCSS. These affect only the CSS build pipeline, not the production runtime. Monitor for upstream Next.js patch releases.

---

## Hosting / Server Configuration Required

The following must be configured at your hosting provider (Vercel/Cloudflare):

- [ ] **Force HTTPS** — HTTP to HTTPS redirect in Vercel Dashboard > Settings > Domains
- [ ] **WAF** — Enable Vercel Firewall or use Cloudflare WAF
- [ ] **DDoS Protection** — Enabled by default on Vercel/Cloudflare
- [ ] **HSTS Preload** — After confirming HSTS is working, submit to https://hstspreload.org
- [ ] **Edge Rate Limiting** — Configure Vercel or Cloudflare rate limiting for additional protection
- [ ] **Environment Variables** — Store any future API keys in Vercel Dashboard > Settings > Environment Variables, NEVER in source code

---

## What Is NOT Stored
- No database: lead submissions are server-log only
- No passwords or authentication tokens
- No sensitive data in localStorage or sessionStorage
- No API secrets in frontend code
- No user PII in application logs
