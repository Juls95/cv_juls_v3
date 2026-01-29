/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stock: {
          bg: '#0a0a0a',
          panel: '#1a1a1a',
          up: '#10B981', // Green
          down: '#EF4444', // Red
          warm: '#F59E0B', // Amber/Gold for "Warm"
          text: '#E5E7EB',
          muted: '#9CA3AF'
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
