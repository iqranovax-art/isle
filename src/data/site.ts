export const siteConfig = {
	name: 'Marauders Cheats',
	url: 'https://marauderscheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@marauderscheats.com',
	defaultOgImage: '/images/hero.webp',
} as const;

export const productInfo = {
	name: 'Marauders Cheats',
	shortName: 'Marauders Cheats',
	tagline: 'ESP and Aimbot tools for Marauders',
	summary:
		'Marauders Cheats is a software package that includes ESP and Aimbot options for players who want clearer combat information and assisted aiming controls in Marauders.',
	game: 'Marauders',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC'],
	updateCadence: 'Updates are published when game patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: '1day', label: '1 Day', price: 7, duration: 'P1D' },
		{ id: '1week', label: '1 Week', price: 19, duration: 'P7D' },
		{ id: '1month', label: '1 Month', price: 45, duration: 'P30D' },
	],
	currency: 'USD',
	features: {
		esp: [
			'Player ESP overlays for reading nearby combatants',
			'Loot ESP markers for nearby item visibility',
			'Distance readouts to help with engagement decisions',
			'Toggleable ESP categories in the interface',
		],
		aimbot: [
			'Aim assist targeting for visible opponents',
			'Sensitivity and smoothness controls',
			'Target-priority options in the settings panel',
			'On/off hotkey support for quick control',
		],
		general: [
			'In-client feature toggles',
			'Package lengths for short and longer sessions',
			'Product update notices on the Updates page',
			'Support channel for setup and billing questions',
		],
	},
} as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Aimbot', href: '/marauders-aimbot/' },
	{ label: 'ESP', href: '/marauders-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Updates', href: '/updates/' },
	{ label: 'Support', href: '/support/' },
	{ label: 'Refund Policy', href: '/refund-policy/' },
	{ label: 'Privacy Policy', href: '/privacy-policy/' },
	{ label: 'Terms', href: '/terms/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is included with Marauders Cheats?',
		answer:
			'Marauders Cheats includes ESP and Aimbot feature sets, plus access to product updates and support for setup questions. See the Features and Pricing pages for package details.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, license details are delivered digitally. Delivery timing can vary by payment method and order review.',
	},
	{
		question: 'Where can I check product updates?',
		answer:
			'Product maintenance notes are published on the Updates page whenever a new build or compatibility notice is available.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page to reach the team by email. Include your order details and a clear description of the issue so replies can be faster.',
	},
] as const;
