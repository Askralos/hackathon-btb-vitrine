/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'222222',
        primary:'F088F5',
        secondary:'24DDEE'
      },
    },
  },
  plugins: [],
}