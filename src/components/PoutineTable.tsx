import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';

export function PoutineTable({ poutines }: { poutines: Poutine[] }) {
	return (
		<table className="table-auto w-full bg-white rounded-lg p-4 text-amber-950 shadow-lg overflow-x-auto max-w-screen border-2 border-amber-900">
			<thead className="border-b border-amber-900">
				<tr className="text-left">
					<th className="py-2 px-4 text-center">Rank</th>
					<th className="py-2 px-4">Name</th>
					<th className="py-2 px-4">Comments</th>
					<th className="py-2 px-4">Location</th>
					<th className="py-2 px-4">Rating</th>
				</tr>
			</thead>
			<tbody>
				{poutines.map((poutine, index) => (
					<tr key={index}>
						<td className="py-2 px-4 text-center">
							<span className="rounded-full bg-amber-900 text-white px-2 py-1">
								{index + 5}
							</span>
						</td>
						<td className="py-2 px-4">{poutine.name}</td>
						<td className="py-2 px-4">{poutine.description}</td>
						<td className="py-2 px-4">{poutine.location}</td>
						<td className="py-2 px-4">
							<StarRating
								rating={poutine.rating}
								className="flex-col"
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
