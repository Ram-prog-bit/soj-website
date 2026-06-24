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
        brand: {
          50:  "#fdf4f8",
          100: "#fce8f2",
          200: "#f9d1e5",
          300: "#f4aacf",
          400: "#ec77b0",
          500: "#df4d92",
          600: "#c72f74",
          700: "#a7215d",
          800: "#8a1e4e",
          900: "#731c44",
          950: "#450a25",
        },
        slate: {
          850: "#1a2235",
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
