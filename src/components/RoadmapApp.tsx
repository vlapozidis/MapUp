import { useState, useEffect, useCallback } from 'react';
import RoadmapFlow from './RoadmapFlow';
import { departments } from '../data/departments';
import { roles, rolesForDepartment } from '../data/roles';
import { getStoredLocale, translate, type Locale } from '../i18n';
import { THEME_COLORS, getStoredTheme, type Theme } from '../lib/theme';

const ROLE_STORAGE_KEY = 'roadmap-selected-role';
const DEFAULT_ROLE = roles[0]?.id ?? '';

function getInitialRole(): string {
	if (typeof window === 'undefined') return DEFAULT_ROLE;
	const fromUrl = new URLSearchParams(window.location.search).get('role');
	if (fromUrl && roles.some((r) => r.id === fromUrl)) return fromUrl;
	const stored = window.localStorage.getItem(ROLE_STORAGE_KEY);
	if (stored && roles.some((r) => r.id === stored)) return stored;
	return DEFAULT_ROLE;
}

export default function RoadmapApp() {
	const [selectedRole, setSelectedRole] = useState(DEFAULT_ROLE);
	const [locale, setLocale] = useState<Locale>('en');
	const [theme, setTheme] = useState<Theme>('dark');
	const [sidebarOpen, setSidebarOpen] = useState(false);

	useEffect(() => {
		setSelectedRole(getInitialRole());
		setLocale(getStoredLocale());
		setTheme(getStoredTheme());

		const onLocaleChange = () => setLocale(getStoredLocale());
		const onThemeChange = () => setTheme(getStoredTheme());
		window.addEventListener('localechange', onLocaleChange);
		window.addEventListener('themechange', onThemeChange);
		return () => {
			window.removeEventListener('localechange', onLocaleChange);
			window.removeEventListener('themechange', onThemeChange);
		};
	}, []);

	const selectRole = useCallback((id: string) => {
		setSelectedRole(id);
		setSidebarOpen(false);
		window.localStorage.setItem(ROLE_STORAGE_KEY, id);
		const url = new URL(window.location.href);
		url.searchParams.set('role', id);
		window.history.replaceState({}, '', url);
	}, []);

	const t = useCallback((path: string) => translate(locale, path), [locale]);
	const colors = THEME_COLORS[theme];

	return (
		<div className="roadmap-app-shell" style={{ display: 'flex', height: '80vh', width: '100%' }}>
			<style>{`
				.roadmap-mobile-topbar { display: none; }
				@media (max-width: 860px) {
					.roadmap-app-shell { flex-direction: column; height: calc(100vh - 4rem); }
					.roadmap-mobile-topbar {
						display: flex;
						align-items: center;
						gap: 0.75rem;
						padding: 0.6rem 0.9rem;
						border-bottom: 1px solid ${colors.border};
						background: ${colors.panelBg};
					}
					.roadmap-sidebar {
						position: fixed;
						top: 0;
						left: 0;
						bottom: 0;
						width: 260px !important;
						z-index: 40;
						transform: translateX(-100%);
						transition: transform 200ms ease;
						box-shadow: 2px 0 16px rgba(0,0,0,0.35);
					}
					.roadmap-sidebar.open { transform: translateX(0); }
					.roadmap-content { width: 100%; min-width: 0; }
				}
			`}</style>
			{sidebarOpen && (
				<div
					onClick={() => setSidebarOpen(false)}
					style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 35 }}
				/>
			)}
			<div className="roadmap-mobile-topbar">
				<button
					type="button"
					data-sidebar-toggle
					onClick={() => setSidebarOpen((v) => !v)}
					aria-label={t('roadmap.sidebar.menu')}
					style={{
						background: colors.nodeBg,
						border: `1px solid ${colors.border}`,
						borderRadius: 2,
						color: colors.text,
						fontSize: 16,
						lineHeight: 1,
						padding: '0.4rem 0.6rem',
						cursor: 'pointer',
					}}
				>
					☰
				</button>
				<span style={{ fontSize: 13.5, fontWeight: 600, color: colors.text }}>
					{selectedRole ? t(`roles.${selectedRole}.name`) : t('roadmap.sidebar.menu')}
				</span>
			</div>
			<nav
				className={`roadmap-sidebar${sidebarOpen ? ' open' : ''}`}
				style={{
					width: 240,
					flexShrink: 0,
					overflowY: 'auto',
					borderRight: `1px solid ${colors.border}`,
					background: colors.panelBg,
					padding: '1rem 0.75rem',
				}}
			>
				{departments.map((d) => {
					const departmentRoles = rolesForDepartment(d.id);
					return (
						<div key={d.id} style={{ marginBottom: '1.25rem' }}>
							<div
								style={{
									fontSize: 11,
									textTransform: 'uppercase',
									letterSpacing: '0.04em',
									color: colors.textDim,
									padding: '0 0.5rem',
									marginBottom: '0.4rem',
								}}
							>
								{t(`departments.${d.id}.name`)}
							</div>
							{departmentRoles.length === 0 ? (
								<div style={{ padding: '0.4rem 0.5rem', fontSize: 12.5, color: colors.textDim, fontStyle: 'italic' }}>
									{t('rolePicker.comingSoonTitle')}
								</div>
							) : (
								departmentRoles.map((r) => {
									const active = r.id === selectedRole;
									return (
										<button
											key={r.id}
											onClick={() => selectRole(r.id)}
											style={{
												display: 'block',
												width: '100%',
												textAlign: 'left',
												padding: '0.45rem 0.5rem',
												marginBottom: 2,
												borderRadius: 2,
												border: 'none',
												background: active ? `${colors.accent}22` : 'transparent',
												color: active ? colors.accent : colors.text,
												fontWeight: active ? 600 : 400,
												fontSize: 13.5,
												fontFamily: 'inherit',
												cursor: 'pointer',
											}}
										>
											{t(`roles.${r.id}.name`)}
										</button>
									);
								})
							)}
						</div>
					);
				})}
			</nav>
			<div className="roadmap-content" style={{ flex: 1, minWidth: 0 }}>
				{selectedRole && <RoadmapFlow key={selectedRole} role={selectedRole} theme={theme} locale={locale} />}
			</div>
		</div>
	);
}
