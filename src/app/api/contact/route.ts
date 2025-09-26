import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		const { restaurantName, address, handle, description } = data;

		// Validate required fields
		if (!restaurantName || !address) {
			return NextResponse.json(
				{ success: false, error: 'Missing required fields' },
				{ status: 400 },
			);
		}

		// Only access the env var here, at runtime
		const apiKey = process.env.RESEND_API_KEY;
		if (!apiKey) {
			return NextResponse.json(
				{ success: false, error: 'Missing RESEND_API_KEY' },
				{ status: 500 },
			);
		}

		const resend = new Resend(apiKey);

		await resend.emails.send({
			from: 'Poutine List Contact Form <iam@thethird.dev>',
			to: 'iam@thethird.dev',
			subject: `New Poutine Submission for ${restaurantName} via Poutine List`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #059669; margin-bottom: 20px;">New Poutine Submission</h2>
					<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
						<p style="margin: 10px 0;"><strong>Restaurant Name:</strong> ${restaurantName}</p>
						<p style="margin: 10px 0;"><strong>Address:</strong> ${address}</p>
						<p style="margin: 10px 0;"><strong>Submitted by:</strong> ${
							handle || 'Anonymous'
						}</p>
						<p style="margin: 10px 0;"><strong>Description:</strong></p>
						<div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #059669;">
							${description ? description.replace(/\n/g, '<br>') : 'No description provided'}
						</div>
					</div>
					<p style="color: #666; font-size: 14px;">
						This message was sent from the Poutine List submission form.
					</p>
				</div>
			`,
		});

		console.log('Email sent successfully');

		return NextResponse.json(
			{ success: true, message: 'Email sent successfully' },
			{ status: 200 },
		);
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{
				success: false,
				error:
					error instanceof Error
						? error.message
						: 'An unexpected error occurred',
			},
			{ status: 500 },
		);
	}
}
