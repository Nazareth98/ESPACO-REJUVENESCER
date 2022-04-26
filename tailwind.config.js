module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      'primary': '#E6C69D',
      'secondary': '#AB8966',
      'terciary': '#7B5739',
    },
    extend: {},
  },

  plugins: [],
}
