import { Poutine } from '@/types/poutine';

export const poutines: Poutine[] = [
	{
		name: 'Loaded Brisket Poutine',
		rating: 9.5,
		description:
			'Slow-smoked brisket on classic poutine. Was amazing, but I would have preferred larger chunks of brisket like their little bites, over shaved brisket.',
		location: 'Smoking Caboose, St. Thomas, ON',
	},
	{
		name: 'Buffalo Chicken Poutine',
		rating: 8.0,
		description:
			"Spicy buffalo chicken with cheese curds and gravy. It can depend on who makes it, so sometimes it's better to ask for less sauce if you know your local joint.",
		location: "Harvey's",
	},
	{
		name: 'Banff Poutine',
		rating: 10.0,
		image_url: '/banff-poutine.webp',
		description:
			'A Perfect poutine made by a true Quebecean. A thin mushroom gravy, perfect cheese curds, and amazingly crispy fries. I almost bought a second one.',
		location: 'Banff, AB',
	},
	{
		name: 'Rise to Fries Pulled Pork Poutine Supreme',
		rating: 2.5,
		description:
			'The crispy onions were good, but the rest meh. The fries were undercooked and the meat came with too much liquid.',
		location: 'Rise to Fries, Barrie, ON',
	},
	{
		name: 'McDonalds Poutine',
		rating: 5.0,
		description: 'McDonalds poutine is what you expect from them.',
		location: 'McDonalds',
	},
	{
		name: "Wendy's Poutine",
		rating: 4.0,
		description:
			"Wendy's poutine is just okay. If they cooked the fries more, it would be better.",
		location: "Wendy's",
	},
	{
		name: "Legend's Poutine",
		rating: 7.0,
		description:
			'This poutine was decent, good tasting gravy, not the warmest when it arrived, but overall good.',
		location: "Legend's, St. Thomas, ON",
	},
];

// Sort poutines by rating (highest first)
export const sortedPoutines = [...poutines].sort((a, b) => b.rating - a.rating);

// Get top poutine
export const topPoutine = sortedPoutines[0];

// Get top 4 poutines
export const topPoutines = sortedPoutines.slice(1, 5);

// Get other poutines
export const otherPoutines = sortedPoutines.slice(5);
