const CANONICAL_ORIGIN = 'https://islecheats.net';
const APEX_HOST = 'islecheats.net';

const PATH_REDIRECTS = {
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-images.xml': '/sitemap.xml',
	'/marauders-aimbot': '/cheats/',
	'/marauders-aimbot/': '/cheats/',
	'/theisle-aimbot': '/cheats/',
	'/theisle-aimbot/': '/cheats/',
	'/theisle-exploits': '/cheats/',
	'/theisle-exploits/': '/cheats/',
	'/marauders-esp': '/theisle-esp/',
	'/marauders-esp/': '/theisle-esp/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
};

function isIsleDomain(host) {
	return host === APEX_HOST || host === `www.${APEX_HOST}` || host.endsWith('.islecheats.net');
}

function shouldRedirectToCanonical(url) {
	const host = url.hostname.toLowerCase();
	const isHttps = url.protocol === 'https:';

	if (!isIsleDomain(host)) {
		return false;
	}

	return host !== APEX_HOST || !isHttps;
}

function redirectToCanonical(url, status = 301) {
	const target = new URL(url.pathname + url.search, CANONICAL_ORIGIN).toString();

	return new Response(null, {
		status,
		headers: {
			Location: target,
			...SECURITY_HEADERS,
		},
	});
}

function withSecurityHeaders(response) {
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';

	Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
		headers.set(key, value);
	});

	if (contentType.includes('text/html') && !/charset=/i.test(contentType)) {
		headers.set('Content-Type', 'text/html; charset=utf-8');
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

/**
 * Cloudflare Pages advanced mode worker.
 * Canonicalizes http/www traffic to https://islecheats.net.
 */
export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (shouldRedirectToCanonical(url)) {
			return redirectToCanonical(url);
		}

		const pathRedirect = PATH_REDIRECTS[url.pathname];
		if (pathRedirect) {
			return redirectToCanonical(new URL(pathRedirect + url.search, CANONICAL_ORIGIN));
		}

		return withSecurityHeaders(await env.ASSETS.fetch(request));
	},
};
