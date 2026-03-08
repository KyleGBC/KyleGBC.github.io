<script lang="ts">
	import type { ProjectModule } from "$lib/types/projects";

    const { projectsRoute, project }: { projectsRoute: string, project: ProjectModule } = $props();
    const route = $derived(projectsRoute + "/" + project.metadata.slug)
</script>

<a href={route} class="p-0 rounded-md border-2 border-border hover:border-ring overflow-hidden flex-col font-mono bg-background transition-colors">
    <div class="relative w-full grow-0">
        {#if project.metadata.image}
            <img src="{project.metadata.image}" alt={project.metadata.imageAlt!} class="aspect-video w-full"/>
        {:else}
            <p>placeholder text</p>
        {/if}   
        <span class="p-1 border text-orange-400 text-xs rounded-sm bg-zinc-900 absolute top-2.5 left-2.5 hidden">{project.metadata.category!}</span>
    </div>
    <div class="p-6 bg-card w-full h-full grow">
        <h3 class="font-logo mb-2">{project.metadata.title}</h3>
        <p class="text-muted-foreground text-sm pb-4">{project.metadata.description}</p>
        <div class="flex flex-wrap flex-row gap-4 text-xs"> 
            {#each project.metadata.tags as tag (tag)} 
                <span class="px-2 py-1 border text-muted-foreground text-xs rounded-sm bg-muted">{tag}</span>
            {/each}
        </div>
    </div>
</a>