
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f0ff',
          blue: '#0080ff',
          pink: '#ff00e5',
          purple: '#a020f0',
        },
        dark: {
          DEFAULT: '#050505',
          surface: '#111111',
          border: '#222222'
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
