import { getCollection, type CollectionEntry } from 'astro:content';
import { splitId, type Lang } from '../i18n';

export type Project = CollectionEntry<'projects'>;
export type Writing = CollectionEntry<'writing'>;

const live = <T extends { data: { draft: boolean } }>(e: T) => !e.data.draft;

export const slugOf = (entry: { id: string }) => splitId(entry.id).slug;
export const langOf = (entry: { id: string }) => splitId(entry.id).lang;

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', live);
  return all.filter((p) => langOf(p) === lang).sort((a, b) => a.data.order - b.data.order);
}

export async function getWriting(lang: Lang): Promise<Writing[]> {
  const all = await getCollection('writing', live);
  return all.filter((p) => langOf(p) === lang).sort((a, b) => +b.data.date - +a.data.date);
}

/**
 * Everything a reader of `lang` can open: entries in their language, plus
 * entries that only exist in the other one (flagged as foreign).
 */
export async function getWritingWithFallback(lang: Lang): Promise<{ entry: Writing; foreign: boolean }[]> {
  const all = (await getCollection('writing', live)).sort((a, b) => +b.data.date - +a.data.date);
  const own = new Set(all.filter((p) => langOf(p) === lang).map(slugOf));
  return all
    .filter((p) => langOf(p) === lang || !own.has(slugOf(p)))
    .map((entry) => ({ entry, foreign: langOf(entry) !== lang }));
}

export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
