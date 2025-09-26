'use client';

import { useState } from 'react';
import { Input } from './ui/input';

export function Contact() {
	const [formData, setFormData] = useState({
		address: '',
		restaurantName: '',
		description: '',
		email: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			// Simulate form submission - replace with actual API call
			await new Promise(resolve => setTimeout(resolve, 1000));

			// Reset form on success
			setFormData({
				address: '',
				restaurantName: '',
				description: '',
				email: '',
			});
			setSubmitStatus('success');
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div id="submit-poutine" className="bg-white/50 text-center">
			<h2 className="text-4xl font-bold text-amber-900 mb-2">
				Do you know a great poutine?
			</h2>
			<p className="text-amber-900 mb-6">
				If you give me the address, I'll take a trip to try it out and
				add it to the list.
			</p>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 max-w-md bg-amber-500/25 p-8 rounded-lg mx-auto"
			>
				<Input
					type="text"
					name="restaurantName"
					placeholder="Restaurant name"
					value={formData.restaurantName}
					onChange={handleInputChange}
					required
				/>

				<Input
					type="text"
					name="address"
					placeholder="Address"
					value={formData.address}
					onChange={handleInputChange}
					required
				/>

				<Input
					type="email"
					name="email"
					placeholder="Your email (optional)"
					value={formData.email}
					onChange={handleInputChange}
				/>

				<textarea
					name="description"
					placeholder="Tell me about this poutine (optional)"
					value={formData.description}
					onChange={handleInputChange}
					rows={3}
					className="bg-white text-amber-950 rounded-md p-3 border-0 focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none placeholder:text-amber-900/50"
				/>

				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-amber-900 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
				>
					{isSubmitting ? 'Submitting...' : 'Submit'}
				</button>

				{submitStatus === 'success' && (
					<p className="text-green-700 font-medium">
						Thanks! I'll check out that poutine soon.
					</p>
				)}

				{submitStatus === 'error' && (
					<p className="text-red-700 font-medium">
						Something went wrong. Please try again.
					</p>
				)}
			</form>
		</div>
	);
}
