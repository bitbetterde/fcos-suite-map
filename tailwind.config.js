module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx,md,mdx,astro}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
