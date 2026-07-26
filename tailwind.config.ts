import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          50: "#eff8ff",
          100: "#dbefff",
          500: "#1f8edb",
          600: "#0f6fb7",
          700: "#0d5f9c",
          900: "#12334d"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 111, 183, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
