<script>
    import { Separator } from "$lib/components/ui/separator";
    const { title = "", id, children = null, titleBar = true} = $props();
</script>

<section {id} style="padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)">
    <div class="flex flex-row gap-4 mb-12 {titleBar ? "visible" : "hidden"}">
        <h2 class="font-logo text-3xl grow-0">{title}</h2>
        <Separator orientation="horizontal" class="self-end flex-1"/>
    </div>
    {#if children}
        {@render children?.()}
    {/if}
</section>