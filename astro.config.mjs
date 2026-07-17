// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://theislecheats.com',
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
});
