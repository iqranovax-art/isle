# islecheats.net

The Isle Cheats marketing site built with Astro.

Live site: https://islecheats.net

Cloudflare checklist for SEO (HTTP / www redirects):
1. Set Workers Builds **deploy command** to `npm run deploy` (see `DEPLOY.md`)
2. Build with `npm run build` (deploys on CI via `scripts/postbuild.mjs` when deploy is `true`)
3. Add DNS **CNAME** `www` → `islecheats.net` (proxied / orange cloud)
4. Attach **both** `islecheats.net` and `www.islecheats.net` to the Pages project
5. Enable **SSL/TLS → Always Use HTTPS**
6. Import `cloudflare/bulk-redirects.csv` as a Bulk Redirect backup (see `cloudflare/README.md`)

Verify after deploy:

```sh
curl -I http://islecheats.net/
curl -I https://www.islecheats.net/
```

Both should return `301` → `https://islecheats.net/`.

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Start dev server at `localhost:3000` |
| `npm run build`   | Build production site to `./dist/`  |
| `npm run preview` | Preview the Astro production build |
| `npm run deploy`  | Deploy `dist/` to Cloudflare Pages (`isle` project) |
