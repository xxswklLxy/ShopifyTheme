module.exports = {
  mode: "jit",
  prefix: "ts-",
  purge: [
    "./layout/*.liquid",
    "./templates/*.{liquid, json}",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./assets/*.{liquid, js}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
