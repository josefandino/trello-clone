/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-p': '#505F79',
        'green-apple': '#5AAC44',
        'green-apple-light': '#61BD4F',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1536px',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

