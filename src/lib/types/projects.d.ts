import type { SvelteComponent } from 'svelte';

export interface ProjectMetadata {
  title: string;
  publishDate: Date;
  slug: string;
  description: string;
  image: ?string;
  imageAlt: ?string;
  tags: string[];
  link: ?string;
  raw: ?string;
}

export interface ProjectModule {
  default: typeof SvelteComponent;
  metadata: ProjectMetadata;
}