import type { Metadata } from 'next';
import { Titan_One, Quicksand } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

const titanOne = Titan_One({
	variable: '--font-titan-one',
	weight: '400',
	subsets: ['latin'],
});

const quicksand = Quicksand({
	variable: '--font-quicksand',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Poutine List - The Definitive Poutine Ranking',
	description: "The Definitive Poutine Ranking: A Quest for Canada's Best.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${titanOne.variable} ${quicksand.variable} font-sans antialiased`}
			>
				{children}
				<GoogleTagManager gtmId="GTM-TSD5WPR4" />
			</body>
		</html>
	);
}
