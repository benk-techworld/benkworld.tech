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
        sans: ['Poppins','Roboto','Rubik','Arial','sans-serif'],
        roboto: ['Roboto','sans-serif']

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
            foreground: "#0a0903",
            focus: "#0E793C",
            primary: {
              DEFAULT: "#F31260",
              100:"#FED1CF",
              200:"#FD9FA4",
              300:"#FB6F84",
              400:"#F74B76",
              500:"#F31260",
              600:"#D00D64"
            },
            secondary: "#41413E",
          }
        },
        dark:{
          colors: {
            background: "#0a0903",
            foreground: {
              DEFAULT:"#F2EDED",

            },
            focus: "#12A150",
            primary: {
              DEFAULT:"#F31260",
              100:"#FED1CF",
              200:"#FD9FA4",
              300:"#FB6F84",
              400:"#F74B76",
              500:"#F31260",
              600:"#D00D64"
            },
            secondary: "#FBFBFB",
          }
        }
      },
      colors: {

      }
    })
  ],
  darkMode: "class"
}