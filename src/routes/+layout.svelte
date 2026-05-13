<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import '../app.postcss'
</script>

<svelte:head>
	<title>Let me search JTechForums for you</title>
</svelte:head>

<div class="flex h-screen flex-col bg-jtech-secondary text-jtech-primary">
	<Header />

	<div class="grow-[1]" />

	<main class="container mx-auto">
		<slot />
	</main>

	<div class="grow-[2]" />

	<Footer />
</div>
