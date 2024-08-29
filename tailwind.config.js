/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ['"Fira Code"', "monospace"],
        broadway: ["Broadway", "cursive"],
        portal: ["PortalKids", "sans-serif"],
        stitch: ["StitchParty", "sans-serif"],
        sunshine: ["SunshineTropical", "sans-serif"],
        sak: ["Saklife", "sans-serif"],
      },
    },
    plugins: [],
  },
};
