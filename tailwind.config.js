const { Kumbh_Sans } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kumbh_Sans: ["var(--font-kumbh-sans)"],
      },
    },
  },
  plugins: [],
};
