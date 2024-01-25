/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: "#111",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
      },
      spacing: {},
      fontFamily: {
        "nightcore-demo": "'Nightcore Demo'",
        poppins: "Poppins",
        "new-york-large": "'New York Large'",
        "new-york": "'New York'",
        inter: "Inter",
        
      },
      borderRadius: {
        "43xl": "62px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "30px",
      "3xl": "40px",
      "4xl": "60px",
      "5xl": "90px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
