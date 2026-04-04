'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type LandingThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'carepair-landing-theme';

function isDarkForMode(mode: LandingThemeMode): boolean {
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyLandingTheme(mode: LandingThemeMode): void {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', isDarkForMode(mode));
}

type Ctx = {
  theme: LandingThemeMode;
  setTheme: (t: LandingThemeMode) => void;
};

const ThemeContext = createContext<Ctx | null>(null);

export function useLandingTheme(): Ctx {
  const v = useContext(ThemeContext);
  if (!v) throw new Error('useLandingTheme must be used within ThemeProvider');
  return v;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<LandingThemeMode>('light');
  const [hydrated, setHydrated] = useState(false);

  useLayoutEffect(() => {
    let initial: LandingThemeMode = 'light';
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === 'dark' || raw === 'light' || raw === 'system') initial = raw;
    } catch {
      /* ignore */
    }
    setThemeState(initial);
    applyLandingTheme(initial);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    applyLandingTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme, hydrated]);

  useEffect(() => {
    if (!hydrated || theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyLandingTheme('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [theme, hydrated]);

  const setTheme = useCallback((t: LandingThemeMode) => {
    setThemeState(t);
    applyLandingTheme(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
