/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#0B3D2E",
        darkGreenAlt: "#064E3B",
        neonGreen: "#22C55E",
        bgBlack: "#050505",
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, rgba(11, 61, 46, 0.4) 40%, #050505 100%)',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(34, 197, 94, 0.5)',
        'neon-strong': '0 0 25px rgba(34, 197, 94, 0.8)',
      }
    },
  },
  plugins: [],
}