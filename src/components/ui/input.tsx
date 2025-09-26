export function Input({
	type,
	name,
	placeholder,
	value,
	onChange,
	required = false,
}: {
	type: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}) {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={`bg-white text-amber-950 rounded-md p-3 border-0 focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-amber-900
				${required ? 'placeholder:text-amber-900' : 'placeholder:text-amber-900/50'}`}
			required={required}
		/>
	);
}
