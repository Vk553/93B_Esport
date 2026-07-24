/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050506',
        card: '#121218',
        accent: '#FF1E27',
        'accent-dark': '#B8121A',
        secondary: '#A0A0A8',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255,30,39,0.4)',
        'glow-md': '0 0 35px rgba(255,30,39,0.5)',
        'glow-lg': '0 0 70px rgba(255,30,39,0.6)',
        'glow-xl': '0 0 120px rgba(255,30,39,0.35)',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        shine: 'shine 3s linear infinite',
      },
    },
  },
  plugins: [],
}