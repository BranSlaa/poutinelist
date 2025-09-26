'use client';

import Image from 'next/image';
import { PoutineCard } from '@/components/PoutineCard';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { topPoutines, otherPoutines } from '@/data/poutines';
import { PoutineTable } from '@/components/PoutineTable';
import Link from 'next/link';
import { Contact } from '@/components/Contact';
import { motion } from 'framer-motion';
export default function Home() {
	return (
		<div className="min-h-screen bg-amber-50 min-w-[512px]">
			<Navigation />
			<div className="relative">
				<motion.div
					className="container max-w-5xl mx-auto relative z-20 grid grid-cols-1 md:grid-cols-[1fr_auto] px-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.5 }}
				>
					{/* Header */}
					<div className="my-8">
						<h1 className="sr-only">Poutine List</h1>
						<h2 className="text-4xl font-bold text-amber-900 mb-4">
							A ranked list of the best poutines in Canada... that
							I have tried!
						</h2>
						<p className="text-xl text-amber-900 mb-8">
							This list is not exhaustive, but it is a list of
							poutines that I have tried and hopefully enjoyed. Do
							you have a poutine that you think should be on this
							list?{' '}
							<Link
								href="#submit-poutine"
								className="text-orange-700 font-bold underline"
							>
								Submit it here
							</Link>
							.
						</p>
						<div className="flex-1 flex  mt-12">
							<Image
								src="/poutine.webp"
								alt="Poutine bowl"
								width={646}
								height={710}
								className="max-w-[300px] mx-auto"
							/>
						</div>
					</div>

					{/* Main content with poutine bowl and rankings */}
					<div className="flex flex-col items-center gap-4 max-w-7xl mx-auto">
						<h3 className="text-2xl font-bold text-amber-800 text-center lg:text-left">
							Top Poutines
						</h3>
						{/* Gravy Frame Container */}
						<div className="relative w-full max-w-md mx-auto">
							{/* Responsive SVG Frame */}
							<Image
								src="/4-gravy-frame.svg"
								alt="Gravy Frame"
								width={409}
								height={509}
								className="absolute inset-0 w-full h-full object-contain z-20"
							/>
							{/* Poutine rankings positioned within frame */}
							<div className="relative z-10 pt-[10px] pb-[23px] pl-[75px] pr-[21px]">
								{topPoutines.map((poutine, index) => (
									<PoutineCard
										key={index}
										poutine={poutine}
										rank={index + 1}
									/>
								))}
							</div>
						</div>
					</div>
				</motion.div>
				<div className="container mx-auto flex flex-col items-center mt-8 px-4">
					<h3 className="text-2xl font-bold text-amber-800 mb-6 text-center lg:text-left">
						Poutines List
					</h3>
					<PoutineTable poutines={otherPoutines} />
				</div>
			</div>

			<div className="p-12">
				<Contact />
			</div>

			<Footer />
		</div>
	);
}
