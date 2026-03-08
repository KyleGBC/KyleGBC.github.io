<script lang="ts">
	import Separator from "./ui/separator/separator.svelte";

    const { title, skills }: { title: string, skills: string[] } = $props();
</script>


<div class="border rounded-md p-4 bg-card font-mono">
    <div class="flex flex-row gap-2 mb-5 text-sm">
        <h3 class="font-logo">{title}</h3>
        <Separator orientation="horizontal" class="flex-1 self-center"/>
    </div>
    <div class="flex flex-wrap gap-2">
        {#each skills as skill (skill) }
            <span class="border text-md rounded-md bg-muted px-2 py-1 wrap-break-word">{skill}</span>
        {/each}
    </div>
</div>