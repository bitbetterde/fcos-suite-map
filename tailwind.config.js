module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx,md,mdx,astro}'],
  prefix: 'fcmap-',
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  theme: {
    extend: {
      colors: {
        'fabcity-red': '#ee2f45',
        'fabcity-green': '#08aa64',
        'fabcity-blue': '#19459c',
        grey: {
          50: "#FDFDFC",
          100: "#F0F1F1",
          200: "#E4E4E5",
          400: "#A4A7AC",
          500: "#8A8E96",
          600: "#71767F",
          700: "#4B515D",
          900: "#0B1324",
        },
      },
    },
  },
};
