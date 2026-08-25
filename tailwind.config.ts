import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // User Requested Palette
        'solar-yellow': {
          DEFAULT: '#FFB000', // Primary Yellow
          dark: '#F59E0B',    // Golden Yellow
          light: '#FFF4CC',   // Soft Yellow
        },
        'solar-green': {
          DEFAULT: '#46A304', // Solar Green (Primary)
          hover: '#2F7D05',   // Deep Green (Dark)
          light: '#70C92F',   // Eco Green (Light)
          50: '#F7F9F5',
          100: '#EBF5E1',
          200: '#D2ECC0',
          300: '#B2E097',
          400: '#8ED367',
          500: '#70C92F',
          600: '#46A304',
          700: '#2F7D05',
          800: '#1F5603',
          900: '#17220F',
        },
        'solor-lime': {
          DEFAULT: '#46A304',
          hover: '#2F7D05',
          light: '#70C92F',
          50: '#F7F9F5',
          100: '#EBF5E1',
          200: '#D2ECC0',
          300: '#B2E097',
          400: '#8ED367',
          500: '#70C92F',
          600: '#46A304',
          700: '#2F7D05',
          800: '#1F5603',
          900: '#17220F',
        },
        'solor-dark': {
          DEFAULT: '#17220F',
          hover: '#111A0B',
          darker: '#0C1307',
          card: '#1F2E14',
          light: '#2B3F1D',
        },
        'solor-bg': '#F7F9F5',
        'solor-border': '#E2E7DE',
        'solor-text': '#17220F',
        'solor-muted': '#66705F',

        // Semantic tokens
        'deep-navy': {
          DEFAULT: '#17220F',
          hover: '#2F7D05',
          dark: '#0C1307',
          light: '#1F2E14',
          50: '#F7F9F5',
          100: '#E2E7DE',
          200: '#C7D1C2',
          800: '#17220F',
          900: '#0C1307',
        },
        'solar-amber': {
          DEFAULT: '#FFB000',
          hover: '#F59E0B',
          light: '#FFF4CC',
        },
        'solar-sky': {
          DEFAULT: '#34BAF6',
          hover: '#18A6E6',
          light: '#EAF7FD',
          dark: '#0E80B5',
        },
        'section-bg': '#F7F9F5',
        'warm-white': '#F7F9F5',
        'light-green': '#F7F9F5',
        'primary-text': '#17220F',
        'secondary-text': '#66705F',
        'border-ui': '#E2E7DE',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'var(--font-noto-devanagari)', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-noto-devanagari)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        hindi: ['var(--font-noto-devanagari)', 'sans-serif'],
      },
      borderRadius: {
        card: '18px',
        calc: '22px',
        btn: '9999px', // Pill buttons matching Solor theme
        pill: '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
