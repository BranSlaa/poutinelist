'use client';

import Image from 'next/image';
import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';
import { motion } from 'framer-motion';

interface PoutineCardProps {
	poutine: Poutine;
	rank: number;
	showRank?: boolean;
}

export function PoutineCard({ poutine, rank }: PoutineCardProps) {
	return (
		<div className="gravy-frame bg-amber-50 rounded-lg relative  transition-shadow duration-300">
			<motion.div
				className="fry-image absolute"
				initial={{ opacity: 0, x: 10 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -10 }}
				transition={{ duration: 0.5 }}
			>
				<Image
					src="/fry.webp"
					alt="Fry"
					width={100}
					height={100}
					className="object-contain"
				/>
			</motion.div>
			<motion.div
				className="relative p-2 z-10 flex items-center gap-3 bg-amber-50"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.5 }}
			>
				<div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border-2 border-amber-700 text-amber-700 font-bold text-2xl">
					{rank}
				</div>
				<div className="flex-1">
					<div className="flex flex-col title-bar">
						<div className="flex items-center gap-2 mb-1">
							<StarRating rating={poutine.rating} />
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
			</motion.div>
		</div>
	);
}
