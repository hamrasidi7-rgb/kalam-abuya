import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Islamic Editorial Color Palette
        ivory: {
          DEFAULT: "#F8F5EF",
          light: "#FCFAF6",
          50: "#FAF8F5",
          100: "#F8F5EF",
          200: "#F1ECE2",
          300: "#E9E1D5",
          border: "#E9E1D5",
        },
        burgundy: {
          DEFAULT: "#701D2C",
          light: "#8B2437",
          dark: "#551521",
          50: "#FAF2F4",
          100: "#F4E4E7",
          200: "#E7C1C8",
          700: "#701D2C",
          800: "#551521",
          900: "#400E18",
        },
        gold: {
          DEFAULT: "#B99A62",
          light: "#D8C496",
          soft: "#C7AD76",
          dark: "#9E824F",
          50: "#FAF7EE",
          100: "#F3ECD9",
          200: "#E6D7B1",
          300: "#D7C088",
          400: "#C7AD76",
          500: "#B99A62",
          600: "#9E824F",
          700: "#7E6539",
          800: "#614D2C",
        },
        charcoal: {
          DEFAULT: "#292622",
          light: "#3E3B37",
          muted: "#5E574E",
          soft: "#7C746A",
          border: "#E9E1D5",
          50: "#F8F7F6",
          100: "#F1F0EE",
          200: "#E3E1DD",
          300: "#C8C5BF",
          400: "#9C978F",
          500: "#7C746A",
          600: "#5E574E",
          700: "#443F38",
          800: "#292622",
          900: "#1E1C19",
        },
        sand: {
          DEFAULT: "#E9E1D5",
          light: "#F3EDE4",
          border: "#E9E1D5",
          dark: "#D6CABA",
        },
        parchment: {
          DEFAULT: "#F8F5EF",
          border: "#E9E1D5",
        },
        // Alias forest to burgundy so legacy references harmonize with the new palette
        forest: {
          DEFAULT: "#701D2C",
          50: "#FAF2F4",
          100: "#F4E4E7",
          200: "#E7C1C8",
          300: "#D498A3",
          400: "#A9485A",
          500: "#8B2437",
          600: "#701D2C",
          700: "#5E1825",
          800: "#50101A",
          900: "#3D0B13",
          950: "#26060B",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Lora", "Georgia", "serif"],
        editorial: ["'Cormorant Garamond'", "Georgia", "serif"],
        reading: ["'Lora'", "Georgia", "serif"],
        sans: ["var(--font-sans)", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
        wideEditorial: "0.15em",
        ultraWide: "0.25em",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(112, 29, 44, 0.03)",
        card: "0 4px 20px -2px rgba(112, 29, 44, 0.04)",
        cardHover: "0 8px 24px -4px rgba(112, 29, 44, 0.08)",
        editorial: "0 16px 36px -12px rgba(112, 29, 44, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
