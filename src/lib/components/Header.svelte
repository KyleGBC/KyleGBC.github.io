<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';

	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";

	const navLinks = [
		{href: "/#about", label: "About"},
		{href: "/#projects", label: "Projects"},
		{href: "/#skills", label: "Skills"},
		{href: "/#contact-me", label: "Contact"}
	];
</script>

<header class="fixed w-screen h-16 px-8 border-b bg-background z-100">
	<nav class="flex flex-row justify-between items-center h-full">
		<a class="home-button font-logo italic text-2xl flex-1 shrink-0 whitespace-nowrap mr-4" href="/">Kyle Roleson</a>
		<ul class="nav-links hidden sm:flex flex-row gap-8 sm:visible">
			{#each navLinks as navLink (navLink.label) }
				<li><a class="text-muted-foreground hover:text-accent-foreground font-mono" href={navLink.href}>{navLink.label}</a></li>
			{/each}
		</ul>
		<div class="flex flex-1 justify-end">
			<Button onclick={() => toggleMode()} variant="outline" size="icon">
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>
</header>