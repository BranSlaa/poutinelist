'use client';

import Image from 'next/image';
import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';

interface TopPoutineCardProps {
	poutine: Poutine;
	onClick?: (poutine: Poutine) => void;
}

export function TopPoutineCard({ poutine, onClick }: TopPoutineCardProps) {
	return (
		<div
			className="rounded-lg relative transition-shadow duration-300 pt-4 pr-[25px] pb-4 pl-[85px] transform -translate-x-[30px] md:translate-x-0 cursor-pointer group"
			onClick={() => onClick?.(poutine)}
		>
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
			<div className="flex items-center gap-2 absolute bottom-[60px] md:bottom-[60px] left-4 md:left-2 z-20">
				<span className="bg-amber-100 text-red-800 border-4 border-red-800 rounded-full px-2 py-1 font-bold h-24 w-24 flex items-center justify-center text-5xl">
					#1
				</span>
			</div>
			<div className="relative z-10 flex flex-col  bg-white min-w-[270px] group-hover:bg-amber-100">
				<div className="h-[285px] overflow-hidden w-[calc(100%+10px)] max-w-[calc(100%+10px)] transform -translate-x-[4px] rounded-t-lg">
					{poutine.image_url && (
						<Image
							src={poutine.image_url}
							alt={poutine.name}
							width={500}
							height={500}
							className="object-cover w-full h-full"
						/>
					)}
				</div>

				<div className="flex-1">
					<div className="flex flex-col py-2 px-4">
						<div className="flex flex-col">
							<div className="flex items-center gap-2 pl-4 md:pl-0">
								<StarRating poutine={poutine} />
							</div>
							<h3 className="text-red-800 text-lg font-titan-one">
								{poutine.name}
							</h3>
						</div>
						{poutine.location && (
							<p className="text-red-700 text-sm">
								{poutine.location}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
