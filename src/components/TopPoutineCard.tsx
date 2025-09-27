'use client';

import Image from 'next/image';
import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';
import { motion } from 'framer-motion';

interface TopPoutineCardProps {
	poutine: Poutine;
}

export function TopPoutineCard({ poutine }: TopPoutineCardProps) {
	return (
		<div className="rounded-lg relative transition-shadow duration-300 pt-4 pr-[25px] pb-4 pl-[85px] transform -translate-x-[30px] md:translate-x-0">
			<Image
				src="/gravyframe.svg"
				alt="Gravy Frame"
				width={100}
				height={100}
				className="object-contain absolute top-0 left-0 z-20 w-full max-w-[1000px]"
			/>
			<div className="fry-image absolute bottom-[50px] left-0 scale-150">
				<Image
					src="/fry.webp"
					alt="Fry"
					width={100}
					height={100}
					className="object-contain"
				/>
			</div>
			<div className="flex items-center gap-2 absolute bottom-[40px] md:bottom-[70px] left-18 md:left-4 z-20">
				<span className="bg-amber-100 text-amber-700 border-2 border-amber-700 rounded-full px-2 py-1 font-bold h-12 w-12 flex items-center justify-center text-2xl">
					#1
				</span>
			</div>
			<div className="relative z-10 flex flex-col items-center bg-white min-w-[270px]">
				{poutine.image_url && (
					<Image
						src={poutine.image_url}
						alt={poutine.name}
						width={100}
						height={100}
						className="object-cover max-h-[285px] w-[calc(100%+10px)] max-w-[calc(100%+10px)] transform -translate-x-[4px] rounded-t"
					/>
				)}

				<div className="flex-1">
					<div className="flex flex-col py-2 px-4">
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
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
				</div>
			</div>
		</div>
	);
}
