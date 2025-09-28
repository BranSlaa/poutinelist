import { Poutine, PoutineRating, Rating } from '@/types/poutine';

/**
 * Calculate the average rating for a specific category
 */
export function calculateCategoryAverage(
	category: Record<string, Rating>
): number {
	const values = Object.values(category).filter(value => value !== 0);

	let average =
		values.reduce((sum, value) => sum + value, 0 as number) / values.length;
	return average;
}

/**
 * Calculate the overall rating from detailed ranking
 * Each category is equally weighted (25% each)
 */
export function calculateOverallRating(ranking: PoutineRating): number {
	const friesAverage = calculateCategoryAverage(ranking.fries);
	const gravyAverage = calculateCategoryAverage(ranking.gravy);
	const cheeseCurdsAverage = calculateCategoryAverage(ranking.cheeseCurds);
	const overallAverage = calculateCategoryAverage(ranking.overall);

	// Each category is equally weighted (25% each)
	const totalAverage =
		(friesAverage + gravyAverage + cheeseCurdsAverage + overallAverage) / 4;

	return totalAverage;
}

/**
 * Get the overall rating for a poutine (either from detailed ranking or fallback)
 */
export function getPoutineOverallRating(poutine: Poutine): number {
	if (poutine.rating) {
		// If rating is a PoutineRanking object, calculate the average
		return calculateOverallRating(poutine.rating);
	}

	// Fallback to 0 if no rating data
	return 0;
}
