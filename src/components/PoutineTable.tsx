import { Poutine } from '@/types/poutine';

export function PoutineTable({ poutines }: { poutines: Poutine[] }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Rank</th>
					<th>Name</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody>
				{poutines.map((poutine, index) => (
					<tr key={index}>
						<td>{index + 5}</td>
						<td>{poutine.name}</td>
						<td>{poutine.rating}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
