import adapterStatic from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { loadEnv } from 'vite'

/** @type {{ BUILD_BASE: '' | `/${string}` | undefined }} */
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), 'BUILD')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapterStatic({ fallback: '404.html' }),
		paths: { base: env.BUILD_BASE },
	},
}

export default config
