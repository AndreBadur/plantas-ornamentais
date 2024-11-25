import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        bebasNeue: ["Bebas Neue"],
      },

      animation: {
        'slide-in-right': 'slideInRight 0.2s ease-out forwards',
      },
      keyframes: {
        slideInRight: {
          '0%': {
            transform: 'translateX(120%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
