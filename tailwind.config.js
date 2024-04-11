/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arcade: "arcade",
      },
      colors: {
        dark: "#2c2c2c",
        prime: "#fc7a00",
        light: "#cecece",
      },
    },
  },
  plugins: [],
};
