import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '30': 'repeat(30, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 4px rgba(40,224,144,.3)' },
          '50%': { boxShadow: '0 0 16px rgba(40,224,144,.7), 0 0 8px rgba(40,224,144,.5)' },
        },
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),  
  ],
};

export default config;