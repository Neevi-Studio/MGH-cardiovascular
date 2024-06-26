import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hlad: ["var(--font-hlad)"],
        inter: ["var(--font-inter)"],
        "be-vietnam-pro": ["var(--font-be-vietnam-pro)"],
        lato: ["var(--font-lato)"],
        amiko: ["var(--font-amiko)"],
        "liberation-sans": ["var(--font-liberation-sans)"],
      },
      colors: {
        primary: "#A38457",
        "primary-50": "#C9AC7F",
        gray: "#6E6E6E",
        "gray-100": "#7A7A7A",
        "gray-dark": "#333333",
        "gray-light": "#F5F5F5",
        "gray-medium": "#D9D9D9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    // @ts-ignore
    "prettier-plugin-tailwindcss",
  ],
};
export default config;
