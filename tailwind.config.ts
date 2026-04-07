import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["DM Serif Display", "serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#2a7a2a",
          dark: "#1b5c1b",
          light: "#3a9c3a",
        },
        orange: {
          DEFAULT: "#e8630a",
          light: "#f5841f",
        },
        blue: {
          dark: "#0d2b6b",
          mid: "#1a3fa8",
          bright: "#2557d6",
        },
        "off-white": "#f7f8f4",
        "gray-light": "#e8eae4",
        "gray-mid": "#9aa09a",
        brand: {
          text: "#1a1f1a",
          muted: "#5a6458",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
