import { Poutine } from "@/types/poutine";
import { getPoutineOverallRating } from "@/utils/ratingCalculator";

export const poutines: Poutine[] = [
	{
		name: "Loaded Brisket Poutine",
		description:
			"Slow-smoked brisket on classic poutine. Was amazing, but I would have preferred larger chunks of brisket like their little bites, over shaved brisket.",
		location: "Smoking Caboose, St. Thomas, ON",
		location_url:
			"https://www.google.com/maps/place/The+Smokin+Caboose+Barbeque/@42.7776717,-81.1439147,792m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882e61823d053393:0x80945b6c6155ae53!8m2!3d42.7776717!4d-81.1413398!16s%2Fg%2F11lgpb2fpk?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 4, taste: 5, cut: 5 },
			gravy: { taste: 5, viscosity: 4, temperature: 5, amount: 5 },
			cheeseCurds: { texture: 5, melt: 5, taste: 5, amount: 5 },
			overall: { toppings: 4, portion: 5, vessel: 4, harmony: 5 },
		},
	},
	{
		name: "Buffalo Chicken Poutine",
		image_url: "/poutines/harveys-regular-buffalo-chicken-poutine.jpg",
		description:
			"Spicy buffalo chicken with cheese curds and gravy. It can depend on who makes it, so sometimes it's better to ask for less sauce if you know your local joint.",
		location: "Harvey's",
		location_url:
			"https://www.google.com/maps/place/Harvey's/@42.7782222,-81.1750464,792m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882e5e2303e7432f:0x8d0a7d1a1edbbb37!8m2!3d42.7782222!4d-81.1724715!16s%2Fg%2F11cm_ggf15?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 4, taste: 3, cut: 3 },
			gravy: { taste: 4, viscosity: 4, temperature: 4, amount: 4 },
			cheeseCurds: { texture: 4, melt: 4, taste: 5, amount: 5 },
			overall: { toppings: 4, portion: 5, vessel: 2, harmony: 5 },
		},
	},
	{
		name: "Banff Poutine",
		image_url: "/poutines/banff-poutine.webp",
		description:
			"A Perfect poutine made by a true Quebecean. A thin mushroom gravy, perfect cheese curds, and amazingly crispy fries. I almost bought a second one.",
		location: "Banff, AB",
		location_url:
			"https://www.google.com/maps/place/Banff+Poutine/@51.1780096,-115.575103,676m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5370cb78b4e09545:0x5b6179ba3ea641ef!8m2!3d51.1780096!4d-115.5725281!16s%2Fg%2F11h53f9fy4?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 5, taste: 5, cut: 5 },
			gravy: { taste: 5, viscosity: 5, temperature: 5, amount: 5 },
			cheeseCurds: { texture: 5, melt: 5, taste: 5, amount: 5 },
			overall: { toppings: 5, portion: 5, vessel: 4, harmony: 5 },
		},
	},
	{
		name: "Pulled Pork Supreme",
		description:
			"The crispy onions were good, but the rest meh. The fries were undercooked and the meat came with too much liquid. Despite this the portion size, and the amount of cheese makes up for the deficits.",
		location: "Rise to Fries, Barrie, ON",
		location_url:
			"https://www.google.com/maps/place/Rise+to+Fries/@44.7489994,-79.7098989,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4d2ac7b843e0903f:0x6fa9657e7eb0cbef!8m2!3d44.7489994!4d-79.707324!16s%2Fg%2F11ny26xd8_?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 2, taste: 2, cut: 3 },
			gravy: { taste: 3, viscosity: 3, temperature: 4, amount: 4 },
			cheeseCurds: { texture: 4, melt: 4, taste: 4, amount: 5 },
			overall: { toppings: 3, portion: 4, vessel: 3, harmony: 2 },
		},
	},
	{
		name: "McDonalds Poutine",
		description: "McDonalds poutine is what you expect from them.",
		location: "McDonalds",
		location_url:
			"https://www.google.com/maps/place/McDonald's/@42.7791579,-81.1824924,792m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882e5e3dd23f3463:0xaa61d22d0f75ca58!8m2!3d42.7791579!4d-81.1799175!16s%2Fg%2F1td9r4sn?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 2, taste: 4, cut: 2 },
			gravy: { taste: 4, viscosity: 3, temperature: 3, amount: 4 },
			cheeseCurds: { texture: 3, melt: 3, taste: 3, amount: 3 },
			overall: { toppings: 0, portion: 3, vessel: 5, harmony: 4 },
		},
	},
	{
		name: "Wendy's Poutine",
		description:
			"Wendy's poutine is just okay. If they cooked the fries more, it would be better.",
		location: "Wendy's",
		location_url:
			"https://www.google.com/maps/place/Wendy's/@42.7797172,-81.1744258,792m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882e5e23b745e369:0xe311f8e6c0892263!8m2!3d42.7797172!4d-81.1718509!16s%2Fg%2F1tp0f9kj?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 2, taste: 3, cut: 2 },
			gravy: { taste: 3, viscosity: 3, temperature: 3, amount: 3 },
			cheeseCurds: { texture: 3, melt: 3, taste: 3, amount: 2 },
			overall: { toppings: 0, portion: 2, vessel: 5, harmony: 4 },
		},
	},
	{
		name: "Legend's Poutine",
		description:
			"This poutine was decent, good tasting gravy, not the warmest when it arrived, but overall good.",
		location: "Legend's, St. Thomas, ON",
		location_url:
			"https://www.google.com/maps/place/Legends+Tavern/@42.7787756,-81.1938726,792m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882e5e42201b0975:0xa742700669db22ac!8m2!3d42.7787756!4d-81.1912977!16s%2Fg%2F1w0j4v1m?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 4, taste: 4, cut: 4 },
			gravy: { taste: 4, viscosity: 3, temperature: 3, amount: 4 },
			cheeseCurds: { texture: 4, melt: 4, taste: 5, amount: 4 },
			overall: { toppings: 0, portion: 3, vessel: 5, harmony: 4 },
		},
	},
	{
		name: "Butter Chicken Poutine",
		description:
			"This can barely be classified as a poutine, seeing as it did not have gravy, but it was still decent.",
		location: "New York Fries, Cambridge 401 Enroute",
		location_url:
			"https://www.google.com/maps/place/New+York+Fries+ONroute+Cambridge+South/@43.435646,-80.2956772,29020m/data=!3m1!1e3!4m10!1m2!2m1!1sNew+York+Fries!3m6!1s0x882b87f51b9533f1:0x664cad0e900cfe64!8m2!3d43.4329314!4d-80.2450611!15sCg5OZXcgWW9yayBGcmllcyIDiAEBWhAiDm5ldyB5b3JrIGZyaWVzkgEKcmVzdGF1cmFudKoBZAoNL2cvMTFiYzV4bjI1eAoJL20vMDZwdHp5EAEqEiIObmV3IHlvcmsgZnJpZXMoADIeEAEiGs3Ue7yKWQJW89wWE2qkdPMjpTNn6tB2-qZPMhIQAiIObmV3IHlvcmsgZnJpZXPgAQA!16s%2Fg%2F11rvbgcwzs?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 4, taste: 4, cut: 5 },
			gravy: { taste: 0, viscosity: 0, temperature: 0, amount: 0 },
			cheeseCurds: { texture: 4, melt: 5, taste: 4, amount: 3 },
			overall: { toppings: 3, portion: 4, vessel: 3, harmony: 3 },
		},
	},
	{
		name: "Herm's Hot Hamburger Poutine",
		image_url: "/poutines/Herms-hot-hamburger-poutine.webp",
		description:
			"Herm's Hot Hamburger poutine hits the spot. They have crispy fries you would expect from a chip wagon, fresh cheese and a tasty gravy. This is one you want to go back for.",
		location: "Herm's Snack Wacky Foods, St Thomas, ON",
		location_url:
			"https://www.google.com/maps/place/Herm%E2%80%99s+Snack+Wacky+Foods/@42.7849101,-81.1680122,17z/data=!3m1!4b1!4m6!3m5!1s0x882e5e280ae293f9:0x2ac717be9fbe4d23!8m2!3d42.7849101!4d-81.1654373!16s%2Fg%2F11f5d5csml?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 5, taste: 5, cut: 5 },
			gravy: { taste: 4, viscosity: 4, temperature: 4, amount: 5 },
			cheeseCurds: { texture: 5, melt: 5, taste: 5, amount: 5 },
			overall: { toppings: 4, portion: 4, vessel: 4, harmony: 5 },
		},
	},
	{
		name: "Mary Brown's Tater Poutine",
		description:
			"Mary Brown's tater poutine is a classic poutine made with wedges instead of fries, fresh cheese and a tasty gravy. The wedges are very tasty and hold up well to the gravy.",
		location: "Mary Brown's, St Thomas, ON",
		location_url:
			"https://www.google.com/maps/place/Mary+Brown's+Chicken/@42.7790934,-81.1768299,17z/data=!3m1!4b1!4m6!3m5!1s0x882e5f3c4a407273:0x83fd290599af7920!8m2!3d42.7790934!4d-81.174255!16s%2Fg%2F11tfnc0yn9?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 4, taste: 5, cut: 5 },
			gravy: { taste: 4, viscosity: 4, temperature: 4, amount: 5 },
			cheeseCurds: { texture: 4, melt: 4, taste: 5, amount: 4 },
			overall: { toppings: 0, portion: 4, vessel: 5, harmony: 5 },
		},
	},
	{
		name: "Osmow's Chicken Shwarma Poutine",
		image_url: "/poutines/osmows-chicken-shwarma-poutine.webp",
		description:
			"Classic Osmow's taste, this chicken shwarma poutine is a decent poutine made with chicken shwarma. I would have liked more gravy and less sauce however. If you like Osmows you'll like this.",
		location: "Osmow's, St Thomas, ON",
		location_url:
			"https://www.google.com/maps/place/Osmow's+Shawarma/@42.7819682,-81.1772697,1583m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882e5fcad595cc53:0x8fa3d6164cc1f677!8m2!3d42.7819682!4d-81.1746948!16s%2Fg%2F11mj8bs5nr?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 3, taste: 4, cut: 4 },
			gravy: { taste: 4, viscosity: 3, temperature: 3, amount: 2 },
			cheeseCurds: { texture: 4, melt: 4, taste: 4, amount: 3 },
			overall: { toppings: 3, portion: 3, vessel: 2, harmony: 3 },
		},
	},
	{
		name: "A and W Poutine",
		description:
			"A and W poutine is a classic poutine made with their russet potatoes. The cheese curds were overly melty and the portion size is small.",
		location: "A and W, St Thomas, ON",
		location_url:
			"https://www.google.com/maps/place/A%26W+Canada/@42.778451,-81.177195,792m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882e5e3dabe61ae5:0x9c2b7552aea2f2ff!8m2!3d42.778451!4d-81.177195!16s%2Fg%2F1tql5f07?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
		rating: {
			fries: { doneness: 3, taste: 4, cut: 3 },
			gravy: { taste: 4, viscosity: 3, temperature: 3, amount: 3 },
			cheeseCurds: { texture: 2, melt: 3, taste: 3, amount: 4 },
			overall: { toppings: 0, portion: 2, vessel: 3, harmony: 3 },
		},
	},
	{
		name: "KFC Matty Matheson Mega Melt Poutine",
		description:
			"The first promotional poutine on this list. The individual components seemed lacking, but it comes together well. It comes with carmelized onions and popcorn chicken. The carmelized onions were a good addition, and the popcorn chicken was as to be expected. The fries could use to be thicker and crispier but overall it worked. Additionally the cheese curds were small in size making for a very melty poutine as advertised. Advertised as mega, it could have been more but for the $10 price, this was great value.",
		location: "KFC, St Thomas, ON",
		location_url:
			"https://www.google.com/maps/place/KFC/@42.7789783,-81.1808961,17z/data=!3m1!4b1!4m6!3m5!1s0x882e5e3db470274d:0xa026d2da9575d9a7!8m2!3d42.7789783!4d-81.1783212!16s%2Fg%2F1hc53t6fy?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
		image_url: "/poutines/kfc-matty-matheson-mega-melt-poutine.webp",
		rating: {
			fries: { doneness: 3, taste: 3, cut: 2 },
			gravy: { taste: 5, viscosity: 4, temperature: 4, amount: 4 },
			cheeseCurds: { texture: 2, melt: 2, taste: 3, amount: 2 },
			overall: { toppings: 4, portion: 4, vessel: 5, harmony: 4 },
		},
	},
	{
		name: "Mixed Shawarma Poutine",
		description:
			"This poutine is topped with mixed beef and chicken shawarma and loaded with sauce. The gravy was hardly noticeable and the cheese curds were small and melty. The fries were undercooked and the overall taste was good if you like the sauces that come with it.",
		location: "Shawarma Brantford Pita Plus",
		location_url:
			"https://www.google.com/maps/place/Shawarma+Brantford+Pita+Plus/@43.1392638,-80.2662822,17z/data=!3m1!4b1!4m6!3m5!1s0x882c660f10677b95:0x1eb6dedf2c41f245!8m2!3d43.1392638!4d-80.2637073!16s%2Fg%2F1trprfkp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
		image_url: "/poutines/shawarma-brantford-pita-plus.webp",
		rating: {
			fries: { doneness: 3, taste: 4, cut: 4 },
			gravy: { taste: 4, viscosity: 4, temperature: 3, amount: 1 },
			cheeseCurds: { texture: 3, melt: 2, taste: 2, amount: 1 },
			overall: { toppings: 3, portion: 3, vessel: 3, harmony: 2 },
		},
	},
	{
		name: "Fast Eddy's Fryz Poutine",
		description:
			"Fast Eddy's poutine is a standard poutine with a crazy cheese pull. The fries are slightly small and undercooked but the overall taste was good. Fries could of been crispier and the cheese less melty to give this a higher score.",
		location: "Fast Eddy's, Brantford, ON",
		location_url:
			"https://www.google.com/maps/place/Fast+Eddie's/@43.1697731,-80.248982,17z/data=!4m6!3m5!1s0x882c65ba1430acd3:0xbfa5e15370858e36!8m2!3d43.1697731!4d-80.2457057!16s%2Fg%2F1260409by?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D",
		image_url: "/poutines/fast-eddys.webp",
		rating: {
			fries: { doneness: 2, taste: 3, cut: 1 },
			gravy: { taste: 3, viscosity: 3, temperature: 4, amount: 3 },
			cheeseCurds: { texture: 2, melt: 2, taste: 3, amount: 4 },
			overall: { toppings: 0, portion: 2, vessel: 1, harmony: 2 },
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
