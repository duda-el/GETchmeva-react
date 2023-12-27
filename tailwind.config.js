/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6ED377",
        secondary: "#FFFFFF",
        tartiary: "#363636",
        customGreen: "#425F57",
      },
      screens: {
        sm: "100px",
        md: "720px",
      },
      fontSize: {
        '1.5xl': '1.05rem',
        '3xl': '1.875rem', 
      },
    },
  },
  plugins: [],
};
