import { Poutine } from '@/types/poutine';
import { getPoutineOverallRating } from '@/utils/ratingCalculator';

export const poutines: Poutine[] = [
	{
		name: 'Loaded Brisket Poutine',
		description:
			'Slow-smoked brisket on classic poutine. Was amazing, but I would have preferred larger chunks of brisket like their little bites, over shaved brisket.',
		location: 'Smoking Caboose, St. Thomas, ON',
		rating: {
			fries: { doneness: 4, taste: 5, cut: 5 },
			gravy: { taste: 5, viscosity: 4, temperature: 5, amount: 5 },
			cheeseCurds: { texture: 5, melt: 5, taste: 5, amount: 5 },
			overall: { toppings: 4, portion: 5, vessel: 4, harmony: 5 },
		},
	},
	{
		name: 'Buffalo Chicken Poutine',
		description:
			"Spicy buffalo chicken with cheese curds and gravy. It can depend on who makes it, so sometimes it's better to ask for less sauce if you know your local joint.",
		location: "Harvey's",
		rating: {
			fries: { doneness: 4, taste: 3, cut: 4 },
			gravy: { taste: 5, viscosity: 5, temperature: 5, amount: 4 },
			cheeseCurds: { texture: 5, melt: 4, taste: 5, amount: 5 },
			overall: { toppings: 5, portion: 5, vessel: 4, harmony: 5 },
		},
	},
	{
		name: 'Banff Poutine',
		image_url: '/banff-poutine.webp',
		description:
			'A Perfect poutine made by a true Quebecean. A thin mushroom gravy, perfect cheese curds, and amazingly crispy fries. I almost bought a second one.',
		location: 'Banff, AB',
		rating: {
			fries: { doneness: 5, taste: 5, cut: 5 },
			gravy: { taste: 5, viscosity: 5, temperature: 5, amount: 5 },
			cheeseCurds: { texture: 5, melt: 5, taste: 5, amount: 5 },
			overall: { toppings: 5, portion: 5, vessel: 5, harmony: 5 },
		},
	},
	{
		name: 'Pulled Pork Supreme',
		description:
			'The crispy onions were good, but the rest meh. The fries were undercooked and the meat came with too much liquid.',
		location: 'Rise to Fries, Barrie, ON',
		rating: {
			fries: { doneness: 2, taste: 2, cut: 3 },
			gravy: { taste: 3, viscosity: 3, temperature: 4, amount: 4 },
			cheeseCurds: { texture: 4, melt: 4, taste: 4, amount: 5 },
			overall: { toppings: 4, portion: 4, vessel: 4, harmony: 3 },
		},
	},
	{
		name: 'McDonalds Poutine',
		description: 'McDonalds poutine is what you expect from them.',
		location: 'McDonalds',
		rating: {
			fries: { doneness: 3, taste: 4, cut: 3 },
			gravy: { taste: 4, viscosity: 3, temperature: 3, amount: 4 },
			cheeseCurds: { texture: 3, melt: 4, taste: 4, amount: 3 },
			overall: { toppings: 0, portion: 3, vessel: 5, harmony: 4 },
		},
	},
	{
		name: "Wendy's Poutine",
		description:
			"Wendy's poutine is just okay. If they cooked the fries more, it would be better.",
		location: "Wendy's",
		rating: {
			fries: { doneness: 2, taste: 2, cut: 2 },
			gravy: { taste: 3, viscosity: 3, temperature: 3, amount: 3 },
			cheeseCurds: { texture: 2, melt: 3, taste: 3, amount: 2 },
			overall: { toppings: 0, portion: 2, vessel: 5, harmony: 3 },
		},
	},
	{
		name: "Legend's Poutine",
		description:
			'This poutine was decent, good tasting gravy, not the warmest when it arrived, but overall good.',
		location: "Legend's, St. Thomas, ON",
		rating: {
			fries: { doneness: 4, taste: 4, cut: 4 },
			gravy: { taste: 4, viscosity: 4, temperature: 3, amount: 4 },
			cheeseCurds: { texture: 4, melt: 4, taste: 5, amount: 4 },
			overall: { toppings: 0, portion: 4, vessel: 5, harmony: 4 },
		},
	},
];

// Sort poutines by rating (highest first)
export const sortedPoutines = [...poutines].sort((a, b) => {
	const ratingA = getPoutineOverallRating(a);
	const ratingB = getPoutineOverallRating(b);
	return ratingB - ratingA;
});

// Get top poutine
export const topPoutine = sortedPoutines[0];

// Get top 4 poutines
export const topPoutines = sortedPoutines.slice(1, 5);

// Get other poutines
export const otherPoutines = sortedPoutines.slice(5);
