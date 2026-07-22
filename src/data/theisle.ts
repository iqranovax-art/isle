import { siteConfig } from './site';
import { getImageSeo, siteImageCatalog } from './image-seo';

const byId = (id: string) => {
	const image = siteImageCatalog.find((item) => item.id === id);
	if (!image) throw new Error(`Missing image SEO entry: ${id}`);
	return image;
};

export const theIsleImages = {
	hero: byId('hero').src,
	cover: byId('cover').src,
	logo: siteConfig.logo,
	product: [
		byId('product-2'),
		byId('product-3'),
		byId('product-4'),
		byId('product-1'),
		byId('product-6'),
		byId('cover'),
	].map((image) => ({ src: image.src, alt: image.alt, title: image.title, caption: image.caption, keywords: image.keywords })),
	gallery: [
		{ ...byId('hero'), featured: true as const },
		byId('product-2'),
		byId('product-3'),
		byId('product-4'),
		byId('product-1'),
		byId('product-6'),
		byId('product-7'),
	].map((image) => ({
		src: image.src,
		alt: image.alt,
		title: image.title,
		caption: image.caption,
		keywords: image.keywords,
		...('featured' in image ? { featured: image.featured } : {}),
	})),
	all: siteImageCatalog.filter((image) => image.src.startsWith('/images/product-') || image.id === 'hero' || image.id === 'cover'),
} as const;

export function imageMeta(src: string) {
	const image = getImageSeo(src);
	if (!image) return null;
	return {
		alt: image.alt,
		title: image.title,
		caption: image.caption,
		keywords: image.keywords,
	};
}
