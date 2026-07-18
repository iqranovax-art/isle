# islecheats.net

The Isle Cheats marketing site built with Astro.

Live site: https://islecheats.net

Cloudflare checklist for SEO:
1. Deploy with `dist/` + `public/_worker.js` (advanced mode handles www/http redirects)
2. Add **both** `islecheats.net` and `www.islecheats.net` as custom domains on Pages
3. Enable **SSL/TLS → Always Use HTTPS**
4. Proxy the `www` DNS record (orange cloud)

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Start dev server at `localhost:3000` |
| `npm run build`   | Build production site to `./dist/`  |
| `npm run preview` | Preview the production build        |
