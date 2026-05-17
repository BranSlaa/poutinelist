"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Poutine } from "@/types/poutine";

const PoutineMap = dynamic(() => import("./PoutineMap"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-full flex items-center justify-center text-amber-900">
			Loading map…
		</div>
	),
});

interface PoutineMapSectionProps {
	poutines: Poutine[];
}

export function PoutineMapSection({ poutines }: PoutineMapSectionProps) {
	return (
		<motion.section
			className="relative bg-amber-50 border-t-4 border-amber-900 py-16 px-4"
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-7xl mx-auto">
				<h3 className="text-5xl font-bold text-red-800 mb-2 text-center lg:text-left border-b-2 border-red-800 pb-4">
					Poutines on the Map
				</h3>
				<p className="text-lg text-amber-900 mb-6 text-center lg:text-left">
					Every reviewed poutine, pinned. Click a marker to see the
					details and jump to its Google Maps listing.
				</p>
				<div className="w-full h-[500px] rounded-xl overflow-hidden border-2 border-amber-900 shadow-lg">
					<PoutineMap poutines={poutines} />
				</div>
			</div>
		</motion.section>
	);
}
