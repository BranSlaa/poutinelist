export interface Poutine {
	name: string;
	rating: number; // 0-10 scale
	image: string;
	description?: string;
	location?: string;
}

export interface PoutineRanking {
	poutine: Poutine;
	rank: number;
}
