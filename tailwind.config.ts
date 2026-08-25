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
        // Updated Brand Palette
        'solor-lime': {
          DEFAULT: '#2F8E04', // Main Green
          hover: '#012258',   // Blue Hover
          light: '#71B402',   // Light Green
          50: '#F4F9EC',
          100: '#E5F4D3',
          200: '#C7E8A0',
          300: '#A8DC6D',
          400: '#89CF3A',
          500: '#71B402', // Light Green
          600: '#2F8E04', // Main Green
          700: '#257203',
          800: '#1B5402',
          900: '#123801',
        },
        'solor-blue': {
          DEFAULT: '#012258', // Blue Hover Color
          hover: '#011A43',
          light: '#E6ECF5',
          50: '#F0F4FA',
          100: '#DCE5F3',
          800: '#012258',
          900: '#00163A',
        },
        'solor-dark': {
          DEFAULT: '#122417',
          hover: '#0E1D13',
          darker: '#09150D',
          card: '#1A3321',
          light: '#24452E',
        },
        'solor-bg': '#F4F7F2',
        'solor-border': '#E1E8DE',
        'solor-text': '#172B1D',
        'solor-muted': '#687B6C',

        // Legacy & semantic tokens
        'solar-green': {
          DEFAULT: '#2F8E04', // Main Green
          hover: '#012258',   // Blue Hover
          light: '#71B402',   // Light Green
          50: '#F4F9EC',
          100: '#E5F4D3',
          200: '#C7E8A0',
          300: '#A8DC6D',
          400: '#89CF3A',
          500: '#71B402',
          600: '#2F8E04',
          700: '#257203',
          800: '#1B5402',
          900: '#123801',
        },
        'deep-navy': {
          DEFAULT: '#122417',
          hover: '#012258',
          dark: '#09150D',
          light: '#1A3321',
          50: '#F4F7F2',
          100: '#E1E8DE',
          200: '#BCCCDC',
          800: '#122417',
          900: '#09150D',
        },
        'solar-amber': {
          DEFAULT: '#F4B740',
          hover: '#D99B26',
          light: '#FEF3C7',
        },
        'solar-sky': {
          DEFAULT: '#34BAF6',
          hover: '#18A6E6',
          light: '#EAF7FD',
          dark: '#0E80B5',
        },
        'warm-white': '#F4F7F2',
        'light-green': '#F4F9EC',
        'primary-text': '#172B1D',
        'secondary-text': '#687B6C',
        'border-ui': '#E1E8DE',
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
