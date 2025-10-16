import '../styles/index.css';

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	viewportFit: 'cover',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="antialiased">
				<div className="min-h-screen flex flex-col">
					<main className="flex-1">
						{children}
					</main>
				</div>
				<script
				type="module"
				src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Flincolns6986back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"
				/>
			</body>
		</html>
	);
}