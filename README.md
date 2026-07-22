# islecheats.net

The Isle Cheats marketing site built with Astro.

Live site: https://islecheats.net

Cloudflare checklist for SEO (HTTP / www redirects):
1. Pages Git deploy: build `npm run build`, output `dist`, **no deploy command** (see `DEPLOY.md`)
2. Add DNS **CNAME** `www` → `islecheats.net` (proxied / orange cloud)
3. Add **both** `islecheats.net` and `www.islecheats.net` as custom domains on Pages
4. Enable **SSL/TLS → Always Use HTTPS**
5. Import `cloudflare/bulk-redirects.csv` as a Bulk Redirect backup (see `cloudflare/README.md`)

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
| `npm run preview` | Preview the production build        |
