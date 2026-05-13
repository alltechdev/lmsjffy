<script lang="ts">
	import { base } from '$app/paths'
	import { ClipboardDocument, Check, ArrowRight } from '@natoboram/heroicons.svelte/20/solid'

	export let q: string

	let copied = false
	let timer: ReturnType<typeof setTimeout> | undefined

	$: shareUrl = buildShareUrl(q)

	function buildShareUrl(query: string): string {
		const origin = typeof window === 'undefined' ? '' : window.location.origin
		const path = `${base}/search?q=${encodeURIComponent(query)}`
		return `${origin}${path}`
	}

	async function copy() {
		try {
			await navigator.clipboard.writeText(shareUrl)
		} catch {
			const ta = document.createElement('textarea')
			ta.value = shareUrl
			document.body.appendChild(ta)
			ta.select()
			document.execCommand('copy')
			document.body.removeChild(ta)
		}
		copied = true
		clearTimeout(timer)
		timer = setTimeout(() => (copied = false), 2000)
	}
</script>

<div class="flex w-full flex-col items-center gap-4 px-4">
	<h1 class="text-2xl font-semibold text-jtech-primary">Send this link to your friend</h1>
	<p class="text-sm text-zinc-400">They'll see a helpful tutorial.</p>

	<div
		class="flex w-full max-w-2xl flex-row items-center gap-2 rounded-md border border-zinc-700 bg-jtech-secondary px-3 py-2"
	>
		<input
			readonly
			value={shareUrl}
			class="w-full bg-transparent text-jtech-primary outline-none"
			on:click={e => (e.currentTarget).select()}
		/>
		<button
			type="button"
			on:click={copy}
			class="flex shrink-0 items-center gap-1.5 rounded-md bg-jtech-tertiary px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-jtech-tertiary-hover"
		>
			{#if copied}
				<Check />
				Copied
			{:else}
				<ClipboardDocument />
				Copy
			{/if}
		</button>
	</div>

	<div class="flex flex-row gap-3">
		<a
			href="{base}/search?q={encodeURIComponent(q)}"
			class="flex items-center gap-1.5 rounded-md border border-jtech-tertiary px-4 py-2 text-sm font-semibold text-jtech-tertiary transition hover:bg-jtech-tertiary hover:text-white"
		>
			Preview
			<ArrowRight />
		</a>
		<a
			href="{base}/"
			class="rounded-md border border-zinc-600 px-4 py-2 text-sm font-semibold text-jtech-primary transition hover:border-zinc-400"
		>
			New search
		</a>
	</div>
</div>
