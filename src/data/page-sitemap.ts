import { siteConfig } from './site';
import { theIsleImages } from './theisle';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly';
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

const galleryImages = theIsleImages.gallery.map((item) =>
	img(item.src, item.alt, `${item.alt} — The Isle Cheats visual preview on islecheats.net`),
);

const productImages = theIsleImages.product.map((item) =>
	img(item.src, item.alt, `${item.alt} — The Isle Cheats product image on islecheats.net`),
);

const brandImages = [
	img(
		'/images/zadeyo-logo.webp',
		'The Isle Cheats logo',
		'Official The Isle Cheats brand logo used across islecheats.net',
	),
	img(
		'/images/zadeyo-logo-full.webp',
		'The Isle Cheats full logo',
		'Full-width The Isle Cheats logo for branding and social previews',
	),
];

/**
 * Canonical page → image map for the public sitemap at /sitemap.xml
 */
export const pageSitemapEntries: PageSitemapEntry[] = [
	{
		path: '/',
		priority: 1,
		changefreq: 'daily',
		images: [
			img('/images/hero.webp', 'The Isle Cheats hero', 'Homepage banner for The Isle Cheats Cloud-DMA, ESP, and Cheats'),
			...productImages,
			img('/images/cover.webp', 'The Isle Cheats cover', 'Cover visual used across The Isle Cheats pages'),
			img('/images/product-7.webp', 'The Isle predator chase preview', 'Homepage gallery image for Instant Rotation and Cheats'),
			...brandImages,
		],
	},
	{
		path: '/why-us/',
		priority: 0.88,
		changefreq: 'weekly',
		images: [
			img('/images/hero.webp', 'Why choose The Isle Cheats', 'Hero image for the Why Us page at islecheats.net'),
			...productImages.slice(1, 4),
			img('/images/cover.webp', 'The Isle Cheats package cover', 'Cover visual on the Why Us page'),
		],
	},
	{
		path: '/features/',
		priority: 0.85,
		changefreq: 'weekly',
		images: [
			img('/images/hero.webp', 'The Isle Cheats features banner', 'Hero image for the features overview page'),
			...productImages,
			img('/images/product-7.webp', 'The Isle Cheats feature gallery image', 'Feature page visual for Cheats and ESP context'),
		],
	},
	{
		path: '/demo/',
		priority: 0.86,
		changefreq: 'weekly',
		images: galleryImages,
	},
	{
		path: '/undetected/',
		priority: 0.82,
		changefreq: 'weekly',
		images: [
			img('/images/product-6.webp', 'The Isle Cheats evaluation guide visual', 'Hero image for the Undetected evaluation page'),
			...productImages.slice(0, 3),
			img('/images/cover.webp', 'The Isle Cheats safety guide cover', 'Cover visual on the Undetected page'),
		],
	},
	{
		path: '/cheats/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [
			img('/images/product-2.webp', 'The Isle Cheats preview', 'Main visual for The Isle Cheats page'),
			img('/images/product-3.webp', 'The Isle Cheats combat scene', 'Combat reference image on The Isle Cheats page'),
			img('/images/product-6.webp', 'The Isle Cheats gallery image', 'Supporting visual for The Isle Cheats'),
			img('/images/product-7.webp', 'The Isle predator chase preview', 'Cheats page gallery image for movement and combat hacks'),
		],
	},
	{
		path: '/theisle-esp/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [
			img('/images/product-4.webp', 'The Isle Cheats ESP preview', 'Main visual for The Isle Cheats ESP page'),
			img('/images/product-2.webp', 'The Isle Cheats ESP player visibility', 'Supporting ESP page visual'),
			img('/images/product-3.webp', 'The Isle Cheats ESP dinosaur context', 'Gallery image for The Isle Cheats ESP page'),
			img('/images/hero.webp', 'The Isle Cheats ESP banner', 'Hero banner for Visuals ESP and World ESP'),
		],
	},
	{
		path: '/pricing/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [
			img('/images/cover.webp', 'The Isle Cheats pricing visual', 'Main image for the pricing page'),
			img('/images/product-3.webp', 'Pricing page gallery image', 'Supporting visual on pricing'),
			img('/images/product-1.webp', 'Pricing page package visual', 'Supporting visual on pricing'),
			img('/images/product-5.webp', 'The Isle Cheats pricing package context', 'Additional The Isle Cheats pricing page visual'),
		],
	},
	{
		path: '/faq/',
		priority: 0.75,
		changefreq: 'monthly',
		images: [
			img('/images/product-1.webp', 'The Isle Cheats FAQ visual', 'Main image for the FAQ page'),
			img('/images/product-4.webp', 'FAQ gallery image', 'Supporting FAQ page visual'),
			img('/images/product-6.webp', 'FAQ support context image', 'Supporting FAQ page visual'),
		],
	},
	{
		path: '/updates/',
		priority: 0.7,
		changefreq: 'weekly',
		images: [
			img('/images/product-3.webp', 'The Isle Cheats updates visual', 'Main image for the updates page'),
			img('/images/hero.webp', 'Updates page gallery image', 'Supporting visual for updates'),
			img('/images/product-4.webp', 'Updates maintenance visual', 'Supporting visual for updates'),
		],
	},
	{
		path: '/support/',
		priority: 0.75,
		changefreq: 'monthly',
		images: [
			img('/images/product-6.webp', 'The Isle Cheats support visual', 'Main image for the support page'),
			img('/images/product-2.webp', 'Support page gallery image', 'Supporting support page visual'),
			img('/images/cover.webp', 'Support page cover image', 'Cover visual on the support page'),
		],
	},
	{
		path: '/refund-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [
			img('/images/cover.webp', 'The Isle Cheats refund policy visual', 'Main image for The Isle Cheats refund policy page'),
			img('/images/product-1.webp', 'The Isle Cheats refund policy gallery image', 'Supporting refund policy visual'),
		],
	},
	{
		path: '/privacy-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [
			img('/images/product-2.webp', 'The Isle Cheats privacy policy visual', 'Main image for The Isle Cheats privacy policy page'),
			img('/images/hero.webp', 'The Isle Cheats privacy policy gallery image', 'Supporting privacy policy visual'),
		],
	},
	{
		path: '/terms/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [
			img('/images/product-3.webp', 'The Isle Cheats terms of use visual', 'Main image for The Isle Cheats terms page'),
			img('/images/product-6.webp', 'The Isle Cheats terms page gallery image', 'Supporting terms page visual'),
			img('/images/cover.webp', 'The Isle Cheats terms page cover image', 'Cover visual on The Isle Cheats terms page'),
		],
	},
];

export function absolutePageUrl(path: string): string {
	return abs(path);
}
