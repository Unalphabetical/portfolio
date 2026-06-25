import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#2d2d2d',
          'primary-content': '#faf9f6',
          secondary: '#6b5e4a',
          accent: '#c74d3f',
          neutral: '#2d2d2d',
          'base-100': '#faf9f6',
          'base-200': '#f0ede8',
          'base-300': '#e2ddd6',
          'base-content': '#1a1a1a',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#e2ddd6',
          'primary-content': '#1a1a1a',
          secondary: '#b0a58f',
          accent: '#e06b5a',
          neutral: '#e2ddd6',
          'base-100': '#1a1a1a',
          'base-200': '#232323',
          'base-300': '#2d2d2d',
          'base-content': '#e2ddd6',
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.8125rem, 0.75rem + 0.2vw, 0.9375rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.35vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',
        'fluid-xl': 'clamp(1.25rem, 1rem + 0.75vw, 1.75rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.125rem + 1.25vw, 2.25rem)',
        'fluid-3xl': 'clamp(2rem, 1.25rem + 2.5vw, 3.5rem)',
        'fluid-4xl': 'clamp(2.5rem, 1.5rem + 4vw, 4.5rem)',
      },
    },
  },
};
