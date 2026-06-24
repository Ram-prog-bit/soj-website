import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Muted rose/plum — dignified accent color
        brand: {
          50:  "#faf5f8",
          100: "#f5e8f2",
          200: "#ead0e4",
          300: "#d8aacf",
          400: "#c07db5",
          500: "#a85799",
          600: "#8e3f7e",
          700: "#753167",
          800: "#622858",
          900: "#52234a",
          950: "#300f2b",
        },
        // Deep blue-navy — primary dark color
        navy: {
          50:  "#f4f6fb",
          100: "#e8ecf6",
          200: "#ccd8eb",
          300: "#a0b5d8",
          400: "#6f8ec1",
          500: "#4d6ea6",
          600: "#3a5488",
          700: "#2f4370",
          800: "#243254",
          900: "#192339",
          950: "#0d1220",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
