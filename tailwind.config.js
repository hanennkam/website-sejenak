/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F2EB',
          300: '#EDE8DE',
          400: '#DFD8CC',
        },
        charcoal: {
          900: '#131211',
          800: '#1C1B19',
          700: '#2A2826',
          600: '#3D3A37',
          500: '#5A5652',
          400: '#7E7873',
          300: '#ABA49D',
        },
        sand: {
          50: '#F9F7F4',
          100: '#F2EDE6',
          200: '#E4DBD0',
          300: '#D5C7B8',
          400: '#BAA794',
          500: '#9E8873',
          600: '#846F5B',
          700: '#685545',
          800: '#4D3E33',
        },
        sejenak: {
          blue: '#1D4ED8',      // Original royal blue accent from Sejenak logo
          blueLight: '#3B82F6',
          navy: '#0F172A',
          terracotta: '#A85A44',
          gold: '#C5A059',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widestEditorial: '0.22em',
        ultra: '0.3em',
      },
      boxShadow: {
        'film': '0 20px 40px -15px rgba(26, 24, 22, 0.08), 0 0 1px rgba(26, 24, 22, 0.1)',
        'photostrip': '0 12px 30px -10px rgba(19, 18, 17, 0.2), 0 2px 6px rgba(19, 18, 17, 0.08)',
        'elevated': '0 30px 60px -20px rgba(19, 18, 17, 0.15)',
      }
    },
  },
  plugins: [],
}
