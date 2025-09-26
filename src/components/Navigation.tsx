import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
	return (
		<nav className="container mx-auto text-amber-900 p-4">
			<div className=" flex justify-between items-center">
				<Link href="/" className="">
					<Image
						src="/PoutineListLogo.webp"
						alt="Poutine List Logo"
						width={300}
						height={64}
					/>
				</Link>
			</div>
		</nav>
	);
}
