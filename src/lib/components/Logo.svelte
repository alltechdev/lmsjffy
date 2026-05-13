<script lang="ts">
	import { base } from '$app/paths'

	export let f: string
	export { f as for }
</script>

<div class="flex flex-col items-center gap-3">
	<a href="https://forums.jtechforums.org/" aria-label="JTechForums" class="flex flex-col items-center gap-3">
		<img src="{base}/jtech-logo-small.png" alt="" class="h-24 w-24" />
		<img src="{base}/jtech-logo.png" alt="JTechForums" class="h-14 w-auto invert" />
	</a>
	<label for={f}>
		<small class="text-sm text-zinc-400">Let me search JTechForums for you</small>
	</label>
</div>
