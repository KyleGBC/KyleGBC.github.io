import { mdsvex } from 'mdsvex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import emoji from 'remark-emoji';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter(), prerender: { handleMissingId: "warn"} },
	preprocess: [mdsvex({
		remarkPlugins: [
			[ remarkToc, { heading: 'Contents', maxDepth: 6}],
			emoji
		],
		rehypePlugins: [
			rehypeSlug
		],

	})],
	extensions: ['.svelte', '.svx']
};

export default config;
