module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fitness-color-dark": "#202430",
        "fitness-color-medium": "#3A4151",
        "fitness-color-light": "#FBFBFB",
        "fitness-color-yellow": "#FFD162",
        "fitness-color-light-pink": "#FF99C3",
        "fitness-color-light-green": "#F5FFA0",
        "fitness-color-turkis": "#3EF3E8",
        "fitness-color-mint": "#3EE4E8",
        "fitness-color-blue": "#3B85E6",
        "fitness-color-dark-blue": "#3A4AE4",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      fontSize: {
        "size-xxl": "36px",
        "size-xl": "24px",
        "size-l": "18px",
        "size-m": "16px",
        "size-s": "12px",
      },
      fontWeight: {
        bold: "700",
        reg: "400",
      },
      lineHight: {
        "line-xxl": "54px",
        "line-xl": "36px",
        "line-l": "27px",
        "line-m": "21px",
        "line-s": "15px",
      },
      typography: {
        h1: {
          fontSize: "size-xxl",
          fontWeight: "bold",
          lineHight: "line-xxl",
        },
      },
    },
  },
  plugins: [],
};
