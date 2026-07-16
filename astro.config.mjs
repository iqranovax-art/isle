// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { getEntryForUrl } from './src/data/page-sitemap.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://marauderscheats.com',
	trailingSlash: 'always',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
		format: 'directory',
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: true,
			assetsInlineLimit: 4096,
		},
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/404') && !page.includes('sitemap-images'),
			namespaces: {
				news: false,
				xhtml: false,
				image: true,
				video: false,
			},
			customSitemaps: ['https://marauderscheats.com/sitemap-images.xml'],
			serialize(item) {
				const entry = getEntryForUrl(item.url);
				if (!entry) return item;

				item.priority = entry.priority;
				item.changefreq = entry.changefreq;
				item.lastmod = new Date().toISOString();

				// Runtime sitemap writer supports `img` even if Astro's type omits it.
				return {
					...item,
					img: entry.images.map((image) => ({
						url: image.url,
						title: image.title,
						caption: image.caption,
					})),
				};
			},
		}),
	],
});
