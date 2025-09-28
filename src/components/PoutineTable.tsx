import { Poutine } from '@/types/poutine';
import { StarRating } from '@/components/ui/stars';

export function PoutineTable({
	poutines,
	onRowClick,
}: {
	poutines: Poutine[];
	onRowClick?: (poutine: Poutine) => void;
}) {
	return (
		<table className="table-auto w-full bg-white rounded-lg p-4 text-amber-950 overflow-x-auto max-w-screen">
			<thead className="border-b border-red-800">
				<tr className="text-left">
					<th className="py-2 pl-4 pr-2 text-center">Rank</th>
					<th className="py-2 px-2">Name</th>
					<th className="py-2 px-2">Comments</th>
					<th className="py-2 px-2">Location</th>
					<th className="py-2 pr-4 pl-2 text-center">Rating</th>
				</tr>
			</thead>
			<tbody>
				{poutines.map((poutine, index) => (
					<tr
						key={index}
						className="bg-white even:bg-stone-100 hover:bg-stone-200 cursor-pointer transition-colors"
						onClick={() => onRowClick?.(poutine)}
					>
						<td className="py-2 pl-4 pr-2 text-center">
							<span className="rounded-full bg-amber-500/20 text-red-800 px-2 py-1 font-bold text-xl">
								{index + 6}
							</span>
						</td>
						<td className="py-2 px-2 min-w-48 font-medium text-black">
							{poutine.name}
						</td>
						<td className="py-2 px-2 min-w-128 text-black/80">
							{poutine.description}
						</td>
						<td className="py-2 px-2 min-w-64 text-black/80">
							{poutine.location}
						</td>
						<td className="py-2 pr-4 pl-2">
							<StarRating
								poutine={poutine}
								className="flex-col"
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
