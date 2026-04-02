import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../types";

export const LOGS_PAGE_SIZE = 5;

export type LogEntry = CollectionEntry<"logs">;
export type ProjectEntry = CollectionEntry<"projects">;
export type PageEntry = CollectionEntry<"pages">;

export function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getLogs(locale: Locale) {
  return (await getCollection("logs", ({ data }) => data.locale === locale && !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}

export async function getProjects(locale: Locale) {
  return (await getCollection("projects", ({ data }) => data.locale === locale)).sort((a, b) => {
    return Number(b.data.featured) - Number(a.data.featured) || a.data.title.localeCompare(b.data.title);
  });
}

export async function getPage(locale: Locale, type: "now") {
  const pages = await getCollection("pages", ({ data }) => data.locale === locale && data.type === type);
  return pages[0];
}

export async function getCategoryCounts(locale: Locale) {
  const logs = await getLogs(locale);
  const counts = new Map<string, number>();

  for (const entry of logs) {
    counts.set(entry.data.category, (counts.get(entry.data.category) ?? 0) + 1);
  }

  return [...counts.entries()].map(([slug, count]) => ({ slug, count }));
}

export async function getTagCounts(locale: Locale) {
  const logs = await getLogs(locale);
  const counts = new Map<string, { tag: string; count: number }>();

  for (const entry of logs) {
    for (const tag of entry.data.tags) {
      const key = slugifyTag(tag);
      const current = counts.get(key);
      counts.set(key, { tag, count: (current?.count ?? 0) + 1 });
    }
  }

  return [...counts.entries()]
    .map(([slug, value]) => ({ slug, tag: value.tag, count: value.count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export async function getLogsByTag(locale: Locale, slug: string) {
  const logs = await getLogs(locale);
  return logs.filter((entry) => entry.data.tags.some((tag) => slugifyTag(tag) === slug));
}

export function paginateEntries<T>(entries: T[], currentPage: number, pageSize = LOGS_PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    page: safePage,
    totalPages,
    items: entries.slice(start, start + pageSize)
  };
}
