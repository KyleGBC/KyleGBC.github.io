<script lang="ts">
	import { getProjects } from "$lib/utils";
	import Section from "./Section.svelte";
	import type { ProjectModule } from "$lib/types/projects";
	import ProjectCard from "./ProjectCard.svelte";
	const { projectsRoute, projects }: { projectsRoute: string, projects: Map<string, ProjectModule> }  = $props();
</script>

<Section title="Projects" id="projects">
	<div class="grid project-grid gap-6">
		{#each projects as [slug, project] (slug)}
			<ProjectCard {projectsRoute} {project}></ProjectCard>
		{/each}
	</div>
</Section>

<style>
	.project-grid {
		grid-template-columns: repeat(auto-fill,minmax(min(100%,320px),1fr));
	}
</style>