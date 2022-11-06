/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: ["cupcake", "dark", "cmyk"],
  plugins: [require("daisyui")],
}