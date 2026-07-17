export const siteConfig = {
	name: 'The Isle Cheats',
	url: 'https://theislecheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@theislecheats.com',
	logo: '/images/zadeyo-logo.png',
	checkoutUrl: 'https://zadeyo.com/products/theisle-cheats',
	defaultOgImage: '/images/hero.webp',
} as const;

export const productInfo = {
	name: 'The Isle Cheats',
	shortName: 'The Isle Cheats',
	tagline: 'ESP and Aimbot tools for The Isle',
	summary:
		'The Isle Cheats is a software package that includes ESP and Aimbot options for players who want clearer survival information and assisted combat controls in The Isle.',
	game: 'The Isle',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC'],
	updateCadence: 'Updates are published when game patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	features: {
		esp: [
			'Player and dinosaur ESP overlays for nearby threat awareness',
			'Species identification markers for carnivores and herbivores',
			'Distance readouts to help with engagement and escape decisions',
			'Toggleable ESP categories in the interface',
		],
		aimbot: [
			'Aim assist targeting for visible opponents during combat',
			'Sensitivity and smoothness controls',
			'Target-priority options in the settings panel',
			'On/off hotkey support for quick control',
		],
		general: [
			'In-client feature toggles',
			'Monthly and lifetime package options',
			'Product update notices on the Updates page',
			'Support channel for setup and billing questions',
		],
	},
} as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Aimbot', href: '/theisle-aimbot/' },
	{ label: 'ESP', href: '/theisle-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Product updates log', href: '/updates/' },
	{ label: 'Contact support team', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Site overview', href: '/' },
	{ label: 'Aimbot product page', href: '/theisle-aimbot/' },
	{ label: 'ESP product page', href: '/theisle-esp/' },
	{ label: 'Full feature breakdown', href: '/features/' },
	{ label: 'Package pricing plans', href: '/pricing/' },
	{ label: 'Common questions hub', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is included with The Isle Cheats?',
		answer:
			'The Isle Cheats includes ESP and Aimbot feature sets, plus access to product updates and support for setup questions. ESP covers player and dinosaur overlays, species markers, distance readouts, and toggleable categories. Aimbot covers assisted targeting, smoothness controls, target priority, and hotkey toggles. See the Features and Pricing pages for the full package breakdown.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, license details are delivered digitally. Delivery timing can vary by payment method and order review. Keep your order confirmation available when contacting support so the team can locate your purchase quickly.',
	},
	{
		question: 'Where can I check product updates?',
		answer:
			'Product maintenance notes are published on the Updates page whenever a new build or compatibility notice is available. Checking that page after The Isle patches is the fastest way to confirm whether a maintenance release has been posted.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page to reach the team by email. Include your order details and a clear description of the issue so replies can be faster. For policy questions before buying, review the refund, privacy, and terms pages first.',
	},
] as const;
