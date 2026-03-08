import { error } from '@sveltejs/kit'
import type { EntryGenerator, PageLoad } from './$types'
import { getProjectRecord, getProjects } from '$lib/utils';
import remarkParse from "remark-parse";
import remarkExtractToc from 'remark-extract-toc';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { toc } from 'mdast-util-toc';
import { unified } from 'unified';
import remarkStringify from 'remark-stringify';

export const load = (async ({ params }) => {
	const projectModules = await getProjects();
	const filename = `/src/lib/projects/${params.slug}.svx`
	const projectModule = projectModules.get(filename);

	if (!projectModule) {
		throw error(404)
	}

	// https://github.com/syntax-tree/mdast-util-toc/issues/74
	const tocProcessor = unified().use(remarkParse).use(remarkStringify);
	const mdast = tocProcessor.parse(projectModule.metadata.raw);
	const tocMdast = toc(mdast, {maxDepth: 3}).map;
	const tocMdString = tocProcessor.stringify({ type: 'root', children: [tocMdast] });
	const tocString = (await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(tocMdString)).value;

	return { projectModule, tocString };
}) satisfies PageLoad

// https://github.com/pngwn/MDsveX/issues/285
export const entries: EntryGenerator = async () => {
	const projectRecord = await getProjectRecord();
	
	const entries: { slug: string }[] = []

	for (const filename in projectRecord.record) {
		const projectMdsvex = await projectRecord.record[filename]()
		entries.push({ slug: projectMdsvex.metadata.slug })
	}

	return entries
}

export const prerender = true