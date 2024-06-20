import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto','Poppins','Rubik','Arial','sans-serif'],
        poppins: ['Poppins','sans-serif'],
        rubik: ['Rubik','sans-serif'],
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(109.6deg, rgb(30,30,30) 32.4%, rgb(97,7,38) 98.8%)',
        'light-gradient': 'linear-gradient(109.6deg, rgb(255,250,250) 32.4%, rgb(255,150,170) 98.8%)'
      },
      container: {
        center : true,
      },
      height: {
        'cscreen': 'calc(100vh - var(--navbar-height))',
      },
      minHeight: {
        'cscreen': 'calc(100vh - var(--navbar-height))',
      }
    }
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light:{
          colors: {
            background: "#fffbff",
            foreground: {
              DEFAULT: "#1A1A1A",
              100:"#D2D2D2",
              200:"#B4B4B4",
              300:"#969696",
              400:"#787878",
              500:"#5A5A5A",
              600:"#3C3C3C",
              700:"#1E1E1E",
              800:"#1A1A1A",
              900:"#131313",
            },
            primary: {
              DEFAULT:"#C20E4D",
              100:"#FDD0DF",
              200:"#FAA0BF",
              300:"#F871A0",
              400:"#F54180",
              500:"#F31260",
              600:"#C20E4D",
              700:"#920B3A",
              800:"#610726",
              900:"#310413",
            },
            secondary: {
              DEFAULT:"#2C7FBD",
              100:"#DAFFD5",
              200:"#BBFFC0",
              300:"#A1FFB9",
              400:"#88FEBC",
              500:"#6FFCC8",
              600:"#58F9DB",
              700:"#58F9DB",
              800:"#36B7D9",
              900:"#23509F",
            },
            focus: "#C20E4D",
          }
        },
        dark:{
          colors: {
            background: "#1E1E1E",
            foreground: {
              DEFAULT:"#FEFDFF",
              100:"#807D7E",
              200:"#9F9D9E",
              300:"#BFBCBE",
              400:"#DFDCDE",
              500:"#FFFBFF",
              600:"#FEFCFF",
              700:"#FEFCFF",
              800:"#FEFDFF",
              900:"#FEFEFF",

            },
            primary: {
              DEFAULT:"#F54180",
              100:"#310413",
              200:"#610726",
              300:"#920B3A",
              400:"#C20E4D",
              500:"#F31260",
              600:"#F54180",
              700:"#F871A0",
              800:"#FAA0BF",
              900:"#FDD0DF",
            },
            secondary: {
              DEFAULT:"#36B7D9",
              100:"#1A2A80",
              200:"#23509F",
              300:"#2C7FBD",
              400:"#41F5F5",
              500:"#58F9DB",
              600:"#6FFCC8",
              700:"#88FEBC",
              800:"#A1FFB9",
              900:"#DAFFD5",
            },
            focus: "#F54180",
          }
        }
      },
    }),
    
  ],
  darkMode: "selector"
}