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
        "primary": "#3D9991",
        "accent": "#3D9991",
        "background": "#1F1F1F",
        "foreground": "#1F1F1F",
        "textPrimary": "#1F1F1F",
        "link": "#3D9991",
      },
      fontFamily: {
        "primary": ["Proxima Nova", "system-ui", "sans-serif"],
        "heading": ["Adobe Garamond Pro", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
