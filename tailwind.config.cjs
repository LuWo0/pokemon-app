/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "poke-banner": "url('./assets/poke-banner.webp')",
      }
    },
  },
  plugins: [],
}
