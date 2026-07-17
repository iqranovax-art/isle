import { siteConfig } from './site';

export const theIsleImages = {
	hero: '/images/hero.webp',
	cover: '/images/cover.webp',
	logo: siteConfig.logo,
	product: [
		{ src: '/images/product-2.webp', alt: 'The Isle Cheats product preview for ESP and Aimbot packages' },
		{ src: '/images/product-3.webp', alt: 'The Isle combat scene used to illustrate Aimbot targeting context' },
		{ src: '/images/product-4.webp', alt: 'The Isle environment preview for ESP visibility discussion' },
		{ src: '/images/product-1.webp', alt: 'The Isle gameplay preview for cheat feature context' },
		{ src: '/images/product-6.webp', alt: 'The Isle dinosaur encounter preview for Aimbot and ESP overview' },
		{ src: '/images/cover.webp', alt: 'The Isle survival scene preview for The Isle Cheats packaging' },
	],
	gallery: [
		{ src: '/images/hero.webp', alt: 'The Isle Cheats ESP and Aimbot showcase preview', featured: true },
		{ src: '/images/product-2.webp', alt: 'The Isle dinosaur preview for ESP threat awareness' },
		{ src: '/images/product-3.webp', alt: 'The Isle combat preview for Aimbot targeting context' },
		{ src: '/images/product-4.webp', alt: 'The Isle landscape preview for ESP overlay context' },
		{ src: '/images/product-1.webp', alt: 'The Isle gameplay preview for cheat feature review' },
		{ src: '/images/product-6.webp', alt: 'The Isle herd encounter preview for ESP distance readouts' },
		{ src: '/images/product-7.webp', alt: 'The Isle predator chase preview for Aimbot control options' },
	],
} as const;
