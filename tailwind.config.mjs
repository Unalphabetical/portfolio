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
          primary: '#2f6b46',
          'primary-content': '#fbf9f3',
          secondary: '#6f6a60',
          accent: '#43403a',
          neutral: '#1a1916',
          'base-100': '#f6f3ec',
          'base-200': '#fbf9f3',
          'base-300': '#efeae0',
          'base-content': '#1a1916',
          '--fallback-b1': '#f6f3ec',
          '--fallback-b2': '#fbf9f3',
          '--fallback-b3': '#efeae0',
          '--fallback-bc': '#1a1916',
          '--fallback-p': '#2f6b46',
          '--fallback-pc': '#fbf9f3',
          '--fallback-s': '#6f6a60',
          '--fallback-sc': '#fbf9f3',
          '--fallback-a': '#43403a',
          '--fallback-ac': '#fbf9f3',
          '--fallback-n': '#1a1916',
          '--fallback-nc': '#fbf9f3',
        },
      },
      {
        dark: {
          primary: '#7bbf95',
          'primary-content': '#0f0f0c',
          secondary: '#8f8a7d',
          accent: '#c8c3b6',
          neutral: '#f0ece2',
          'base-100': '#14130f',
          'base-200': '#1c1b16',
          'base-300': '#26241e',
          'base-content': '#f0ece2',
          '--fallback-b1': '#14130f',
          '--fallback-b2': '#1c1b16',
          '--fallback-b3': '#26241e',
          '--fallback-bc': '#f0ece2',
          '--fallback-p': '#7bbf95',
          '--fallback-pc': '#0f0f0c',
          '--fallback-s': '#8f8a7d',
          '--fallback-sc': '#0f0f0c',
          '--fallback-a': '#c8c3b6',
          '--fallback-ac': '#0f0f0c',
          '--fallback-n': '#f0ece2',
          '--fallback-nc': '#0f0f0c',
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
