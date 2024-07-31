import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/subdomains/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
};
export default config;
