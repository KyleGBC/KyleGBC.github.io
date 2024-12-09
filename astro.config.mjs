// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import emoji from 'remark-emoji'

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [ [ remarkToc, {heading: 'Contents', maxDepth: 4} ], emoji ]
    },
    site: "https://KyleGBC.github.io",
    integrations: [mdx()]
});
