export interface Poutine {
	name: string;
	rating: number; // 0-10 scale
	description?: string;
	location?: string;
}

export interface PoutineRanking {
	poutine: Poutine;
	rank: number;
}
