import Image from 'next/image';
import { Poutine } from '@/types/poutine';

interface PoutineCardProps {
	poutine: Poutine;
	rank: number;
	showRank?: boolean;
}

export function StarRating({ rating }: { rating: number }) {
	// Convert 10-point rating to 5-star display
	const stars = Math.round((rating / 10) * 5);

	return (
		<div className="flex gap-1">
			{[1, 2, 3, 4, 5].map(star => (
				<svg
					key={star}
					className={`w-4 h-4 ${
						star <= stars ? 'text-yellow-400' : 'text-gray-300'
					}`}
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			))}
		</div>
	);
}

export function PoutineCard({
	poutine,
	rank,
	showRank = true,
}: PoutineCardProps) {
	return (
		<div className="gravy-frame bg-white rounded-lg border-1 p-2 shadow-lg relative hover:shadow-xl transition-shadow duration-300">
			<div className="fry-image absolute -z-1">
				<Image
					src="/fry.webp"
					alt="Fry"
					width={100}
					height={100}
					className="object-contain"
				/>
			</div>
			{showRank && (
				<div className="absolute -top-2 -left-2 bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
					{rank}
				</div>
			)}
			<div className="flex items-center gap-3">
				<div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border-2 border-amber-200">
					<Image
						src={poutine.image}
						alt={poutine.name}
						width={64}
						height={64}
						className="object-contain"
					/>
				</div>
				<div className="flex-1">
					<div className="flex flex-col title-bar">
						<div className="flex items-center gap-2 mb-1">
							<StarRating rating={poutine.rating} />
							<span className="text-amber-900 font-semibold text-sm">
								{poutine.rating}/10
							</span>
						</div>
						<h3 className="text-amber-900 font-bold text-lg">
							{poutine.name}
						</h3>
					</div>

					{poutine.location && (
						<p className="text-amber-700 text-sm">
							{poutine.location}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
