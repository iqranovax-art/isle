# Cloudflare deployment

This site deploys to **Cloudflare Pages** (project: `isle`).

## Workers Builds settings

| Setting | Value |
| ------- | ----- |
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler pages deploy ./dist` |

Astro outputs static files to `./dist`, so the deploy step must use **Wrangler Pages**, not `npx wrangler deploy` (Workers).

Equivalent npm script:

```text
npm run deploy
```

## Manual deploy

```sh
npm install
npm run build
npx wrangler pages deploy ./dist
```

## Redirects

HTTP/www → HTTPS apex redirects are handled by `public/_worker.js`
(Pages advanced mode).
