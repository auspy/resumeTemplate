/** @type {import('tailwindcss').Config} */
export const tailwindColors = {
  border: "#132341",
  primary: "#457BE3",
  priDark: "#3E75E3",
  priDarker: "#284F9C",
  subH: "#596B91",
  heading: "#E2E8FF",
  cardBg: "#081121",
  text: "#E2E8FF8C",
  highlight: "#E1EBFFBF",
  bg: "#010816",
  yellowDark: "#A4A622",
  cardBg2: "#020b1c",
  cardBg1: "#020D23",
  green: "#2da519",
  red: "#D64343",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: tailwindColors,
    },
  },
  plugins: [],
};
