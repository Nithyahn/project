/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color : {
        primary : "#E83667",
        primaryDark : "#BB2C51",
        secondary : "#21D4B9",
        dark : "#303030",
      },
      fontFamily :{
        inter: ["inter" , "sans-serif"],
        cursive: ["Ephesis" , "cursive"],
        
      },
      container : {
        center:true,
        padding : {
          DEFALUT  : "1rem",
          sm : '2rem',
          lg : '4rem',
          xl :  '5rem',
        },
      },
    },
  },
  plugins: [],
}

