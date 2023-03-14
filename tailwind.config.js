module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{html,js,jsx,tsx,md,mdx,astro}'],
  prefix: 'fcmap-',
  plugins: [
    /* eslint-disable */
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ['IBM Plex Sans', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'fabcity-red': '#ee2f45',
        'fabcity-green': '#08aa64',
        'fabcity-blue': '#19459c',
        grey: {
          50: '#FDFDFC',
          100: '#F0F1F1',
          200: '#E4E4E5',
          400: '#A4A7AC',
          500: '#8A8E96',
          600: '#71767F',
          700: '#4B515D',
          900: '#0B1324',
        },
      },
    },
  },
};
