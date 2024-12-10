/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amb': '#123456',
        'blu': '#123456',
      },
    },
  },
  plugins: [],
}

