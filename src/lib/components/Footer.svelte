<script lang="ts">
	import { CodeBracket, GlobeAlt } from '@natoboram/heroicons.svelte/20/solid'
</script>

<footer
	class="flex flex-row flex-wrap items-center justify-between gap-4 bg-jtech-header px-4 py-3 text-zinc-400"
>
	<span class="text-sm"
		>The Ultimate Tech and Filtering Forum For the Jewish Tech Community</span
	>
	<div class="flex flex-row items-center gap-4">
		<a
			class="flex flex-row items-center gap-1.5 text-sm hover:text-jtech-tertiary"
			href="https://forums.jtechforums.org/"
		>
			<GlobeAlt />
			forums.jtechforums.org
		</a>
		<a
			class="flex flex-row items-center gap-1.5 text-sm hover:text-jtech-tertiary"
			href="https://github.com/alltechdev/lmsjffy"
		>
			<CodeBracket />
			Source
		</a>
	</div>
</footer>
