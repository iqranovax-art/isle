# islecheats.net

The Isle Cheats marketing site built with Astro.

Live site: https://islecheats.net

Cloudflare checklist for SEO (HTTP / www redirects):
1. Deploy via Workers Builds (`npm run build` then `wrangler deploy`) using `wrangler.jsonc`
2. Add DNS **CNAME** `www` → `islecheats.net` (proxied / orange cloud)
3. Attach **both** `islecheats.net` and `www.islecheats.net` to the Worker custom domains
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
| `npm run preview` | Preview with Wrangler dev server    |
| `npm run deploy`  | Build and deploy to Cloudflare Workers |
