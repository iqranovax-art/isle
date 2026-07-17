// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://islecheats.net',
	trailingSlash: 'always',
	compressHTML: true,
	server: {
		host: true,
		port: 4321,
	},
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
