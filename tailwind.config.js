/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#95B8D1",
        secondary: "#001C30",
        tertiary: "#62B8FF",
        quaternary: "#F2F2F2",
      },
    },
  },
  variants: {},
  plugins: [],
};
