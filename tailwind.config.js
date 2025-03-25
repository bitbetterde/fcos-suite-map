/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import formsPlugin from '@tailwindcss/forms';

export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{html,js,jsx,tsx,md,mdx,astro}'],
  prefix: 'fcmap-',
  plugins: [
    /* eslint-disable */
    formsPlugin({
      strategy: 'class',
    }),
    plugin(function ({ matchUtilities, addUtilities, theme }) {
      const baseStyles = {
        width: 'calc(100%)',
        // display: 'initial',
        'background-repeat': 'no-repeat',
        'background-size': '0% 100%',
        'padding-bottom': '2px',
        transition: 'background-size ease-in-out 300ms',
      };
      matchUtilities(
        {
          'multi-line': (value) => ({
            ...baseStyles,
            'background-image': `linear-gradient(transparent calc(100% - 1.5px), ${value} 1.5px)`,
          }),
        },
        { values: flattenColorPalette(theme('colors')) },
      );
      addUtilities([
        {
          '.multi-line-underline': {
            'background-size': '100% 100%',
          },
        },
      ]);
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ["var(--plex-font, 'IBM Plex Sans')", 'sans-serif'],
        karla: ["var(--karla-font, 'Karla')", 'sans-serif'],
        inter: ["var(--inter-font, 'Inter')", 'sans-serif'],
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
