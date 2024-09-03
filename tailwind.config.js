/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"blue-900": "#0B0D17",
				"blue-300": "#D0D6F9",
				"white-100": "#ffffff0d",
				"white-250": "#ffffff40",
				"white-500": "#ffffff80",
				translucent: "#0b0d1726",
			},
			backgroundImage: {
				bgHomeMobile: "url('/background-home-mobile.jpg')",
				bgHomeTablet: "url('/background-home-tablet.jpg')",
				bgHomeDesktop: "url('/background-home-desktop.jpg')",
				bgDestinationMobile: "url('/background-destination-mobile.jpg')",
				bgDestinationTablet: "url('/background-destination-tablet.jpg')",
				bgDestinationDesktop: "url('/background-destination-desktop.jpg')",
				bgCrewMobile: "url('/background-crew-mobile.jpg')",
				bgCrewTablet: "url('/background-crew-tablet.jpg')",
				bgCrewDesktop: "url('/background-crew-desktop.jpg')",
				bgTechnologyMobile: "url('/background-technology-mobile.jpg')",
				bgTechnologyTablet: "url('/background-technology-tablet.jpg')",
				bgTechnologyDesktop: "url('/background-technology-desktop.jpg')",
			},
			boxShadow: {
				custom: "0 0 0 80px rgba(255, 255, 255, 0.1)",
			},
			fontFamily: {
				barlow: ["Barlow", "sans-serif"],
				barlowCondensed: ["Barlow Condensed", "sans-serif"],
				bellefair: ["Bellefair", "serif"],
			},
			animation: {
				"slide-in-left": "slideInLeft 0.5s ease-out",
				"slide-in-right": "slideInRight 0.5s ease-out",
				"slide-in-up": "slideInUp 0.5s ease-out",
				"slide-in-down": "slideInDown 0.5s ease-out",
			},
			keyframes: {
				slideInLeft: {
					"0%": { transform: "translateX(-100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				slideInRight: {
					"0%": { transform: "translateX(100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				slideInUp: {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				slideInDown: {
					"0%": { transform: "translateY(-100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
		},
	},
	plugins: [],
};
