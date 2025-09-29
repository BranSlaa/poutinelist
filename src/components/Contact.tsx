'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { motion } from 'framer-motion';

export function Contact() {
	const [formData, setFormData] = useState({
		address: '',
		restaurantName: '',
		description: '',
		handle: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');
	const [submitMessage, setSubmitMessage] = useState('');

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
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (!response.ok || !result.success) {
				throw new Error(result.error || 'Failed to submit form');
			}

			setSubmitMessage(result.message);

			// Reset form on success
			setFormData({
				address: '',
				restaurantName: '',
				description: '',
				handle: '',
			});
			setSubmitStatus('success');
		} catch (error) {
			console.error('Form submission error:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<motion.div
			id="submit-poutine"
			className="text-center pt-16"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative z-10 bg-white w-fit mx-auto rounded-lg p-8 shadow-lg">
				<h2 className="text-4xl font-bold text-red-800 mb-2">
					Do you know of a great poutine?
				</h2>
				<p className="text-red-800 mb-6 max-w-md mx-auto">
					If you give me the address, I&apos;ll take a trip to try it
					out and add it to the list.
				</p>

				<div className="max-w-md bg-white mx-auto rounded-lg relative">
					<span className="text-4xl absolute top-0 left-0 z-10 -rotate-45 transform -translate-x-1/2 -translate-y-1/2">
						🍟
					</span>

					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-4 bg-amber-500/25 p-8"
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
							type="text"
							name="handle"
							placeholder="Your name or social media handle (optional)"
							value={formData.handle}
							onChange={handleInputChange}
						/>

						<textarea
							name="description"
							placeholder="Tell me about this poutine (optional)"
							value={formData.description}
							onChange={handleInputChange}
							rows={3}
							className="bg-white text-amber-950 rounded-md p-3 border-0 focus:outline-none focus:ring-2 focus:ring-amber-900 resize-none placeholder:text-amber-950/50 font-bold placeholder:font-normal"
						/>

						<button
							type="submit"
							disabled={isSubmitting}
							className="bg-red-800 text-white py-3 px-6 rounded-md font-bold hover:bg-amber-900 transition-colors"
						>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>

						{submitStatus === 'error' && (
							<p className="text-red-700 font-medium">
								Something went wrong. Please try again.
							</p>
						)}
						{submitStatus === 'success' && (
							<p className="text-green-700 font-bold">
								{submitMessage}
							</p>
						)}
					</form>
				</div>
			</div>
		</motion.div>
	);
}
