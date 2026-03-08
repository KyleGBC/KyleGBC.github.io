<script lang="ts">
	import type { ProjectModule } from '$lib/types/projects.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';

    const { params, data } = $props();
    const project: ProjectModule = $derived(data.projectModule);


</script>

<div>
    <div class="max-w-4xl m-auto">
        <title>{project.metadata.title}</title>
        <div class="relative">
            <div class="w-full h-full bg-background absolute"></div>
            <img class="mask-b-from-20% rounded-sm mask-b-to-80% aspect-video w-full z-10" src={project.metadata.image} alt={project.metadata.imageAlt}/>
        </div>
        <h1 class="text-5xl font-logo mb-4">{project.metadata.title}</h1>
        <p class="text-md font-mono text-zinc-600 mb-10">{project.metadata.description}</p>
        <Separator orientation="horizontal" class="self-end flex-1"/>
    </div>
    <div class="flex flex-row mt-10 gap-4">
        <div class="grow basis-0"></div>
        <!-- grow-100000: the other two divs should only grow to make space if the article is already at its max-width -->
        <article class="prose prose-gray dark:prose-invert max-w-4xl grow-100000 basis-1">
            <project.default></project.default> 
        </article>
        <aside class="grow basis-0 relative">
            <div class="sticky top-16 pt-4">
                <h1 class="font-logo">Table of Contents</h1>
                <div id="toc" class="prose prose-gray dark:prose-invert">
                    {@html data.tocString}
                </div>
            </div>  
            
        </aside>
    </div>
</div>

<style>
    #toc { 
        font-family: var(--font-mono);
        font-size: var(--text-xs);
    }
</style>