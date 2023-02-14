/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 500px)" },
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
