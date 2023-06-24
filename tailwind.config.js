/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login-bg': "url('./img/bg-picture.jpg')",
      })
    },
  },
  plugins: [],
}

