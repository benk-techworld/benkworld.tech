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
              DEFAULT: "#18181b",
              100:"#e4e4e7",
              200:"#d4d4d8",
              300:"#a1a1aa",
              400:"#71717a",
              500:"#52525b",
              600:"#3f3f46",
              700:"#27272a"
            },
            primary: {
              DEFAULT:"#61349c",
              100:"#DBECF0",
              200:"#C3D8E5",
              300:"#ACC0DA",
              400:"#7E83C3",
              500:"#6D52AA",
              600:"#704696",
              700:"#6F3B82",
              800:"#6A306D",
              900:"#582650",
            },
            secondary: "#1E1E1E",
            focus: "#0E793C",
          }
        },
        dark:{
          colors: {
            background: "#1E1E1E",
            foreground: {
              DEFAULT:"#fafafa",
              100:"#27272a",
              200:"#3f3f46",
              300:"#52525b",
              400:"#71717a",
              500:"#6D52AA",
              600:"#704696",
              700:"#6F3B82",
              800:"#6A306D",
              900:"#582650",

            },
            primary: {
              DEFAULT:"#7E83C3",
              100:"#582650",
              200:"#6A306D",
              300:"#6F3B82",
              400:"#704696",
              500:"#6D52AA",
              600:"#7168B7",
              700:"#7E83C3",
              800:"#95A3CF",
              900:"#ACC0DA",
            },
            secondary: "#fffbff",
            focus: "#12A150",
          }
        }
      },
    }),
    
  ],
  darkMode: "class"
}