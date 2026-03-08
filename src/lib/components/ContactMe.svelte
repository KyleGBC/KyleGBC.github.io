<script lang="ts">
	import EmailForm from "./EmailForm.svelte";
	import Section from "./Section.svelte";

    import { GithubIcon, LinkedinIcon, StoreIcon } from '@lucide/svelte'

    const socialLinks = [
        {href: "https://www.linkedin.com/in/kyleroleson/", icon: LinkedinIcon},
        {href: "https://github.com/KyleGBC", icon: GithubIcon},
        {href: "https://kylegbc.itch.io/", icon: StoreIcon},
    ]


</script>


<Section title="Contact Me" id="contact-me">
    <div class="flex flex-col md:flex-row gap-8">
        <div class="grow basis-1">
            <h3 class="font-logo text-2xl pb-4 w-full">Get in touch</h3>
            <p class="font-mono max-w-sm text-xs text-muted-foreground mb-6">You can find me at the links below, or use this form to send me an email.</p>
            <ul>
                {#each socialLinks as socialLink (socialLink.href)}
                <li>
                    {#if socialLink.icon}
                        <a href={socialLink.href} class="inline-block m-2">
                            <div class="flex flex-row gap-4 text-xs font-mono items-center">
                                <socialLink.icon/>
                                <p class="hover:text-orange-400 transition-colors">{socialLink.href}</p>
                            </div>
                        </a>  
                    {/if}
                </li>
                {/each}
            </ul>
        </div>
        <div class="grow basis-1 bg-card p-4 rounded-md">
            <EmailForm/>
        </div>
    </div>    
</Section>