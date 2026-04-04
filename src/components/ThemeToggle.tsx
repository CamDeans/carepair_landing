'use client';

import { useLandingTheme, type LandingThemeMode } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useLandingTheme();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="cp-landing-theme" className="sr-only">
        Site appearance
      </label>
      <select
        id="cp-landing-theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value as LandingThemeMode)}
        className="focus-ring-cp rounded-md border border-[var(--cp-border-strong)] bg-[var(--cp-surface)] px-2 py-1.5 text-xs font-medium text-[var(--cp-ink)] shadow-sm transition-[border-color,box-shadow] duration-[var(--cp-duration-fast)] ease-[var(--cp-ease)]"
        aria-label="Color theme: light, dark, or match system"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}
