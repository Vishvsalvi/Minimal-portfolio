import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          black: "#000000",
          darkGray1: "#151515",
          darkGray2: "#2a2a2a",
          mediumGray: "#808080",
          lightGray1: "#e0e0e0",
          lightGray2: "#e7e7e7",
          lightGray3: "#f5f5f5",
          white: "#ffffff",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
