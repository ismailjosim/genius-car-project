/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF3811",

          "secondary": "#42a4a5",

          "accent": "#ce065d",

          "neutral": "#27222F",

          "base-100": "#fdfdfd",

          "info": "#8BC2E5",

          "success": "#0E6C48",

          "warning": "#E1AE05",

          "error": "#EC5855",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
