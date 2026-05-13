<script lang="ts">
	import { base } from '$app/paths'

	export let f: string
	export { f as for }
</script>

<div class="flex flex-col items-center gap-3">
	<a href="https://forums.jtechforums.org/" aria-label="JTech Forums">
		<img src="{base}/jtech-logo.png" alt="JTech Forums" class="h-20 w-auto invert" />
	</a>
	<label for={f}>
		<small class="text-sm text-zinc-400">Let me search JTech Forums for you</small>
	</label>
</div>
