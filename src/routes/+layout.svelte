<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { GridPattern } from "$lib/components/magic/grid-pattern";
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<div class="app relative flex flex-col min-h-screen">
	<GridPattern class="dark:opacity-10 opacity-10"></GridPattern>
	<ModeWatcher />
	<Header/>
	<main class="flex-1 flex-col p-4 w-full mt-16 mb-32">
		<div>
			{@render children()}
		</div>
	</main>
	<Footer />
</div>