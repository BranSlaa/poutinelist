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
		<div className="gravy-frame relative  transition-shadow duration-300 z-20">
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
			<div className="absolute -top-6 md:top-0 -left-2 md:-left-12 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border-2 border-amber-700 text-amber-700 font-bold text-2xl z-20">
				{rank}
			</div>
			<motion.div
				className="relative p-2 z-10 flex items-center gap-3 bg-white rounded-xl shadow-lg"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex-1">
					<div className="flex flex-col title-bar">
						<div className="flex items-center gap-2 mb-1 pl-8 md:pl-0">
							<StarRating rating={poutine.rating} />
						</div>
						<h3 className="text-amber-900 font-bold text-lg whitespace-nowrap">
							{poutine.name}
						</h3>
					</div>

					{poutine.location && (
						<p className="text-amber-700 text-sm whitespace-nowrap">
							{poutine.location}
						</p>
					)}
				</div>
			</motion.div>
		</div>
	);
}
