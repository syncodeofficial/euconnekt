import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#101828",
        accent: "#2563eb",
        brand: "#032b5d",
        brandSoft: "#1F2A44",
      },
    },
  },
  plugins: [],
};

export default config;
