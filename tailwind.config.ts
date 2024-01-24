/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: "#111",
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
      xl: "20px",
      "21xl": "40px",
      "41xl": "60px",
      lg: "18px",
      "81xl": "100px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
