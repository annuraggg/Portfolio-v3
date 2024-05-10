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
        glow: [
          "0 0px 10px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
        glowLight: [
          "0 0px 1px rgba(255,255, 255, 0.35)",
          "0 0px 10px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
