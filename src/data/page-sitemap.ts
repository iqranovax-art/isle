import { siteConfig } from './site';

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

/**
 * Canonical page → image map for the public sitemap at /sitemap.xml
 */
export const pageSitemapEntries: PageSitemapEntry[] = [
	{
		path: '/',
		priority: 1,
		changefreq: 'daily',
		images: [
			img('/images/hero.webp', 'The Isle Cheats hero', 'Homepage banner for The Isle Cheats Cloud-DMA, ESP, and Exploits'),
			img('/images/product-2.webp', 'The Isle Cheats product preview', 'Primary product visual on the The Isle Cheats homepage'),
			img('/images/product-3.webp', 'The Isle combat preview', 'Gameplay context image on the The Isle Cheats homepage'),
			img('/images/product-4.webp', 'The Isle environment preview', 'Environment visual used in the homepage product gallery'),
			img('/images/product-1.webp', 'The Isle gameplay preview', 'Additional product gallery image on the homepage'),
			img('/images/product-6.webp', 'The Isle dinosaur encounter preview', 'Homepage gallery image showing The Isle dinosaur combat'),
			img('/images/cover.webp', 'The Isle Cheats cover', 'Cover visual used across The Isle Cheats pages'),
		],
	},
	{
		path: '/theisle-exploits/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [
			img('/images/product-2.webp', 'The Isle Exploits preview', 'Main visual for the The Isle Exploits page'),
			img('/images/product-3.webp', 'The Isle Exploits combat scene', 'Combat reference image on the Exploits page'),
			img('/images/product-6.webp', 'The Isle Exploits gallery image', 'Supporting visual for The Isle Exploits'),
		],
	},
	{
		path: '/theisle-esp/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [
			img('/images/product-4.webp', 'The Isle ESP preview', 'Main visual for the The Isle ESP page'),
			img('/images/product-2.webp', 'The Isle ESP player visibility', 'Supporting ESP page visual'),
			img('/images/product-3.webp', 'The Isle ESP dinosaur context', 'Gallery image for the The Isle ESP page'),
		],
	},
	{
		path: '/features/',
		priority: 0.85,
		changefreq: 'weekly',
		images: [
			img('/images/hero.webp', 'The Isle Cheats features banner', 'Hero image for the features overview page'),
			img('/images/product-2.webp', 'Features gallery image 1', 'Feature page visual reference'),
			img('/images/product-3.webp', 'Features gallery image 2', 'Feature page visual reference'),
			img('/images/product-4.webp', 'Features gallery image 3', 'Feature page visual reference'),
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
			img('/images/product-5.webp', 'Pricing page package context', 'Additional supporting visual on pricing'),
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
			img('/images/cover.webp', 'Refund policy visual', 'Main image for the refund policy page'),
			img('/images/product-1.webp', 'Refund policy gallery image', 'Supporting refund policy visual'),
		],
	},
	{
		path: '/privacy-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [
			img('/images/product-2.webp', 'Privacy policy visual', 'Main image for the privacy policy page'),
			img('/images/hero.webp', 'Privacy policy gallery image', 'Supporting privacy policy visual'),
		],
	},
	{
		path: '/terms/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [
			img('/images/product-3.webp', 'Terms of use visual', 'Main image for the terms page'),
			img('/images/product-6.webp', 'Terms page gallery image', 'Supporting terms page visual'),
			img('/images/cover.webp', 'Terms page cover image', 'Cover visual on the terms page'),
		],
	},
];

export function absolutePageUrl(path: string): string {
	return abs(path);
}
