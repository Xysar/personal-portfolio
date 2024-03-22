/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navy: "#212539",
      },
      fontFamily: {
        league: ["league-spartan, sans-serif"],
      },
    },
  },
  plugins: [],
};
