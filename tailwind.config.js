/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          navy: "#0A1128",
          gold: "#C5A059",
          goldLight: "#D4B483",
          charcoal: "#1C1C1C",
          offWhite: "#F8F9FA",
          gray: "#E5E5E5",
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

