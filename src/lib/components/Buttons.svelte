<script lang="ts">
	export let btnK: HTMLInputElement | undefined = undefined
</script>

<div class="flex flex-row gap-3 align-middle">
	<input
		bind:this={btnK}
		aria-label="Search JTechForums"
		class="cursor-pointer rounded-md border border-transparent bg-jtech-tertiary px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-jtech-tertiary-hover focus:outline-none focus:ring-2 focus:ring-jtech-tertiary focus:ring-offset-2 focus:ring-offset-jtech-secondary"
		name="btnK"
		tabindex="0"
		type="submit"
		value="Search"
	/>
</div>
