import { Poutine } from '@/types/poutine';

export const poutines: Poutine[] = [
	{
		name: 'Brisket Poutine',
		rating: 9.5,
		image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRkZENzAwIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkZEMDAwIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjI1IiB5PSIzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjOEE0NDQ0Ii8+Cjwvc3ZnPgo=',
		description: 'Slow-smoked brisket on classic poutine',
		location: 'Smoking Caboose, St. Thomas, ON',
	},
	{
		name: 'Buffalo Chicken Poutine',
		rating: 9.0,
		image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRkZENzAwIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkZEMDAwIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjI1IiB5PSIzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRkY2NjAwIi8+Cjwvc3ZnPgo=',
		description: 'Spicy buffalo chicken with cheese curds and gravy',
		location: "Harvey's",
	},
	{
		name: 'Banff Poutine',
		rating: 10.0,
		image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRkZENzAwIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkZEMDAwIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjI1IiB5PSIzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=',
		description: 'Perfect poutine with premium ingredients',
		location: 'Banff, AB',
	},
	{
		name: 'Rise to Fries Poutine',
		rating: 3.0,
		image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRkZENzAwIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkZEMDAwIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjI1IiB5PSIzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjQ0M2NjMzIi8+Cjwvc3ZnPgo=',
		description: 'Basic poutine that needs improvement',
		location: 'Rise to Fries, Barrie, ON',
	},
];

// Sort poutines by rating (highest first)
export const sortedPoutines = [...poutines].sort((a, b) => b.rating - a.rating);

// Get top 4 poutines for the homepage
export const topPoutines = sortedPoutines.slice(0, 4);

export const otherPoutines = sortedPoutines.slice(4);
