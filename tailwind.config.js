/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      neue: ["neue-montreal", "sans-serif"],
      gloock: ["Gloock", "sans-serif"],
      poly: ["Polysans", "sans-serif"],
    },
    extend: {
      dropShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.35)",
        "dark-glow": "0 0 10px rgba(0, 0, 0, 0.5)", // Darker shadow for light backgrounds
        "glow-light": [
          "0 0px 1px rgba(255,255, 255, 0.25)",
          "0 0px 10px rgba(255, 255,255, 0.2)",
        ],
        "glow-extralight": [
          "0 0px 1px rgba(255,255, 255, 0.35)",
          "0 0px 10px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
