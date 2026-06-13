/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% - Ice Blue (Dominant)
        primary: {
          DEFAULT: '#E0F7FA',
          light: '#B2EBF2',
          dark: '#80DEEA',
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        // 30% - Royal Blue (Secondary)
        secondary: {
          DEFAULT: '#4169E1',
          light: '#5A7FE8',
          dark: '#2E50A8',
          50: '#E8EEFF',
          100: '#D0DDFF',
          200: '#A8C0FF',
          300: '#80A3FF',
          400: '#5A7FE8',
          500: '#4169E1',
          600: '#2E50A8',
          700: '#1E3A8A',
          800: '#152870',
          900: '#0A1A52',
        },
        // 10% - Sky Blue (Accent)
        accent: {
          DEFAULT: '#87CEEB',
          light: '#A4D8F0',
          dark: '#5BA3C6',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#87CEEB',
          600: '#5BA3C6',
          700: '#0284C7',
          800: '#0369A1',
          900: '#075985',
        },
        dark: '#0F172A',
        light: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
