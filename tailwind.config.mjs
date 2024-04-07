/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#5D8AA6',
					200: '#63AEBF',
					300:'#657BA6',
					400:'#592256',
					500:'#F2DEC4',
					'grisClaro': '#ecedec',
					'text': '#444343',
					'resaltado': '#FFFACD',
					'fondo': '#FFD1DC50',
					'error': "#FF7F50",
					'bacSidebar':'#1B2728'
				}
			},
			fontFamily: {
				monserrat: ['Montserrat']
			},
		},
	},
	plugins: [],
}
