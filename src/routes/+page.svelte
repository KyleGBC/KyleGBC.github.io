<script lang="ts">
	import About from "$lib/components/About.svelte";
	import ContactMe from "$lib/components/ContactMe.svelte";
	import ProjectGrid from "$lib/components/ProjectGrid.svelte";
	import Skills from "$lib/components/Skills.svelte";

	const { data } = $props();
</script>

<svelte:head>
	<title>Kyle Roleson's Portfolio</title>
	<meta name="description" content="Personal portfolio website" />
</svelte:head>



<div>
	<About/>
	<ProjectGrid projectsRoute = "/projects" projects={data.projects}/>
	<Skills/>
	<ContactMe/>
</div>
