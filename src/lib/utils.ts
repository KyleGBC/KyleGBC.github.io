import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProjectModule } from "./types/projects";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const getProjectRecord = () => {
	const record = import.meta.glob<ProjectModule>('$lib/projects/**/*.svx');
	const raws = import.meta.glob('$lib/projects/**/*.svx', { as: 'raw' });
	return { record, raws } ;
}

export const getProjects = async () => { 
	const { record, raws } = await getProjectRecord();
	const projectsMap: Map<string, ProjectModule> = new Map();

	for (const [key, value] of Object.entries(record)) {
		projectsMap.set(key, await value());
	}


	for (const [key, value] of Object.entries(raws)) {
		const raw = await value();
		const entry = projectsMap.get(key);
		if (!entry) { 
			console.log("Error loading markdown raw:", key);
		} else {
			entry.metadata.raw = raw;
		}
	}

	return projectsMap;
}