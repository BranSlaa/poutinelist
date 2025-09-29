'use client';

import Image from 'next/image';
import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';
import { motion } from 'framer-motion';

interface PoutineCardProps {
	poutine: Poutine;
	rank: number;
	showRank?: boolean;
	onClick?: (poutine: Poutine) => void;
}

export function PoutineCard({ poutine, rank, onClick }: PoutineCardProps) {
	return (
		<div
			className="gravy-frame relative transition-shadow duration-300 z-20 cursor-pointer group"
			onClick={() => onClick?.(poutine)}
		>
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
			<div className="absolute -top-6 md:top-0 -left-2 md:-left-12 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border-2 border-red-800 text-red-800 font-bold text-2xl z-20">
				{rank}
			</div>
			<motion.div
				className="relative z-10 flex items-center gap-3 bg-white rounded-xl"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex-1 rounded-xl p-2 group-hover:bg-amber-100">
					<div className="flex flex-col title-bar">
						<div className="flex items-center gap-2 mb-1 pl-8 md:pl-0">
							<StarRating poutine={poutine} />
						</div>
					</div>
					<div className="flex items-center gap-2">
						<div className="flex flex-col">
							<h3 className="text-red-800 text-lg whitespace-nowrap font-titan-one">
								{poutine.name}
							</h3>

							{poutine.location && (
								<p className="text-red-700 text-sm whitespace-nowrap">
									{poutine.location}
								</p>
							)}
						</div>
						{poutine.image_url && (
							<div className="w-12 h-12 overflow-hidden rounded-full">
								<Image
									src={poutine.image_url}
									alt={poutine.name}
									width={100}
									height={100}
									className="w-full h-full object-cover"
								/>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
}
