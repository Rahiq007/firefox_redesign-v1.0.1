module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue: { 800: "#0441e0", A700: "#3162e0", A700_01: "#3366ec" },
        indigo: { A200: "#4772e0", A700_01: "#1a52e0", A700: "#1b52e0" },
        blue_gray: { 50: "#eaecef", 100: "#d9d9d9" },
        gray: { 800: "#404040", 900: "#1f133a", "800_02": "#3f3f3f" },
        black: { 900: "#000000" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #b4b4b4,#4e4e4e)",
        gradient1: "linear-gradient(90deg, #1f133a,#4c4362ca)",
        gradient2: "linear-gradient(90deg, #ab42e4,#7167e6)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
