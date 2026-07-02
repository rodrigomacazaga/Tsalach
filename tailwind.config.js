/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm, institutional palette — sand / cream / stone + deep ink accents
        sand: {
          50: '#faf8f4',
          100: '#f4f0e8',
          200: '#e9e1d3',
          300: '#dccfb8',
          400: '#c9b593',
          500: '#b89b70',
        },
        ink: {
          DEFAULT: '#1c1a17',
          soft: '#2c2925',
          muted: '#6b665e',
        },
        brand: {
          // Deep evergreen — trust, institutional
          50: '#eef3f0',
          100: '#d6e2db',
          500: '#3f6b57',
          600: '#335849',
          700: '#28453a',
          800: '#1e342c',
          900: '#16271f',
        },
        gold: {
          400: '#c9a24a',
          500: '#b58a2e',
          600: '#9a731f',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,26,23,0.04), 0 8px 24px -12px rgba(28,26,23,0.12)',
        'card-hover': '0 2px 4px rgba(28,26,23,0.06), 0 16px 40px -16px rgba(28,26,23,0.18)',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
