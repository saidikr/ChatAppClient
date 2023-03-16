/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ["active"],
    },
  },
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-lighter": "#C8FACD",
        "primary-light": "#5BE584",
        "primary-main": "#0162C4",
        "primary-dark": "#007B55",
        "primary-darker": "#005249",
        "secondary-lighter": "#D6E4FF",
        "secondary-light": "#84A9FF",
        "secondary-main": "#3366FF",
        "secondary-dark": "#1939B7",
        "secondary-darker": "#091A7A",
        "info-lighter": "#D0F2FF",
        "info-light": "#74CAFF",
        "info-main": "#1890FF",
        "info-dark": "#0C53B7",
        "info-darker": "#04297A",
        "success-lighter": "#E9FCD4",
        "success-light": "#AAF27F",
        "success-main": "#54D62C",
        "success-dark": "#229A16",
        "success-darker": "#08660D",
        "warning-lighter": "#FFF7CD",
        "warning-light": "#FFE16A",
        "warning-main": "#FFC107",
        "warning-dark": "#B78103",
        "warning-darker": "#7A4F01",
        "error-lighter": "#FFE7D9",
        "error-light": "#FFA48D",
        "error-main": "#FF4842",
        "error-dark": "#B72136",
        "error-darker": "#7A0C2E",
      },
    },
  },
  plugins: [],
};