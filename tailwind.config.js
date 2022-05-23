module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#19d3ae",
          secondary: "#1f2937",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "car": "#1f2937",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")]
}
