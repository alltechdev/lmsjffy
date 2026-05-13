<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import '../app.postcss'
</script>

<svelte:head>
	<title>Let me search JTechForums for you</title>
</svelte:head>

<div class="flex min-h-screen min-h-[100dvh] flex-col bg-jtech-secondary text-jtech-primary">
	<Header />

	<main class="container mx-auto flex flex-1 flex-col items-center justify-center py-8">
		<slot />
	</main>

	<Footer />
</div>
