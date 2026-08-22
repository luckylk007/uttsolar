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
        // Solor Theme Palette
        'solor-lime': {
          DEFAULT: '#70BA3F',
          hover: '#61A334',
          light: '#F0F8EC',
          50: '#F5FAF2',
          100: '#E6F4DE',
          200: '#CDE9BE',
          300: '#AEDB96',
          400: '#8ECD6B',
          500: '#70BA3F',
          600: '#5A9930',
          700: '#467725',
          800: '#34581C',
          900: '#233C13',
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

        // Legacy compatibility tokens
        'solar-green': {
          DEFAULT: '#70BA3F',
          hover: '#61A334',
          light: '#F0F8EC',
          50: '#F5FAF2',
          100: '#E6F4DE',
          200: '#CDE9BE',
          300: '#AEDB96',
          400: '#8ECD6B',
          500: '#70BA3F',
          600: '#5A9930',
          700: '#467725',
          800: '#34581C',
          900: '#233C13',
        },
        'deep-navy': {
          DEFAULT: '#122417',
          hover: '#0E1D13',
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
        'light-green': '#F0F8EC',
        'primary-text': '#172B1D',
        'secondary-text': '#687B6C',
        'border-ui': '#E1E8DE',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'var(--font-inter)', 'var(--font-noto-devanagari)', 'sans-serif'],
        heading: ['var(--font-manrope)', 'var(--font-noto-devanagari)', 'sans-serif'],
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
