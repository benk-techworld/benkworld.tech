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
        poppins: ['Poppins','sans-serif']
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-15px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 2s ease",
      },
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
            focus: "#0E793C",
            primary: {
              DEFAULT:"#61349c",
              100:"#D00D64",
              200:"#F31260",
              300:"#F74B76",
              400:"#FB6F84",
              500:"#FD9FA4",
              600:"#FED1CF"
            },
            secondary: "#41413E",
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
              500:"#d4d4d8",
              600:"#e4e4e7",
              700:"#f4f4f5"

            },
            focus: "#12A150",
            primary: {
              DEFAULT:"#6d52aa",
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
    }),
    
  ],
  darkMode: "class"
}