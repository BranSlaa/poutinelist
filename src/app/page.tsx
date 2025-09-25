import Image from 'next/image';
import { PoutineCard } from '@/components/PoutineCard';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { topPoutines, otherPoutines } from '@/data/poutines';
import { PoutineTable } from '@/components/PoutineTable';

export default function Home() {
	return (
		<div className="min-h-screen bg-amber-50">
			<Navigation />
			<div className="relative overflow-hidden">
				<div className="container max-w-4xl mx-auto relative z-20 grid grid-cols-1 md:grid-cols-[1fr_auto] px-4">
					{/* Header */}
					<div className="mb-12">
						<h1 className="text-6xl font-bold mb-4 text-amber-950">
							Poutine List
						</h1>
						<h2 className="text-4xl font-bold text-amber-900 mb-4">
							A ranked list of the best poutines in Canada!
						</h2>
						<p className="text-xl text-amber-900 mb-8">
							Your ultimate guide to the world of cheese, fries,
							and gravy.
						</p>
						<button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg">
							Find Your Next Poutine
						</button>
						<div className="flex-1 flex  mt-12">
							<Image
								src="/poutine.webp"
								alt="Poutine bowl"
								width={646}
								height={710}
								className="max-w-[300px]"
							/>
						</div>
					</div>

					{/* Main content with poutine bowl and rankings */}
					<div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
						<h3 className="text-2xl font-bold text-amber-800 mb-6 text-center lg:text-left">
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
								className="absolute inset-0 w-full h-full object-contain z-10"
							/>
							{/* Poutine rankings positioned within frame */}
							<div className="relative z-10 pt-[10px] pb-[12px] pl-[64px] pr-[11px]">
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
				</div>
				<div className="container mx-auto flex flex-col lg:flex-row items-center ">
					<h3 className="text-2xl font-bold text-amber-800 mb-6 text-center lg:text-left">
						Other Poutines
					</h3>
					<PoutineTable poutines={otherPoutines} />
				</div>
			</div>

			<Footer />
		</div>
	);
}
