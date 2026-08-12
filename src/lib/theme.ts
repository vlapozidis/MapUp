export type Theme = 'dark' | 'light';

export const THEME_COLORS: Record<
	Theme,
	{
		canvasBg: string;
		panelBg: string;
		nodeBg: string;
		border: string;
		optionalBorder: string;
		text: string;
		textDim: string;
		backgroundDots: string;
		minimapMask: string;
		accent: string;
	}
> = {
	dark: {
		canvasBg: '#0f1115',
		panelBg: '#0f1115',
		nodeBg: '#171a21',
		border: '#2a2e37',
		optionalBorder: '#4a5160',
		text: '#e6e8eb',
		textDim: '#9aa1ac',
		backgroundDots: '#2a2e37',
		minimapMask: 'rgba(15,17,21,0.8)',
		accent: '#22c1a4',
	},
	light: {
		canvasBg: '#f3f4f7',
		panelBg: '#f9fafb',
		nodeBg: '#ffffff',
		border: '#dde0e6',
		optionalBorder: '#c7cbd3',
		text: '#1c1f26',
		textDim: '#5b6270',
		backgroundDots: '#d8dbe2',
		minimapMask: 'rgba(243,244,247,0.8)',
		accent: '#0e9c86',
	},
};

export function getStoredTheme(): Theme {
	if (typeof window === 'undefined') return 'dark';
	return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}
