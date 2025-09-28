// Type for 0-5 rating scale
export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export interface PoutineRating {
	fries: {
		doneness: Rating;
		taste: Rating;
		cut: Rating;
	};
	gravy: {
		taste: Rating;
		viscosity: Rating;
		temperature: Rating;
		amount: Rating;
	};
	cheeseCurds: {
		texture: Rating;
		melt: Rating;
		taste: Rating;
		amount: Rating;
	};
	overall: {
		toppings: Rating;
		portion: Rating;
		vessel: Rating;
		harmony: Rating;
	};
}

export interface Poutine {
	name: string;
	restaurant?: string;
	image_url?: string;
	description?: string;
	location?: string;
	location_url?: string;
	rating?: PoutineRating; // Optional detailed breakdown
}
