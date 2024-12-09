/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        cairo: "Cairo Variable",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
