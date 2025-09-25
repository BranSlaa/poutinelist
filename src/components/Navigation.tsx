import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
	return (
		<nav className="text-amber-900 p-4">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<Link href="/" className="">
					<Image
						src="/PoutineListLogo.webp"
						alt="Poutine List Logo"
						width={447}
						height={96}
					/>
				</Link>
			</div>
		</nav>
	);
}
