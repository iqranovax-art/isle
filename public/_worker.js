const CANONICAL_ORIGIN = 'https://islecheats.net';
const APEX_HOST = 'islecheats.net';
const WWW_HOST = 'www.islecheats.net';

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

function resolveProtocol(request, url) {
	const cfVisitor = request.headers.get('cf-visitor');
	if (cfVisitor) {
		try {
			const visitor = JSON.parse(cfVisitor);
			if (visitor.scheme) return visitor.scheme.toLowerCase();
		} catch {
			// Ignore malformed Cloudflare visitor headers.
		}
	}

	return (
		request.headers.get('x-forwarded-proto') ||
		url.protocol.replace(':', '')
	).toLowerCase();
}

function resolveHost(request, url) {
	return (
		request.headers.get('x-forwarded-host') ||
		request.headers.get('host') ||
		url.hostname
	)
		.toLowerCase()
		.split(':')[0];
}

function isIsleDomain(host) {
	return host === APEX_HOST || host === WWW_HOST || host.endsWith('.islecheats.net');
}

function redirectToCanonical(url) {
	const target = new URL(url.pathname + url.search, CANONICAL_ORIGIN).toString();
	return new Response(null, {
		status: 301,
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
 * Canonicalizes http/www traffic and serves static assets from dist/.
 */
export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const host = resolveHost(request, url);
		const proto = resolveProtocol(request, url);

		if (isIsleDomain(host) && (host !== APEX_HOST || proto !== 'https')) {
			return redirectToCanonical(url);
		}

		const pathRedirect = PATH_REDIRECTS[url.pathname];
		if (pathRedirect) {
			return Response.redirect(new URL(pathRedirect, CANONICAL_ORIGIN).toString(), 301);
		}

		return withSecurityHeaders(await env.ASSETS.fetch(request));
	},
};
