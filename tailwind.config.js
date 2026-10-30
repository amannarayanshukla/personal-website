/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.orange[600],
          hover: colors.orange[700],
        },
        dark: {
          DEFAULT: colors.zinc[900],
          foreground: colors.white,
        },
        light: {
          DEFAULT: colors.zinc[100],
          foreground: colors.zinc[600],
          border: colors.zinc[200],
        },
        accent: {
          DEFAULT: colors.orange[100],
          foreground: colors.orange[700],
          border: colors.orange[200],
        },
      }
    },

  },
  plugins: [],
}
