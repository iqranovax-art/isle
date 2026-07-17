export const siteConfig = {
	name: 'The Isle Cheats',
	url: 'https://islecheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@islecheats.net',
	logo: '/images/zadeyo-logo.png',
	checkoutUrl: 'https://zadeyo.com/products/theisle-cheats',
	defaultOgImage: '/images/hero.webp',
	metaDescription:
		'The Isle Cheats offers Cloud-DMA, Visuals ESP, World ESP, and Exploits for The Isle on Windows PC. Compare features, pricing, updates, and support at islecheats.net.',
	keywords:
		'The Isle Cheats, The Isle cheats, isle cheats, ESP, exploits, Cloud-DMA, instant rotation, the isle, dinosaur survival, islecheats.net',
} as const;

export const cloudDmaOption = {
	label: 'Cloud-DMA',
	summary:
		'Cloud-DMA package includes Visuals ESP, World ESP, Exploits, and Other tools. Aimbot is not included in the Cloud-DMA option.',
	excludes: ['Aimbot'],
} as const;

export const productInfo = {
	name: 'The Isle Cheats',
	shortName: 'The Isle Cheats',
	tagline: 'Cloud-DMA, ESP, and Exploits for The Isle',
	summary:
		'The Isle Cheats is a software package with Cloud-DMA support, Visuals ESP, World ESP, Exploits, and utility tools for players who want clearer survival information and advanced control options in The Isle.',
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
		exploits: [
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
			'Cloud-DMA option available (ESP, World ESP, Exploits, and Other — no Aimbot)',
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
	{ id: 'exploits', title: 'Exploits', href: '/theisle-exploits/' },
	{ id: 'other', title: 'Other (The Isle)', href: '/features/#other' },
	{ id: 'aimbot', title: 'Aimbot', href: '/features/#aimbot', cloudDmaExcluded: true },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'ESP', href: '/theisle-esp/' },
	{ label: 'Exploits', href: '/theisle-exploits/' },
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
	{ label: 'Visuals ESP page', href: '/theisle-esp/' },
	{ label: 'Exploits page', href: '/theisle-exploits/' },
	{ label: 'Full feature breakdown', href: '/features/' },
	{ label: 'Package pricing plans', href: '/pricing/' },
	{ label: 'Common questions hub', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is included with The Isle Cheats?',
		answer:
			'The Isle Cheats includes Visuals ESP, World ESP, Exploits, and Other utility tools. The Cloud-DMA option covers ESP, World ESP, Exploits, and Other features without Aimbot. Full packages can include the complete feature list on the Features page, including optional Aimbot controls for buyers who need them.',
	},
	{
		question: 'What is the Cloud-DMA option?',
		answer:
			'Cloud-DMA is the package option focused on ESP, World ESP, Exploits, and Other tools such as Instant Rotation, Radar, and FOV Changer. Aimbot is not included in the Cloud-DMA option.',
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
