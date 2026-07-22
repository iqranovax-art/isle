// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://islecheats.net',
	output: 'static',
	trailingSlash: 'always',
	compressHTML: true,
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	build: {
		inlineStylesheets: 'auto',
		format: 'directory',
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			host: '0.0.0.0',
			strictPort: false,
			allowedHosts: true,
		},
		build: {
			cssMinify: true,
			assetsInlineLimit: 4096,
		},
	},
});
