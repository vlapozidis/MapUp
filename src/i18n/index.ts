import en from './en.json';
import el from './el.json';

export type Locale = 'en' | 'el';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_STORAGE_KEY = 'site-locale';
export const THEME_STORAGE_KEY = 'site-theme';

export const dictionaries = { en, el } satisfies Record<Locale, unknown>;

export function isLocale(value: string | null | undefined): value is Locale {
	return value === 'en' || value === 'el';
}

export function getStoredLocale(): Locale {
	if (typeof window === 'undefined') return DEFAULT_LOCALE;
	const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
	return isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export function translate(locale: Locale, path: string): string {
	const parts = path.split('.');
	let node: unknown = dictionaries[locale];
	for (const part of parts) {
		if (typeof node !== 'object' || node === null) return path;
		node = (node as Record<string, unknown>)[part];
	}
	return typeof node === 'string' ? node : path;
}

export function translateWithFallback(locale: Locale, path: string, fallbackPath: string): string {
	const primary = translate(locale, path);
	return primary === path ? translate(locale, fallbackPath) : primary;
}
