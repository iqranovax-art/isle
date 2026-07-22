import { siteConfig } from './site';
import { getImageSeoOrFallback, imageSitemapCaption, siteImageCatalog } from './image-seo';

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

const img = (src: string): SitemapImage => {
	const image = getImageSeoOrFallback(src, src);
	return {
		url: abs(image.src),
		title: image.title,
		caption: imageSitemapCaption(image),
	};
};

const imgs = (...srcs: string[]) => srcs.map((src) => img(src));

const allProductAndHero = imgs(
	'/images/hero.webp',
	'/images/product-1.webp',
	'/images/product-2.webp',
	'/images/product-3.webp',
	'/images/product-4.webp',
	'/images/product-5.webp',
	'/images/product-6.webp',
	'/images/product-7.webp',
	'/images/cover.webp',
);

const allBrand = imgs('/images/zadeyo-logo.png', '/images/zadeyo-logo.webp', '/images/zadeyo-logo-full.webp');

const galleryImages = imgs(
	'/images/hero.webp',
	'/images/product-2.webp',
	'/images/product-3.webp',
	'/images/product-4.webp',
	'/images/product-1.webp',
	'/images/product-6.webp',
	'/images/product-7.webp',
);

/**
 * Canonical page → image map for the public sitemap at /sitemap.xml
 */
export const pageSitemapEntries: PageSitemapEntry[] = [
	{
		path: '/',
		priority: 1,
		changefreq: 'daily',
		images: [...allProductAndHero, ...allBrand],
	},
	{
		path: '/why-us/',
		priority: 0.88,
		changefreq: 'weekly',
		images: imgs('/images/hero.webp', '/images/product-2.webp', '/images/product-3.webp', '/images/product-4.webp', '/images/cover.webp'),
	},
	{
		path: '/features/',
		priority: 0.85,
		changefreq: 'weekly',
		images: allProductAndHero,
	},
	{
		path: '/demo/',
		priority: 0.86,
		changefreq: 'weekly',
		images: [...galleryImages, img('/images/cover.webp')],
	},
	{
		path: '/undetected/',
		priority: 0.82,
		changefreq: 'weekly',
		images: imgs('/images/product-6.webp', '/images/product-2.webp', '/images/product-3.webp', '/images/product-4.webp', '/images/cover.webp'),
	},
	{
		path: '/cheats/',
		priority: 0.9,
		changefreq: 'weekly',
		images: imgs('/images/product-2.webp', '/images/product-3.webp', '/images/product-6.webp', '/images/product-7.webp'),
	},
	{
		path: '/theisle-esp/',
		priority: 0.9,
		changefreq: 'weekly',
		images: imgs('/images/product-4.webp', '/images/product-2.webp', '/images/product-3.webp', '/images/hero.webp'),
	},
	{
		path: '/pricing/',
		priority: 0.9,
		changefreq: 'weekly',
		images: imgs('/images/cover.webp', '/images/product-3.webp', '/images/product-1.webp', '/images/product-5.webp'),
	},
	{
		path: '/faq/',
		priority: 0.75,
		changefreq: 'monthly',
		images: imgs('/images/product-1.webp', '/images/product-4.webp', '/images/product-6.webp'),
	},
	{
		path: '/updates/',
		priority: 0.7,
		changefreq: 'weekly',
		images: imgs('/images/product-3.webp', '/images/hero.webp', '/images/product-4.webp'),
	},
	{
		path: '/support/',
		priority: 0.75,
		changefreq: 'monthly',
		images: imgs('/images/product-6.webp', '/images/product-2.webp', '/images/cover.webp'),
	},
	{
		path: '/refund-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: imgs('/images/cover.webp', '/images/product-1.webp'),
	},
	{
		path: '/privacy-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: imgs('/images/product-2.webp', '/images/hero.webp'),
	},
	{
		path: '/terms/',
		priority: 0.4,
		changefreq: 'monthly',
		images: imgs('/images/product-3.webp', '/images/product-6.webp', '/images/cover.webp'),
	},
];

/** Every catalog image with keyword-rich metadata for image search indexing */
export const allCatalogSitemapImages: SitemapImage[] = siteImageCatalog.map((image) => ({
	url: abs(image.src),
	title: image.title,
	caption: imageSitemapCaption(image),
}));

export function absolutePageUrl(path: string): string {
	return abs(path);
}
