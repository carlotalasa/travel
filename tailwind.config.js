/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/css/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
		fontFamily: {
			Montserrat: ['"Montserrat"', "sans-serif"],
		},
		colors: {
			primary: "#CC2D4A",
			secondary: "#8FA206",
			tertiary: "#61AEC9",
     		white: "#FFFF",
			gray: "#9CA3AF",
			grayl: "#F9FAFB",
			black: "#000",
			gray9: "#1a202c",
			gray8: "#2D3748",
			gray7: "#4A5568",
			gray3: "#CBD5E0",
		},
		extend: {
			backgroundImage: {
			sanFrancisco: "url('../img/sanFrancisco.jpg')",
			sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
			yosemite: "url('../img/yosemite.jpg')",
			LA: "url('../img/LA.jpg')",
			seattle: "url('../img/seattle.jpg')",
			new_york: "url('../img/new_york.jpg')",
			norway: "url('../img/norway.jpg')",
			sydney: "url('../img/sydney.jpg')",
			miami: "url('../img/miami.jpg')",
			switzerland: "url('../img/switzerland.jpg')",
			bali: "url('../img/bali.jpg')",
			norway: "url('../img/norway.jpg')",
			chicago: "url('../img/chicago.jpg')",
			europe: "url('../img/europe.jpg')",
			iceland: "url('../img/iceland.jpg')",
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
