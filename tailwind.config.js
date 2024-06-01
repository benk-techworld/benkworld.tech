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
            foreground: "#080708",
            focus: "#0E793C",
            primary: "#F31260",
            secondary: "#E4E4E7",
          }
        },
        dark:{
          colors: {
            background: "#0a0903",
            foreground: "#FEFEFE",
            focus: "#12A150",
            primary:"#F31260",
            secondary: "#27272A",
          }
        }
      },
      colors: {

      }
    })
  ],
  darkMode: "class"
}