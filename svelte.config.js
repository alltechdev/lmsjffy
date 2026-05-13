import adapterStatic from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapterStatic({ fallback: '404.html' }),
		paths: { base: process.env.BUILD_BASE ?? '' },
	},
}

export default config
