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
    keyframes: {
      fadeOut: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      hide: {
        "0%": { display: "block" },
        "100%": { display: "none" },
      },
    },
    animation: {
      fadeOut: "fadeOut 2s linear",
      fadeIn: "fadeIn 5s ease-in",
      hide: "hide 2.3s ease-out",
    },
  },
  plugins: [],
};
