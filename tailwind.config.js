module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ffecb6",
        secondary: "#ec1c24",
        gray: "#333333",
        lightgray: "#f6f6f6"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
