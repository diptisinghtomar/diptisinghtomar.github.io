/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        site: "#08090b",
        panel: "#101114",
        panel2: "#15161a",
        primary: "#f5f4ef",
        secondary: "#a8a8a5",
        subtle: "#292b2f",
        accent: "#c8ff00",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      maxWidth: { site: "1500px" },
    },
  },
  plugins: [],
};
