/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"darkish": "#090909",
				"grayish": "#ada9a9",
				"dblue": "#6b7280",
				"ldark": "#131313"
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
