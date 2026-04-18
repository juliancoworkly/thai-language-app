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
      },
      fontFamily: {
        thai: ['"Noto Sans Thai"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
