/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0B0F14',
        'card-dark': '#151B23',
        'primary': '#4F8CFF',
        'success': '#22C55E',
        'warning': '#F59E0B',
        'danger': '#EF4444',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A1A1AA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0B0F14 0%, #151B23 100%)',
      },
    },
  },
  plugins: [],
}
