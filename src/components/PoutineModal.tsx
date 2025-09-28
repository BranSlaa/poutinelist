'use client';

import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface PoutineModalProps {
	poutine: Poutine | null;
	isOpen: boolean;
	onClose: () => void;
}

interface LikertScaleProps {
	label: string;
	value: number;
	max: number;
}

function LikertScale({ label, value, max }: LikertScaleProps) {
	return (
		<div className="flex items-center justify-between py-2">
			<span className="text-sm font-medium text-amber-800 w-28 flex-shrink-0">
				{label}
			</span>
			<div className="flex items-center gap-1 flex-1 max-w-32">
				{Array.from({ length: max }, (_, i) => (
					<div
						key={i}
						className={`w-4 h-4 rounded-full border-2 ${
							i < value
								? 'bg-amber-500 border-amber-500'
								: 'bg-white border-amber-300'
						}`}
					/>
				))}
				<span className="ml-2 text-xs font-bold text-amber-700 min-w-6">
					{value}/{max}
				</span>
			</div>
		</div>
	);
}

function RankingSection({
	title,
	rankings,
}: {
	title: string;
	rankings: Record<string, number>;
}) {
	return (
		<div className="bg-orange-50 rounded-lg p-4 mb-4">
			<h4 className="font-bold text-amber-900 mb-3 text-lg">{title}</h4>
			<div className="space-y-1">
				{Object.entries(rankings).map(([key, value]) => (
					<LikertScale
						key={key}
						label={key.charAt(0).toUpperCase() + key.slice(1)}
						value={value}
						max={5}
					/>
				))}
			</div>
		</div>
	);
}

export function PoutineModal({ poutine, isOpen, onClose }: PoutineModalProps) {
	if (!poutine) return null;

	const ranking = poutine.rating;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						className="fixed inset-0 bg-black/50 z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>

					{/* Modal */}
					<motion.div
						className="fixed inset-x-4 top-4 bottom-4 md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:max-w-2xl md:h-[90vh] bg-white rounded-xl shadow-2xl z-50 overflow-y-auto"
						initial={{ opacity: 0, scale: 0.9, y: -20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: -20 }}
						transition={{
							type: 'spring',
							damping: 25,
							stiffness: 300,
						}}
					>
						{/* Header */}
						<div className="bg-gradient-to-r from-amber-900 to-orange-800 p-4 text-white sticky top-0 z-10">
							<button
								onClick={onClose}
								className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
							>
								<X className="w-5 h-5" />
							</button>
							<div className="flex items-center gap-4 pr-10">
								<div className="flex-1">
									<h2 className="text-2xl font-titan-one">
										{poutine.name}
									</h2>
									{poutine.location && (
										<p className="text-amber-100 text-sm mt-1">
											{poutine.location}
										</p>
									)}
								</div>
								<div className="flex flex-col items-center">
									<StarRating
										poutine={poutine}
										className="flex-col"
										textColor="text-white"
									/>
								</div>
							</div>
						</div>

						{/* Content */}
						<div className="p-4 h-full">
							{/* Image */}
							{poutine.image_url && (
								<div className="mb-4">
									<h3 className="font-bold text-amber-900 mb-2">
										Photo
									</h3>
									<div className="relative w-full h-64 rounded-lg overflow-hidden">
										<Image
											src={poutine.image_url}
											alt={poutine.name}
											width={100}
											height={100}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							)}
							{/* Description */}
							{poutine.description && (
								<div className="mb-4">
									<h3 className="font-bold text-amber-900 mb-2">
										Description
									</h3>
									<p className="text-amber-800 leading-relaxed">
										{poutine.description}
									</p>
								</div>
							)}

							{/* Detailed Rankings */}
							{ranking && (
								<div className="pb-4">
									<h3 className="font-bold text-amber-900 mb-4 text-xl">
										Detailed Ranking
									</h3>

									<RankingSection
										title="🍟 The Fries"
										rankings={{
											doneness: ranking.fries.doneness,
											taste: ranking.fries.taste,
											cut: ranking.fries.cut,
										}}
									/>

									<RankingSection
										title="🥄 The Gravy"
										rankings={{
											taste: ranking.gravy.taste,
											viscosity: ranking.gravy.viscosity,
											temperature:
												ranking.gravy.temperature,
											amount: ranking.gravy.amount,
										}}
									/>

									<RankingSection
										title="🧀 The Cheese Curds"
										rankings={{
											texture:
												ranking.cheeseCurds.texture,
											melt: ranking.cheeseCurds.melt,
											taste: ranking.cheeseCurds.taste,
											amount: ranking.cheeseCurds.amount,
										}}
									/>

									<RankingSection
										title="🎯 Overall Experience"
										rankings={{
											toppings: ranking.overall.toppings,
											portion: ranking.overall.portion,
											vessel: ranking.overall.vessel,
											harmony: ranking.overall.harmony,
										}}
									/>
								</div>
							)}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
