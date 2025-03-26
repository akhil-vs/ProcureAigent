 /** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        aigent: {
          DEFAULT: '#5271FF',
        },
      },
    },
  },
  plugins: [],
};

export default config;