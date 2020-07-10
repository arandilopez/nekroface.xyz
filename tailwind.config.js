module.exports = {
  purge: {
    mode: "production",
    content: ["./src/**/*.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        "sans": [ "'Monserrat'", "sans-serif" ],
        "cursive": ["'Permanent\ Marker'", "curisive"]
      }
    },
  },
  variants: {},
  plugins: [],
};
