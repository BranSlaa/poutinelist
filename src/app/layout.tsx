import type { Metadata } from 'next';
import { Titan_One, Montserrat } from 'next/font/google';
import './globals.css';

const titanOne = Titan_One({
	variable: '--font-titan-one',
	weight: '400',
	subsets: ['latin'],
});

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Poutine List',
	description:
		'A ranked list of the best poutines in Canada... that I have tried!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${titanOne.variable} ${montserrat.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
