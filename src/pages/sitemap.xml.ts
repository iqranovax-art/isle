import type { APIRoute } from 'astro';
import { absolutePageUrl, pageSitemapEntries } from '../data/page-sitemap';

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const prerender = true;

export const GET: APIRoute = () => {
	const lastmod = new Date().toISOString().slice(0, 10);

	const urls = pageSitemapEntries
		.map((entry) => {
			const images = entry.images
				.map(
					(image) => `    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
				)
				.join('\n');

    			return `  <url>
    <loc>${escapeXml(absolutePageUrl(entry.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${Number.isInteger(entry.priority) ? entry.priority.toFixed(1) : String(entry.priority)}</priority>
${images}
  </url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
