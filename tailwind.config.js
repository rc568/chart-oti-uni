/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#FCFCFC',
        primary: '#1CBACC',
        secondary: '#2FD087',
        onPrimary: '#FCFCFC'
      }
    },
  },
  plugins: [],
}

