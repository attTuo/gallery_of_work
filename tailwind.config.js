/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{tsx,ts}",
    "./ui/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["bumblebee"]
  }
}
