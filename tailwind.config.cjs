const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{cjs,css,html,js,postcss,svelte,ts}',
		'./node_modules/@natoboram/heroicons.svelte/**/*.{cjs,css,html,js,postcss,svelte,ts}',
	],
	darkMode: 'class',
	plugins: [],
	theme: {
		extend: {
			colors: {
				jtech: {
					primary: '#eeeeee',
					secondary: '#242424',
					tertiary: '#0f82af',
					quaternary: '#c14924',
					header: '#111111',
					highlight: '#ffffff',
					danger: '#e45735',
					success: '#1ca551',
					'tertiary-hover': '#1296c8',
					'tertiary-low': '#1c3a4a',
				},
			},
			fontFamily: {
				sans: ['Arimo', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
