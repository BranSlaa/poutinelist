export function Footer() {
	return (
		<footer className="bg-amber-900 text-white py-8 px-8 mt-16">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">
							<span className="text-yellow-400">Poutine</span>
							<span className="ml-2">List</span>
						</h3>
						<p className="text-amber-200">
							Your ultimate guide to discovering, ranking, and
							sharing the best poutines across Canada.
						</p>
					</div>
				</div>
				<div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
					<p>&copy; 2024 PoutineList. Made with ❤️ in Canada.</p>
				</div>
			</div>
		</footer>
	);
}
