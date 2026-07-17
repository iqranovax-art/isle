const CANONICAL_ORIGIN = 'https://marauderscheats.com';
const APEX_HOST = 'marauderscheats.com';
const WWW_HOST = 'www.marauderscheats.com';

const PATH_REDIRECTS = {
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-images.xml': '/sitemap.xml',
};

/**
 * Cloudflare Pages middleware (runs for every request).
 * Domain-level redirects are NOT supported in public/_redirects on Pages,
 * so host + HTTPS canonicalization must live here (plus Cloudflare
 * "Always Use HTTPS" and a Bulk Redirect for www → apex).
 *
 * Note: when Functions middleware is present, public/_headers is not applied
 * to these responses — set security/charset headers here.
 */
export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = (
		context.request.headers.get('x-forwarded-proto') ||
		url.protocol.replace(':', '')
	).toLowerCase();

	const isProductionHost = host === APEX_HOST || host === WWW_HOST;
	const needsHostRedirect = host === WWW_HOST;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const target = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
		return Response.redirect(target.toString(), 301);
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		return Response.redirect(new URL(pathRedirect, CANONICAL_ORIGIN).toString(), 301);
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';

	if (contentType.includes('text/html')) {
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
		headers.set('X-Content-Type-Options', 'nosniff');
		headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
		headers.set('X-Frame-Options', 'DENY');
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
