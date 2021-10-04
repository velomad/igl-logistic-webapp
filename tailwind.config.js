module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: {
          DEFAULT: "#ffc10e",
        },
        red: {
          DEFAULT: "#eb1c24",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#333333",
          DEFAULT: "#c0ccda",
          light: "#edeef3",
          lightest: "#f6f6f6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
