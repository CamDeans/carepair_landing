import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0d9488', dark: '#0f766e', muted: '#ccfbf1' },
        surface: '#ffffff',
        canvas: '#f8fafc',
        ink: { DEFAULT: '#0f172a', muted: '#64748b' },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
