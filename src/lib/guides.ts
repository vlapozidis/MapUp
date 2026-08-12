import type { CollectionEntry } from 'astro:content';

export type GuideEntry = CollectionEntry<'guides'>;
export type ByLocale = { en?: GuideEntry; el?: GuideEntry };

export function groupGuidesBySlug(guides: GuideEntry[]): Map<string, ByLocale> {
	const bySlug = new Map<string, ByLocale>();
	for (const g of guides) {
		const [locale, slug] = g.id.split('/');
		if (!bySlug.has(slug)) bySlug.set(slug, {});
		bySlug.get(slug)![locale as 'en' | 'el'] = g;
	}
	return bySlug;
}
