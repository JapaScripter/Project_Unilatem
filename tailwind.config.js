// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			colors: {
				'white-white': '#F0F0F0',
				'unilatem': '#6705AD'
			},
		},
	},
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
}
