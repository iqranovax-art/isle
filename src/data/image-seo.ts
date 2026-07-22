import { siteConfig } from './site';

export type SiteImageSeo = {
	id: string;
	src: string;
	alt: string;
	title: string;
	caption: string;
	keywords: readonly string[];
};

const baseKeywords = [
	'The Isle Cheats',
	'The Isle cheats',
	'isle cheats',
	'islecheats.net',
	'Cloud-DMA',
	'ESP',
	'World ESP',
	'Visuals ESP',
	'Cheats',
	'The Isle',
	'Windows PC',
] as const;

export const siteImageCatalog: SiteImageSeo[] = [
	{
		id: 'hero',
		src: '/images/hero.webp',
		alt: 'The Isle Cheats hero banner — Cloud-DMA, Visuals ESP, World ESP, and Cheats for Windows PC',
		title: 'The Isle Cheats hero — ESP and hacks showcase',
		caption:
			'Homepage hero for The Isle Cheats showing Cloud-DMA, Visuals ESP, World ESP, and survival hack packages on islecheats.net.',
		keywords: [...baseKeywords, 'hero banner', 'dinosaur survival', 'ESP hacks', 'game cheats'],
	},
	{
		id: 'cover',
		src: '/images/cover.webp',
		alt: 'The Isle Cheats cover — dinosaur herd scene for Cloud-DMA and ESP package preview',
		title: 'The Isle Cheats package cover image',
		caption:
			'Cover artwork for The Isle Cheats packages featuring a dinosaur herd scene used across pricing, support, and policy pages.',
		keywords: [...baseKeywords, 'cover art', 'dinosaur herd', 'package preview', 'pricing visual'],
	},
	{
		id: 'product-1',
		src: '/images/product-1.webp',
		alt: 'The Isle gameplay preview — cheat features, ESP overlays, and survival context',
		title: 'The Isle gameplay preview for cheat features',
		caption:
			'Gameplay screenshot illustrating The Isle Cheats ESP overlays, survival awareness, and cheat feature context on Windows PC.',
		keywords: [...baseKeywords, 'gameplay preview', 'ESP overlay', 'survival hacks', 'feature context'],
	},
	{
		id: 'product-2',
		src: '/images/product-2.webp',
		alt: 'The Isle Cheats product preview — Cloud-DMA, Visuals ESP, World ESP, and Cheats package',
		title: 'The Isle Cheats product preview image',
		caption:
			'Primary product preview for The Isle Cheats Cloud-DMA package with Visuals ESP, World ESP, and Cheats for dinosaur survival.',
		keywords: [...baseKeywords, 'product preview', 'Visuals ESP', 'threat awareness', 'entity ESP'],
	},
	{
		id: 'product-3',
		src: '/images/product-3.webp',
		alt: 'The Isle combat scene — Instant Rotation, Auto-Attack, and Cheat targeting preview',
		title: 'The Isle combat scene for Cheats and targeting',
		caption:
			'Combat reference image for The Isle Cheats showing Instant Rotation, Auto-Attack, Omnimovement, and combat hack options.',
		keywords: [...baseKeywords, 'Instant Rotation', 'Auto-Attack', 'combat cheats', 'Omnimovement', 'targeting'],
	},
	{
		id: 'product-4',
		src: '/images/product-4.webp',
		alt: 'The Isle environment preview — World ESP for resources, water, herbs, and map awareness',
		title: 'The Isle World ESP environment preview',
		caption:
			'Landscape preview for World ESP showing bodies, meat, fruits, herbs, mushrooms, and water resource tracking in The Isle.',
		keywords: [...baseKeywords, 'World ESP', 'resource ESP', 'environment overlay', 'map awareness', 'herbs', 'water'],
	},
	{
		id: 'product-5',
		src: '/images/product-5.webp',
		alt: 'The Isle Cheats pricing package preview — monthly and lifetime Cloud-DMA licenses',
		title: 'The Isle Cheats pricing and package preview',
		caption:
			'Pricing page visual for The Isle Cheats monthly and lifetime Cloud-DMA, ESP, and Cheats license packages in USD.',
		keywords: [...baseKeywords, 'pricing', 'monthly license', 'lifetime license', 'USD packages', 'Cloud-DMA pricing'],
	},
	{
		id: 'product-6',
		src: '/images/product-6.webp',
		alt: 'The Isle dinosaur encounter — ESP distance readouts, health bars, and Cheats overview',
		title: 'The Isle dinosaur encounter ESP preview',
		caption:
			'Dinosaur encounter preview for Visuals ESP distance readouts, health, growth stats, and Cheats overview on The Isle.',
		keywords: [...baseKeywords, 'distance ESP', 'health bar ESP', 'growth ESP', 'dinosaur encounter', 'entity tracking'],
	},
	{
		id: 'product-7',
		src: '/images/product-7.webp',
		alt: 'The Isle predator chase — Instant Rotation, movement Cheats, and combat hack preview',
		title: 'The Isle predator chase Cheats preview',
		caption:
			'Predator chase scene preview for Instant Rotation, movement Cheats, Omnimovement, and combat hack demonstrations.',
		keywords: [...baseKeywords, 'predator chase', 'movement hacks', 'Instant Rotation', 'combat preview', 'dino movement'],
	},
	{
		id: 'logo',
		src: '/images/zadeyo-logo.png',
		alt: 'The Isle Cheats logo — official brand mark for islecheats.net',
		title: 'The Isle Cheats official logo',
		caption: 'Official The Isle Cheats brand logo used in navigation, schema markup, and site branding on islecheats.net.',
		keywords: [...baseKeywords, 'logo', 'brand mark', 'islecheats logo', 'The Isle Cheats logo'],
	},
	{
		id: 'logo-webp',
		src: '/images/zadeyo-logo.webp',
		alt: 'The Isle Cheats logo WebP — optimized brand image for islecheats.net',
		title: 'The Isle Cheats optimized logo',
		caption: 'Optimized WebP logo for The Isle Cheats used across islecheats.net for fast loading and image search indexing.',
		keywords: [...baseKeywords, 'logo', 'WebP logo', 'brand image', 'optimized logo'],
	},
	{
		id: 'logo-full',
		src: '/images/zadeyo-logo-full.webp',
		alt: 'The Isle Cheats full logo — wide brand image for social and search previews',
		title: 'The Isle Cheats full-width logo',
		caption: 'Full-width The Isle Cheats logo for social sharing, Open Graph previews, and Google image search results.',
		keywords: [...baseKeywords, 'full logo', 'social preview', 'Open Graph image', 'brand banner'],
	},
];

const catalogBySrc = new Map(siteImageCatalog.map((image) => [image.src, image]));

export function getImageSeo(src: string): SiteImageSeo | undefined {
	return catalogBySrc.get(src);
}

export function getImageSeoOrFallback(src: string, alt = ''): SiteImageSeo {
	if (!src) {
		return {
			id: 'unknown',
			src: '',
			alt: alt || 'The Isle Cheats image',
			title: alt || 'The Isle Cheats image',
			caption: alt || 'The Isle Cheats image',
			keywords: baseKeywords,
		};
	}

	return (
		catalogBySrc.get(src) ?? {
			id: src.replace(/[^a-z0-9]+/gi, '-'),
			src,
			alt: alt || src,
			title: alt || src,
			caption: alt || src,
			keywords: baseKeywords,
		}
	);
}

export function absoluteImageUrl(src: string): string {
	return new URL(src, siteConfig.url).href;
}

export function imageKeywordsText(image: SiteImageSeo): string {
	return image.keywords.join(', ');
}

export function imageSitemapCaption(image: SiteImageSeo): string {
	return `${image.caption} Keywords: ${imageKeywordsText(image)}.`;
}

export function toImageObjectSchema(image: SiteImageSeo, pageUrl: string) {
	return {
		'@type': 'ImageObject',
		'@id': `${absoluteImageUrl(image.src)}#image`,
		url: absoluteImageUrl(image.src),
		contentUrl: absoluteImageUrl(image.src),
		name: image.title,
		description: imageSitemapCaption(image),
		caption: image.caption,
		keywords: imageKeywordsText(image),
		alternateName: image.alt,
		inLanguage: 'en',
		isPartOf: { '@type': 'WebPage', '@id': pageUrl },
	};
}

export function buildPageImageSchema(pageUrl: string, imageSrcs: string[]) {
	const unique = [...new Set(imageSrcs.filter(Boolean))];
	const images = unique.map((src) => toImageObjectSchema(getImageSeoOrFallback(src), pageUrl));

	if (images.length === 0) return null;

	return {
		'@context': 'https://schema.org',
		'@graph': images,
	};
}
