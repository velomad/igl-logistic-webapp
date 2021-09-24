module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#ffc10e"
        },
        red: {
          DEFAULT: "#eb1c24"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
