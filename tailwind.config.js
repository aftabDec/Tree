/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#62b6ee", // Light blue for primary
        accent: "#e19c4d", // Gold accent color
      },
    },
  },
  plugins: [],
};
