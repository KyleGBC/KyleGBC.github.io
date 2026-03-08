<script lang="ts">
	import Section from "./Section.svelte";
	import SkillCard from "./SkillCard.svelte";

	const skills: Map<string, string[]> = new Map<string, string[]>([
		["Languages", ["Rust", "C++", "C", "Java", "Python", "Typescript", "ARM"]],
		["Frameworks", ["SvelteKit", "React", "Angular", "Axum", "Flask"]],
		["Tools / Technologies", ["git", "Docker", "Google Cloud Platform", "MySQL", "PostgreSQL"]],
		["Engines", ["Unreal Engine", "Unity"]]
	]); 


</script>

<Section title="Skills" id="skills">
	<div class="grid gap-6" id="skills-grid">
		{#each skills as [title, skillList] (title) }
			<SkillCard {title} skills={skillList}/>
		{/each}
	</div>
</Section>


<style>
	#skills-grid {
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
	}
</style>