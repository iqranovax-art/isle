# Cloudflare deployment

This site deploys to **Cloudflare Pages** (project: `isle`).

## Workers Builds settings

| Setting | Value |
| ------- | ----- |
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy` |

Direct equivalent:

```text
npx wrangler pages deploy ./dist --project-name=isle --commit-dirty=true
```

**Do not use** `npx wrangler deploy` — that targets Workers and will fail.

## Manual deploy

```sh
npm install
npm run build
npm run deploy
```

## Redirects

HTTP/www → HTTPS apex redirects are handled by `public/_worker.js`
(Pages advanced mode) and `public/_redirects`.
