const CANONICAL_ORIGIN = 'https://marauderscheats.com';

/**
 * Cloudflare Pages middleware:
 * - 301 http://marauderscheats.com → https://marauderscheats.com
 * - 301 www.marauderscheats.com → https://marauderscheats.com
 * - Ensure HTML responses advertise UTF-8 charset
 */
export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const isApex = host === 'marauderscheats.com';
	const isWww = host === 'www.marauderscheats.com';

	if (isWww || (isApex && url.protocol === 'http:')) {
		const target = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
		return Response.redirect(target.toString(), 301);
	}

	const response = await context.next();
	const contentType = response.headers.get('Content-Type') || '';

	if (isApex && contentType.includes('text/html') && !/charset=/i.test(contentType)) {
		const headers = new Headers(response.headers);
		headers.set('Content-Type', 'text/html; charset=utf-8');
		headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	}

	return response;
}
