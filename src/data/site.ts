export const siteConfig = {
	name: 'The Isle Cheats',
	url: 'https://islecheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@islecheats.net',
	logo: '/images/zadeyo-logo.png',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fthe-isle-novaxware',
	defaultOgImage: '/images/hero.webp',
	metaDescription:
		'Compare The Isle Cheats for Windows PC. Survival hacks, Cloud-DMA packages, monthly and lifetime plans, features, and support at islecheats.net.',
	keywords:
		'The Isle Cheats, The Isle cheats, isle cheats, ESP, hacks, instant rotation, the isle, dinosaur survival, islecheats.net',
} as const;

export const homeSeo = {
	title: 'The Isle Cheats — ESP & Hacks for Windows PC',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'Dino ESP & Radar',
	featuresHeading: 'ESP & Hacks Packages',
	whyUsHeading: 'Why Choose The Isle Cheats',
	description: siteConfig.metaDescription,
} as const;

export const pageDescriptions = {
	'/': siteConfig.metaDescription,
	'/theisle-esp/':
		'The Isle Cheats ESP — Visuals ESP and World ESP for entity awareness, resource tracking, and environment readouts on Windows PC. Part of the Cloud-DMA package at islecheats.net.',
	'/cheats/':
		'The Isle Cheats — Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, and other Cloud-DMA combat and movement cheats for The Isle.',
	'/features/':
		'Full The Isle Cheats feature list — compare Cloud-DMA, Visuals ESP, World ESP, Cheats, and utility hacks before choosing monthly or lifetime packages.',
	'/pricing/':
		'The Isle Cheats pricing — monthly and lifetime Cloud-DMA, ESP, and Cheats packages in USD. Compare plan lengths and included features at islecheats.net.',
	'/updates/':
		'The Isle Cheats updates — product changelog, maintenance notices, and compatibility updates published after The Isle patches.',
	'/faq/':
		'The Isle Cheats FAQ — answers about Cloud-DMA, ESP, Cheats, digital delivery, refund policy, and customer support.',
	'/support/':
		'Contact The Isle Cheats support for delivery, setup, and billing help. Email support@islecheats.net with your order details.',
	'/refund-policy/':
		'The Isle Cheats refund policy — review eligibility, conditions, and timelines before purchasing Cloud-DMA or ESP packages.',
	'/privacy-policy/':
		'The Isle Cheats privacy policy — how islecheats.net handles visitor data, cookies, and order-related information.',
	'/terms/':
		'The Isle Cheats terms of use — license terms, acceptable use, and purchase conditions for islecheats.net packages.',
} as const;

export type PagePath = keyof typeof pageDescriptions;

export function getPageDescription(path: PagePath): string {
	return pageDescriptions[path];
}

export const cloudDmaOption = {
	label: 'Cloud-DMA',
	summary:
		'Cloud-DMA package includes Visuals ESP, World ESP, Cheats, and Other hacks. Aimbot is not included in the Cloud-DMA option.',
	excludes: ['Aimbot'],
} as const;

export const productInfo = {
	name: 'The Isle Cheats',
	shortName: 'The Isle Cheats',
	tagline: 'Cloud-DMA, ESP, and Cheats for The Isle',
	summary:
		'The Isle Cheats is a software package with Cloud-DMA support, Visuals ESP, World ESP, Cheats, and utility hacks for players who want clearer survival information and advanced control options in The Isle.',
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
		aimbot: [
			'Aimbot — Automatic aiming at players',
			'Aim Key — Keys to activate automatic aiming',
			'Lock Target — Stay locked on the target until it is destroyed',
			'Distance — Activation distance of the aimbot',
			'FOV — Field of view for the aimbot',
			'Smooth — Smoothing of aimbot movements',
			'Draw FOV — Display the aimbot working area as a circle',
			'Filled FOV — Visual fill style for the FOV circle',
			'Color FOV — Set your preferred FOV color',
			'Draw Arrows — Arrows around the aiming area',
			'Head Only — Aim targets the head only',
		],
		visualsEsp: [
			'Show Entities — Enable ESP to display entities',
			'BOX — ESP boxes around entities',
			'Box Type — Full or corner box style',
			'Snaplines — Lines to entities',
			'Snaplines Style — Line display type',
			'Distance — Distance to targets in meters',
			'Health — HP level (bar or text)',
			'Names — Entity name display',
			'Growth — Growth percentage',
			'Weight — Entity weight in kg',
			'Classname — Current class of the entity',
			'Ignore Team — Ignore allies',
			'Show All — Show everything in range',
			'Max Distance — ESP range (up to 2000 m)',
			'Custom Colors — Custom colors for ESP elements',
			'Bite Radius — Show bite radius',
			'Head Dot — Dot on the head',
			'Show Stamina — Stamina level',
			'Show Blood — Blood level',
			'Show Bleeding — Blood loss level',
		],
		worldEsp: [
			'Show Objects — Toggle environment object ESP',
			'Bodies — Bodies of the deceased',
			'Meat — Meat pickups',
			'Fruits — Fruit resources',
			'Medicinal herbs — Herb pickups',
			'Mushrooms — Mushroom resources',
			'Water — Water sources',
			'Max Distance — Object display range in meters',
		],
		cheats: [
			'No Cost Ability — Abilities require no point expenditure',
			'No Cooldown Attack — Removes cooldown between attacks',
			'No Fractured — Disables fractures',
			'Omnimovement — Removes movement constraints for dinos',
			'Instant Rotation — Instant rotation of your dino',
			'Auto-Attack — Automatically attacks in your attack area',
			'Unlock Zoom — Zoom in and out beyond default limits',
		],
		other: [
			'Radar — Window showing all dinos within radius',
			'Disable Shadows — Turn off in-game shadows',
			'FOV Changer — Increase field of view',
			'Change Sky — Sky brightness and moon settings',
			'No Fog — Remove fog',
			'Crosshair — Custom center-screen crosshair',
			'Menu Key — Bindable key to open the menu',
			'Font Settings — Configure ESP font size',
			'Configs — Save and load settings profiles',
			'Languages — English and Russian',
		],
		general: [
			'Cloud-DMA option available (ESP, World ESP, Cheats, and Other — no Aimbot)',
			'In-client feature toggles',
			'Monthly and lifetime package options',
			'Product update notices on the Updates page',
			'Support channel for setup and billing questions',
		],
	},
} as const;

export const featureCategories = [
	{ id: 'visualsEsp', title: 'Visuals ESP (WH)', href: '/theisle-esp/' },
	{ id: 'worldEsp', title: 'World ESP (Environment)', href: '/theisle-esp/#world-esp' },
	{ id: 'cheats', title: 'Cheats', href: '/cheats/' },
	{ id: 'other', title: 'Other (The Isle)', href: '/features/#other' },
	{ id: 'aimbot', title: 'Aimbot', href: '/features/#aimbot', cloudDmaExcluded: true },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/#home', section: 'home' },
	{ label: 'Why Us', href: '/#why-us', section: 'why-us' },
	{ label: 'Features', href: '/#features', section: 'features' },
	{ label: 'Demo', href: '/#demo', section: 'demo' },
	{ label: 'Undetected', href: '/#undetected', section: 'undetected' },
	{ label: 'Blog', href: '/#blog', section: 'blog' },
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
	{ label: 'Visuals ESP page', href: '/theisle-esp/' },
	{ label: 'Cheats page', href: '/cheats/' },
	{ label: 'All features and hacks', href: '/features/' },
	{ label: 'Plans and pricing', href: '/pricing/' },
	{ label: 'Common questions hub', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is included with The Isle Cheats?',
		answer:
			'The Isle Cheats includes Visuals ESP, World ESP, Cheats, and Other utility hacks. The Cloud-DMA option covers ESP, World ESP, Cheats, and Other features without Aimbot. Full packages can include the complete feature list on the Features page, including optional Aimbot controls for buyers who need them.',
	},
	{
		question: 'What is the Cloud-DMA option?',
		answer:
			'Cloud-DMA is the package option focused on ESP, World ESP, Cheats, and Other hacks such as Instant Rotation, Radar, and FOV Changer. Aimbot is not included in the Cloud-DMA option.',
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
