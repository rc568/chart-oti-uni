/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBG: '#FCFCFC',
        primary: '#1CBACC',
      }
    },
  },
  plugins: [],
}

