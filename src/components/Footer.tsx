import Link from 'next/link';

export function Footer() {
	return (
		<footer className="plaid border-t border-amber-700 bg-amber-900 text-white py-8 px-8">
			<div className="text-center text-amber-200">
				<p>
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
