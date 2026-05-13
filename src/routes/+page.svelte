<script lang="ts">
	import { browser } from '$app/environment'
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import Form from '$lib/components/Form.svelte'
	import Share from '$lib/components/Share.svelte'

	export let btnK: HTMLInputElement | undefined = undefined
	export let input: HTMLInputElement | undefined = undefined

	$: q = browser ? ($page.url.searchParams.get('q') ?? '') : ''
</script>

{#if q}
	<Share {q} />
{:else}
	<Form action="{base}/" bind:btnK bind:input for="input" />
{/if}
