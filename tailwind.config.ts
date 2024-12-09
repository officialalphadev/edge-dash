import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/component/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fade: "fade 150ms linear",
      },
      keyframes: {
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
