<script>
	import Section from "./Section.svelte";
</script>

<Section id="about" titleBar={false}>
    <div class="max-w-2xl">
        <h1 id="name" class="font-logo mb-5">Kyle Roleson</h1>
        <p class="font-mono text-muted-foreground mb-2"><strong>Game & Software Engineer</strong> with hands-on experience in Unreal Engine and Unity, and professional experience as a full-stack developer building and maintaining production web applications. I focus on building efficient, scalable systems with an emphasis on optimization and modularity.</p>
        <p class="font-mono text-muted-foreground">Currently pursuing a graduate degree in high-performance computer architecture at the Georgia Insitute of Technology.</p>
        <a class="font-mono bg-card rounded-sm border-2 border-border hover:border-primary mt-4 inline-block py-2 px-3" href="/kyle_roleson_resume.pdf" download>
            <p>Download Resume</p>
            <p class="font-mono text-muted-foreground text-xs">Updated Mar. 2026</p>
        </a>
    </div>
</Section>

<style>
    #name {
        font-size: clamp(2.4rem, 5vw, 4rem);
    }
</style>

