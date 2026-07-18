# Cloudflare deployment fix

This project is a **Cloudflare Pages** site (static Astro + `public/_worker.js`).

`npx wrangler deploy` does **not** work for Pages projects. Use Pages deploy instead.

## Required Workers Builds settings

In Cloudflare dashboard → Workers & Pages → **isle** → Settings → Builds:

| Setting | Value |
| ------- | ----- |
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy` |

Alternative (deploy during build, skip deploy step):

| Setting | Value |
| ------- | ----- |
| **Build command** | `npm run build` |
| **Deploy command** | `true` |

The build script runs `scripts/postbuild.mjs`, which deploys automatically when `WORKERS_CI=1`.

## Manual deploy

```sh
npm run build
npm run deploy
```

## Verify

```sh
curl -I https://islecheats.net/
```

You should see the updated hero subtitle `[Visuals, ESP, Radar]` after a successful deploy.
