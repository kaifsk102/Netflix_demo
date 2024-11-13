/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightdark: '#6d6d6eb3',
        dark: '#ffffffbf',
        deepdark: '#6d6d6e66',
      }
    },
  },
  plugins: [],
  
}
