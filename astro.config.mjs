// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [ [ remarkToc, {heading: 'Contents', maxDepth: 4} ] ]
    },
    site: "https://KyleGBC.github.io",
    integrations: [mdx()]
});
