/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'lightCharcoal': '#E3E2E0',
        'aqua': '#D3E5EF',
        'lightPink': '#F4E0E9',
        'lightGreen': '#DBEDDB'
      }
    }
  },
  plugins: []
};