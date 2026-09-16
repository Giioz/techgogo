import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: "#BEB0D2",
          light: "#CDC1DF",
          dark: "#A897C0",
        },
        cream: {
          DEFAULT: "#F7F7F5",
          muted: "#EFEFEA",
          tint: "#FAFAF9",
          pure: "#FFFFFF",
        },
        tech: {
          black: "#111111",
          muted: "#4A4A4A",
          subtle: "#737373",
          border: "#111111",
        },
        orangeAccent: {
          DEFAULT: "#FF5A3D",
          hover: "#E84E33",
          light: "#FFE9E5",
        },
        yellowAccent: {
          DEFAULT: "#FDCC42",
          hover: "#EBB932",
          light: "#FFF8E1",
        },
        purpleAccent: {
          DEFAULT: "#BD94F4",
          hover: "#AB7EE6",
          light: "#F4ECFD",
        },
      },
      fontFamily: {
        display: [
          "Fredoka",
          "'Noto Sans Georgian'",
          "'FiraGO'",
          "'BPG Nino Mtavruli'",
          "Nunito",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        sans: [
          "'Plus Jakarta Sans'",
          "'Noto Sans Georgian'",
          "'FiraGO'",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "28px",
        "5xl": "32px",
        "6xl": "40px",
      },
      boxShadow: {
        tactile: "3px 3px 0px #111111",
        "tactile-sm": "2px 2px 0px #111111",
        "tactile-lg": "5px 5px 0px #111111",
        "tactile-hover": "4px 4px 0px #111111",
        "tactile-orange": "3px 3px 0px #C93920",
        "tactile-yellow": "3px 3px 0px #C99E25",
        "tactile-purple": "3px 3px 0px #8E60CC",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
    },
  },
  plugins: [],
};

export default config;
