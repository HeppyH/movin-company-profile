import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#16201D", paper: "#F6F4EE", moss: "#4E6A5B", sand: "#D9CDBB" } } },
  plugins: []
};
export default config;