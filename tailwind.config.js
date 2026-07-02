/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Guía de estilo Inversión Tsalach 2026 ──
        // Fondos claros
        bg: '#FAF7F1', // off-white cálido, fondo principal
        sand: {
          DEFAULT: '#EFE8DB', // arena, secciones alternas
          deep: '#E4D9C7', // arena profunda
        },
        surface: '#FFFFFF', // tarjetas claras
        line: '#E4D9C7', // bordes / divisores sobre claro

        // Fondos oscuros
        ink: {
          DEFAULT: '#211E18', // casi-negro cálido, secciones/tarjetas oscuras
          line: '#3A362D', // líneas sobre oscuro
        },

        // Texto sobre claro
        fg: {
          DEFAULT: '#24211B',
          soft: '#6E675B',
          mute: '#948B7C',
        },
        // Texto sobre oscuro
        ondark: {
          DEFAULT: '#FAF7F1',
          soft: '#D8CFBF',
        },

        // Acento — único
        bronze: {
          DEFAULT: '#9A6A3C', // sobre fondo claro
          soft: '#B98A5E', // sobre fondo oscuro (más luminoso)
        },
      },
      fontFamily: {
        serif: ['Spectral', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      borderRadius: {
        card: '18px',
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
