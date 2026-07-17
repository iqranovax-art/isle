import { siteConfig } from './site';

export const maraudersImages = {
	hero: '/images/hero.webp',
	cover: '/images/cover.webp',
	logo: siteConfig.logo,
	product: [
		{ src: '/images/product-2.webp', alt: 'Marauders Cheats product preview for ESP and Aimbot packages' },
		{ src: '/images/product-3.webp', alt: 'Marauders combat scene used to illustrate Aimbot targeting context' },
		{ src: '/images/product-4.webp', alt: 'Marauders environment preview for ESP visibility discussion' },
		{ src: '/images/product-1.webp', alt: 'Marauders beta gameplay preview for cheat feature context' },
		{ src: '/images/product-6.webp', alt: 'Marauders ship combat preview for Aimbot and ESP overview' },
		{ src: '/images/cover.webp', alt: 'Marauders raid scene preview for Marauders Cheats packaging' },
	],
	gallery: [
		{ src: '/images/hero.webp', alt: 'Marauders Cheats ESP and Aimbot showcase preview', featured: true },
		{ src: '/images/product-2.webp', alt: 'Marauders merchant ship preview for ESP loot awareness' },
		{ src: '/images/product-3.webp', alt: 'Marauders boarding action preview for Aimbot combat context' },
		{ src: '/images/product-4.webp', alt: 'Marauders terraformer preview for ESP overlay context' },
		{ src: '/images/product-1.webp', alt: 'Marauders beta gameplay preview for cheat feature review' },
		{ src: '/images/product-6.webp', alt: 'Marauders ship raid preview for ESP distance readouts' },
		{ src: '/images/product-7.webp', alt: 'Marauders space combat preview for Aimbot control options' },
	],
} as const;
