import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'text-color': "#333333",
        'husky-red': '#D41B2C',
        
      },
    },
  },
  plugins: [],
};
export default config;
