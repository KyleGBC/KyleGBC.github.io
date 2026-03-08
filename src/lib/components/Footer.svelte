<script>
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {href: "https://github.com/KyleGBC", label: "GitHub"},
        {href: "https://kylegbc.itch.io/", label: "itch.io"},
        {href: "https://www.linkedin.com/in/kyleroleson/", label:"LinkedIn"}
    ];
</script>

<footer class="flex flex-col sm:flex-row gap-3 justify-between h-8 px-4 font-mono text-sm text-secondary">
	<div class="group flex flex-row gap-3 text-muted-foreground">
		<p>
			Developed with ❤️ using <a class="hover:text-accent-foreground" href="https://svelte.dev/">Svelte</a>
		</p>
		<p>&copy; {currentYear} Kyle Roleson</p>
	</div>
	<p class="flex gap-3 not-sm:justify-center">
        {#each socialLinks as socialLink (socialLink.label)}
            <a class="text-muted-foreground hover:text-accent-foreground" href={socialLink.href}>{socialLink.label}</a>
        {/each}
	</p>
</footer>