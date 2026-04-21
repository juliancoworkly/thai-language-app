import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf4f3",
          100: "#fbe7e4",
          200: "#f7cec9",
          300: "#f1a89f",
          400: "#e87a6c",
          500: "#dc5544",
          600: "#c83d2c",
          700: "#a72f21",
          800: "#8a2b20",
          900: "#73271f",
        },
        ink: {
          900: "#0c1825",
          800: "#101e2f",
          700: "#172a40",
          600: "#1f3956",
        },
        mint: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#34d399",
          600: "#22c08f",
          700: "#0ea271",
          800: "#065f46",
        },
      },
      fontFamily: {
        thai: ['"Noto Sans Thai"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(52,211,153,.4)",
      },
    },
  },
  plugins: [],
};

export default config;
