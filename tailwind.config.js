/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#05070D',
        'background-light': '#0A0E17',
        primary: '#38BDF8',
        'primary-hover': '#00D4FF',
        accent1: '#8B5CF6',
        accent2: '#D946EF',
        text: '#F5F7FA',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'Clash Display', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
