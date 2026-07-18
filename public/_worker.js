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

function normalizeHost(host) {
	return host.toLowerCase().split(':')[0];
}

function getRequestHost(request, url) {
	return normalizeHost(request.headers.get('host') || url.hostname);
}

function isIsleDomain(host) {
	return host === APEX_HOST || host === `www.${APEX_HOST}` || host.endsWith('.islecheats.net');
}

function isHttpsRequest(request, url) {
	if (url.protocol === 'https:') {
		return true;
	}

	const forwardedProto = request.headers.get('X-Forwarded-Proto');
	if (forwardedProto) {
		return forwardedProto.split(',')[0].trim() === 'https';
	}

	const cfVisitor = request.headers.get('CF-Visitor');
	if (cfVisitor) {
		try {
			return JSON.parse(cfVisitor).scheme === 'https';
		} catch {
			return false;
		}
	}

	return false;
}

function shouldRedirectToCanonical(request, url) {
	const host = getRequestHost(request, url);

	if (!isIsleDomain(host)) {
		return false;
	}

	return host !== APEX_HOST || !isHttpsRequest(request, url);
}

function buildCanonicalUrl(url) {
	const target = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
	return target.toString();
}

function redirectToCanonical(url, status = 301) {
	return new Response(null, {
		status,
		headers: {
			Location: buildCanonicalUrl(url),
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

		if (shouldRedirectToCanonical(request, url)) {
			return redirectToCanonical(url);
		}

		const pathRedirect = PATH_REDIRECTS[url.pathname];
		if (pathRedirect) {
			return redirectToCanonical(new URL(pathRedirect + url.search, CANONICAL_ORIGIN));
		}

		if (!env?.ASSETS) {
			return new Response('Asset handler unavailable', { status: 503 });
		}

		return withSecurityHeaders(await env.ASSETS.fetch(request));
	},
};
