/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// prettier-ignore
			colors: {
				"slate": '#F7F7F7',
				"lightCharcoal": '#E3E2E0',
				"aqua": '#D3E5EF',
				"lightPink": '#F4E0E9',
				"lightGreen": '#DBEDDB',
        "charcoal": '#9A9A97'
			},
		},
	},
	plugins: [],
}
