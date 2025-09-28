'use client';

import Image from 'next/image';
import { PoutineCard } from '@/components/PoutineCard';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
	topPoutine,
	topPoutines,
	otherPoutines,
	sortedPoutines,
} from '@/data/poutines';
import { PoutineTable } from '@/components/PoutineTable';
import Link from 'next/link';
import { Contact } from '@/components/Contact';
import { motion } from 'framer-motion';
import { TopPoutineCard } from '@/components/TopPoutineCard';
import { PoutineModal } from '@/components/PoutineModal';
import { useState } from 'react';
import { Poutine } from '@/types/poutine';

export default function Home() {
	const [selectedPoutine, setSelectedPoutine] = useState<Poutine | null>(
		null
	);
	const [currentPoutineIndex, setCurrentPoutineIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handlePoutineClick = (poutine: Poutine) => {
		// Find the index of the clicked poutine in the sorted list
		const index = sortedPoutines.findIndex(p => p.name === poutine.name);
		setCurrentPoutineIndex(index);
		setSelectedPoutine(poutine);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedPoutine(null);
	};

	const handleNavigate = (index: number) => {
		setCurrentPoutineIndex(index);
		setSelectedPoutine(sortedPoutines[index]);
	};

	return (
		<div className="min-h-screen overflow-x-hidden">
			<Navigation />
			<div className="relative py-16 bg-amber-50">
				<motion.div
					className="container max-w-5xl mx-auto relative z-20 grid grid-cols-1 md:grid-cols-2 px-4 gap-x-12 gap-y-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.5 }}
				>
					{/* Header */}
					<div className="md:col-span-2">
						<h1 className="sr-only">Poutine List</h1>
						<h2 className="text-4xl text-amber-900 mb-4 font-titan-one">
							The Definitive Poutine Ranking: A Quest for
							Canada&apos;s Best.
						</h2>
					</div>
					<div className="">
						<p className="text-xl text-red-800 mb-8">
							Every poutine here has been personally tested and
							rigorously scored using our detailed criteria for
							Fries, Gravy, and Curds. This list is my evolving
							quest to find the perfect bowl.
						</p>
						<p className="text-xl text-red-800 mb-4 font-medium">
							Do you know a great poutine I need to try?
						</p>
						<Link
							href="#submit-poutine"
							className="block w-fit bg-red-800 text-white py-3 px-6 rounded-md font-bold hover:bg-amber-900 transition-colors"
						>
							Submit a Poutine for Review
						</Link>
					</div>
					<div className="relative flex items-center justify-center md:mt-4 md:justify-start">
						<div className=" plaid rounded-full aspect-square w-[400px] max-w-full border-2 border-black"></div>
						<Image
							src="/poutine.webp"
							alt="Poutine bowl"
							width={646}
							height={710}
							priority
							fetchPriority="high"
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[300px] mx-auto md:mx-0 z-10 drop-shadow-2xl"
						/>
					</div>
				</motion.div>
				{/* Main content with poutine bowl and rankings */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-8 gap-y-4 max-w-7xl mx-auto mt-24"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="relative w-fit mx-auto text-2xl font-bold text-center lg:text-left mb-4 md:col-span-2">
						<Image
							src="/gravy-splat-text-frame.svg"
							alt="Gravy Splat effect"
							width={526}
							height={130}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[333px] h-auto object-contain max-w-[initial]"
						/>
						<span className="text-white relative z-10">
							Poutine Hall of Fame
						</span>
					</h3>

					<div className="flex-1 flex flex-col items-center md:items-end mb-4">
						<TopPoutineCard
							poutine={topPoutine}
							onClick={handlePoutineClick}
						/>
					</div>

					{/* Gravy Frame Container */}
					<div className="flex justify-center md:justify-start relative transform -translate-x-[15px] md:translate-x-0 flex-1">
						{/* Poutine rankings positioned within frame */}
						<div className="relative z-10 pt-[10px] pr-[21px] pb-[23px] pl-[64px]">
							{/* Responsive SVG Frame */}
							<Image
								src="/4-gravy-frame.svg"
								alt="Gravy Frame"
								width={409}
								height={509}
								className="absolute inset-0 w-auto h-full object-contain z-20"
							/>
							{topPoutines.map((poutine, index) => (
								<PoutineCard
									key={index}
									poutine={poutine}
									rank={index + 2}
									onClick={handlePoutineClick}
								/>
							))}
						</div>
					</div>
				</motion.div>
				<motion.div
					className="max-w-7xl mx-auto flex flex-col  mt-8 px-4 overflow-hidden"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="text-5xl font-bold text-red-800 mb-6 text-center lg:text-left border-b-2 border-red-800 pb-4">
						Poutine List
					</h3>
					<div className="overflow-x-auto">
						<PoutineTable
							poutines={otherPoutines}
							onRowClick={handlePoutineClick}
						/>
					</div>
				</motion.div>
			</div>

			<div className="relative p-12 tile-bg">
				<Contact />
			</div>

			<Footer />

			{/* Poutine Modal */}
			<PoutineModal
				poutine={selectedPoutine}
				poutines={sortedPoutines}
				currentIndex={currentPoutineIndex}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onNavigate={handleNavigate}
			/>
		</div>
	);
}
