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
        // Muted rose/plum — dignified primary accent
        brand: {
          50: "#faf5f8",
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
        // Deep blue-navy — grounding dark color
        navy: {
          50: "#f4f6fb",
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
        // Warm cream — the warmth of the brand / baking language
        cream: {
          50: "#fdfbf6",
          100: "#f7f0e2",
          200: "#f0e6d2",
          300: "#e6d4b4",
        },
        // Soft gold — tasteful accent for warmth and highlight
        gold: {
          300: "#e3c585",
          400: "#d8b06a",
          500: "#c79a4b",
          600: "#a87f37",
        },
        // Semantic surface tokens — keep the whole site feeling warm, never cold
        canvas: "#fbf8f3", // warm off-white page background
        ink: "#211a26", // warm near-black body text (plum-tinted, not pure gray)
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        // Warm, plum-tinted shadows — premium depth that never reads as a flat gray drop
        soft: "0 1px 2px rgba(45,26,40,0.04), 0 6px 20px -8px rgba(45,26,40,0.10)",
        card: "0 2px 4px rgba(45,26,40,0.03), 0 14px 36px -12px rgba(45,26,40,0.14)",
        lift: "0 10px 28px -8px rgba(117,49,103,0.20), 0 22px 60px -22px rgba(45,26,40,0.22)",
        glow: "0 0 0 1px rgba(216,176,106,0.28), 0 10px 36px -8px rgba(216,176,106,0.30)",
        "inset-top": "inset 0 1px 0 0 rgba(255,255,255,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-shimmer": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
      transitionTimingFunction: {
        "soft-spring": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
