/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA664",
        body: "#0e4c2e",
        "body-secondary": "#04050B",
        secondary: "#707070",
        "light-primary": "#DAFBEE",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
