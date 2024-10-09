/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      sm:"480",
      sml:"768",
      md:"834",
      mdl:"1024",
      lg:"1280",
      xl:"1440",
    },
    extend: {
      fontFamily: {
        heading: ["Kanit","serif"],
        body: ["Archivo,serif"],
      },
      colors:{
        smokey_black: '#0E0300',
        ercu: '#A59C78',
        celadon: '#B3D09C',
        champagne_pink: '#EED3C1',
        timberwolf: '#DCD1CA',
      },
    },
  },
  plugins: [],
}
