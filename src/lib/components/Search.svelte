<script lang="ts">
	import { MagnifyingGlass } from '@natoboram/heroicons.svelte/20/solid'

	export let id: string
	export let input: HTMLInputElement | undefined = undefined
	export let value = ''
</script>

<div
	class="flex w-full max-w-xl flex-row items-center gap-2 rounded-md border border-zinc-700 bg-jtech-secondary px-3 py-2 text-jtech-primary transition focus-within:border-jtech-tertiary focus-within:ring-1 focus-within:ring-jtech-tertiary hover:border-zinc-500"
>
	<div class="text-zinc-400">
		<MagnifyingGlass />
	</div>
	<input
		{id}
		aria-label="Search"
		autocapitalize="none"
		autocomplete="off"
		autocorrect="off"
		bind:this={input}
		bind:value
		class="w-full bg-transparent text-jtech-primary outline-none placeholder:text-zinc-500"
		maxlength="2048"
		name="q"
		placeholder="Search"
		spellcheck="false"
		title="Search"
		type="text"
	/>
</div>
