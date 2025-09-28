'use client';

import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Car, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface PoutineModalProps {
	poutine: Poutine | null;
	poutines: Poutine[];
	currentIndex: number;
	isOpen: boolean;
	onClose: () => void;
	onNavigate: (index: number) => void;
}

interface LikertScaleProps {
	label: string;
	value: number;
	max: number;
}

function LikertScale({ label, value, max }: LikertScaleProps) {
	const getDotColor = (dotIndex: number) => {
		if (dotIndex >= value) {
			// Empty dots
			return 'bg-white border-amber-300';
		}

		// Filled dots - color based on value
		if (value === 1) return 'bg-red-500 border-red-500';
		if (value === 2) return 'bg-orange-500 border-orange-500';
		if (value === 3) return 'bg-amber-500 border-amber-500';
		if (value === 4) return 'bg-lime-500 border-lime-500'; // Same as 3
		if (value === 5) return 'bg-green-700 border-green-700';

		// Default fallback
		return 'bg-amber-500 border-amber-500';
	};

	return (
		<div className="flex items-center justify-between py-2">
			<span className="text-sm font-medium text-black w-28 flex-shrink-0">
				{label}
			</span>
			<div className="flex items-center gap-1 flex-1 max-w-32">
				{Array.from({ length: max }, (_, i) => (
					<div
						key={i}
						className={`w-4 h-4 rounded-full border-2 ${getDotColor(
							i
						)}`}
					/>
				))}
				<span className="ml-2 text-xs font-bold text-black min-w-6">
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
			<h4 className="font-bold text-red-800 mb-3 text-lg">{title}</h4>
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

export function PoutineModal({
	poutine,
	poutines,
	currentIndex,
	isOpen,
	onClose,
	onNavigate,
}: PoutineModalProps) {
	if (!poutine) return null;

	const ranking = poutine.rating;

	// Navigation functions
	const handlePrevious = () => {
		const prevIndex =
			currentIndex > 0 ? currentIndex - 1 : poutines.length - 1;
		onNavigate(prevIndex);
	};

	const handleNext = () => {
		const nextIndex =
			currentIndex < poutines.length - 1 ? currentIndex + 1 : 0;
		onNavigate(nextIndex);
	};

	const canGoPrevious = poutines.length > 1;
	const canGoNext = poutines.length > 1;

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isOpen) return;

			if (event.key === 'ArrowLeft' && canGoPrevious) {
				handlePrevious();
			} else if (event.key === 'ArrowRight' && canGoNext) {
				handleNext();
			} else if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, canGoPrevious, canGoNext, handlePrevious, handleNext, onClose]);

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
							<div className="flex flex-wrap items-center gap-4 pr-10">
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
						<div className="p-4">
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
											width={1000}
											height={1000}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							)}
							{/* Description */}
							{poutine.description && (
								<div className="mb-4">
									<h3 className="font-bold text-red-800 mb-2">
										Description
									</h3>
									<p className="text-black leading-relaxed">
										{poutine.description}
									</p>
								</div>
							)}

							{poutine.location_url && (
								<div className="mb-4">
									<Link
										href={poutine.location_url}
										className="text-green-800"
									>
										<h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
											<Car className="w-4 h-4" /> Get
											Directions
										</h3>
									</Link>
								</div>
							)}

							{/* Detailed Rankings */}
							{ranking && (
								<div className="">
									<h3 className="font-bold text-red-800 mb-4 text-xl">
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
						{/* footer navigation */}
						<div className="flex justify-between items-center p-4 bg-white sticky bottom-0 z-10 border-t border-gray-200">
							<button
								onClick={handlePrevious}
								disabled={!canGoPrevious}
								className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${
									canGoPrevious
										? 'text-amber-700 hover:bg-amber-100'
										: 'text-gray-400 cursor-not-allowed'
								}`}
							>
								<ArrowLeft className="w-4 h-4" />
								Previous
							</button>

							<div className="text-sm text-gray-600 font-medium">
								{currentIndex + 1} of {poutines.length}
							</div>

							<button
								onClick={handleNext}
								disabled={!canGoNext}
								className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${
									canGoNext
										? 'text-amber-700 hover:bg-amber-100'
										: 'text-gray-400 cursor-not-allowed'
								}`}
							>
								Next
								<ArrowRight className="w-4 h-4" />
							</button>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
