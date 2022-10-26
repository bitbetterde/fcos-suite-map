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
      },
    },
  },
};
