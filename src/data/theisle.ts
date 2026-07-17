import { siteConfig } from './site';

export const theIsleImages = {
	hero: '/images/hero.webp',
	cover: '/images/cover.webp',
	logo: siteConfig.logo,
	product: [
		{ src: '/images/product-2.webp', alt: 'The Isle Cheats product preview for Cloud-DMA, ESP, and Exploits' },
		{ src: '/images/product-3.webp', alt: 'The Isle combat scene used to illustrate Exploit options' },
		{ src: '/images/product-4.webp', alt: 'The Isle environment preview for World ESP discussion' },
		{ src: '/images/product-1.webp', alt: 'The Isle gameplay preview for cheat feature context' },
		{ src: '/images/product-6.webp', alt: 'The Isle dinosaur encounter preview for ESP and Exploits overview' },
		{ src: '/images/cover.webp', alt: 'The Isle survival scene preview for The Isle Cheats packaging' },
	],
	gallery: [
		{ src: '/images/hero.webp', alt: 'The Isle Cheats Cloud-DMA, ESP, and Exploits showcase preview', featured: true },
		{ src: '/images/product-2.webp', alt: 'The Isle dinosaur preview for Visuals ESP threat awareness' },
		{ src: '/images/product-3.webp', alt: 'The Isle combat preview for Exploit targeting context' },
		{ src: '/images/product-4.webp', alt: 'The Isle landscape preview for World ESP overlay context' },
		{ src: '/images/product-1.webp', alt: 'The Isle gameplay preview for cheat feature review' },
		{ src: '/images/product-6.webp', alt: 'The Isle herd encounter preview for ESP distance readouts' },
		{ src: '/images/product-7.webp', alt: 'The Isle predator chase preview for Instant Rotation and Exploits' },
	],
} as const;
