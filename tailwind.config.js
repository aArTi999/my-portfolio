/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "2/3": "75%",
        "1/4": "25%",
      },
      height: {},
    },
  },
  plugins: [],
};
