/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "brand-blue": "#02066f",
      "brand-black": "#040f0f",
      "brand-red": "#e90a0a",
      "brand-gray": "#b3bcc6",
      "brand-light-gray": " #f2f6f7",
      },
    },
  },
  plugins: [],
}
