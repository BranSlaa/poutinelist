interface StarProps {
	fill: 'full' | 'half' | 'quarter' | 'three-quarter' | 'empty';
}

export function Star({ fill }: StarProps) {
	const getFillPercentage = () => {
		switch (fill) {
			case 'full':
				return '100%';
			case 'three-quarter':
				return '75%';
			case 'half':
				return '50%';
			case 'quarter':
				return '25%';
			case 'empty':
			default:
				return '0%';
		}
	};

	return (
		<div className="relative w-4 h-4">
			{/* Background star (empty) */}
			<svg
				className="absolute inset-0 w-4 h-4 text-gray-300"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>

			{/* Filled portion */}
			<svg
				className="absolute inset-0 w-4 h-4 text-yellow-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				style={{
					clipPath: `inset(0 ${
						100 - parseFloat(getFillPercentage())
					}% 0 0)`,
				}}
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		</div>
	);
}

export function StarRating({
	rating,
	className,
}: {
	rating: number;
	className?: string;
}) {
	// Convert 10-point scale to 5-star scale
	const starRating = (rating / 10) * 5;

	// Calculate the fill for each star
	const getStarFill = (starIndex: number): StarProps['fill'] => {
		const starValue = starRating - starIndex;

		if (starValue <= 0) return 'empty';
		if (starValue >= 1) return 'full';
		if (starValue >= 0.75) return 'three-quarter';
		if (starValue >= 0.5) return 'half';
		if (starValue >= 0.25) return 'quarter';
		return 'empty';
	};

	return (
		<div className={`flex items-center ${className} gap-1`}>
			<div className="flex gap-1">
				{[0, 1, 2, 3, 4].map(starIndex => (
					<Star key={starIndex} fill={getStarFill(starIndex)} />
				))}
			</div>
			<span className="text-amber-900 font-semibold text-sm">
				{rating}/10
			</span>
		</div>
	);
}
