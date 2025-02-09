/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHOver: '#fcf4ff',
        darkHOver: '#2a004a',
        darkTheme: '#11001f'
      }
      ,
      fontFamely:{
        outfit:["outfit", "sens-serif"],
        ovo:["ovo", "serif"]
      }
    },
  },
  plugins: [],
}

