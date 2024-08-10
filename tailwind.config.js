/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        }
      },
      fontFamily: {
        patua: ["PatuaOne"],
        pridiBold: ["PridiBold"],
        pridiExtraLight: ["PridiExtraLight"],
        pridiLight: ["PridiLight"],
        pridiMedium: ["PridiMedium"],
        pridiRegular: ["PridiRegular"],
        pridiSemiBold: ["PridiSemiBold"],
        lexendRegular: ["LexendRegular"]
      }
    }
  },
  plugins: [],
}

