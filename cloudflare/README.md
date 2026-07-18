# Cloudflare redirect setup for islecheats.net

Seobility and other SEO tools require **one canonical URL**: `https://islecheats.net`.

The site ships with `public/_worker.js` (Pages advanced mode) to 301 redirect:

- `http://islecheats.net` → `https://islecheats.net`
- `http://www.islecheats.net` → `https://islecheats.net`
- `https://www.islecheats.net` → `https://islecheats.net`

## Required Cloudflare dashboard steps

### 1. DNS

| Type  | Name | Target / Content | Proxy   |
| ----- | ---- | ---------------- | ------- |
| CNAME | www  | islecheats.net   | Proxied |

Without a `www` DNS record, the www hostname cannot redirect and SEO tools will flag duplicate host issues.

### 2. SSL/TLS

Enable **Always Use HTTPS** under SSL/TLS → Edge Certificates.

### 3. Custom domains (Pages)

Attach **both** hostnames to the Pages project:

- `islecheats.net`
- `www.islecheats.net`

### 4. Redirect layers in this repo

Redirects are configured in three places so SEO tools always see one canonical host:

1. `public/_redirects` — Cloudflare Pages host + path 301 rules
2. `public/_worker.js` — Pages advanced mode worker (http/www → apex HTTPS)
3. `cloudflare/bulk-redirects.csv` — optional dashboard Bulk Redirect backup

### 5. Bulk Redirects (recommended backup)

Import `cloudflare/bulk-redirects.csv` under **Bulk Redirects**, then create a Bulk Redirect Rule that uses the list.

Parameters: preserve query string, subpath matching, preserve path suffix. For the www rows, enable include subdomains.

## Verify

```sh
curl -I http://islecheats.net/
curl -I https://www.islecheats.net/
curl -I http://www.islecheats.net/
```

Each command should return `301` with `Location: https://islecheats.net/...`.
