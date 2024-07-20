import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "#1d1a29",
        "light-background": "#292634",
        primary: "#9d7cf9",
        secondary: "#7f079e",
        accent: "#f412a5",
      }
    },
  },
  
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#9d7cf9",
              foreground: "#fbfaff",
            },
            secondary: {
              DEFAULT: "#7f079e",
              foreground: "#fbfaff",
            },
            focus: "#9d7cf9",
          },
        },
      },
    }),
  ],
}
