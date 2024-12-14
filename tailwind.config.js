/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: "#1B4965",
        teal: "#4A90A4",
        dark: "#1F1F1F",
        dgrey: "#8D8D8D",
        mgrey: "#E1E1E1",
        grey: "#F7F7F7",
        gddefault: "#030712",
        gd50: "#111827"
      }
    },
  },
  plugins: [],
}

