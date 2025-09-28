import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export function Navigation() {
	return (
		<nav className="container mx-auto text-amber-900 p-4">
			<div className=" flex justify-between items-center">
				<Link href="/" className="" aria-label="Poutine List">
					<Image
						src="/PoutineListLogo.webp"
						alt="Poutine List Logo"
						width={300}
						height={64}
						className="max-w-1/2"
						title="Poutine List"
					/>
				</Link>
				<Link
					href="https://www.instagram.com/PoutineList/"
					aria-label="Instagram"
					target="_blank"
					title="Instagram"
				>
					<Instagram className="w-6 h-6" />
				</Link>
			</div>
		</nav>
	);
}
