module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx,md,mdx,astro}",
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
