import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bodyColor: '#F2F2F2',
        primeColor: '#168C61',
        greenLight: '#24A681',
        darkGreen: '#06403D',
        lightGray: '#878787',
      },
      fontFamily: {
        oswald: ['Oswald'],
      },
    },
  },
  plugins: [],
};
export default config;
