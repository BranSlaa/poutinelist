import Link from 'next/link';

export function Footer() {
	return (
		<footer className="plaid border-t-2 border-black bg-amber-900 text-white py-8 px-8">
			<div className="text-center text-amber-100">
				<p className="font-medium mb-2">
					&copy; {new Date().getFullYear()} PoutineList. Made with ❤️
					in Canada.
				</p>
				<p>
					Created by{' '}
					<Link
						href="https://thethird.dev"
						className="font-bold hover:underline"
					>
						the Third Developer
					</Link>
				</p>
			</div>
		</footer>
	);
}
