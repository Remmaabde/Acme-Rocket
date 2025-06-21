/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'], // ✅ Tells Tailwind where to look not only index but to look for all html files inside build folder
  theme: {
    extend: {},
  },
  plugins: [],
}
