/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage:{
      'iPhone15l': 'url("./src/assets/apple1.jpg")',
      'iPhonemd': 'url("./src/assets/apple3.jpg")',
      'iPhonesm': 'url("./src/assets/apple2.jpg")',
      'iPhone15sm': 'url("./src/assets/iphone15sm.jpg")',
      'iPhone15md': 'url("./src/assets/iphone15md.jpg")',
      'iPhone15lg': 'url("./src/assets/iphone15lg.jpg")',
    },
    backgroundSize:{
      '90%': '200%',
      '150%': '135%',
    },
  },
  plugins: [],
};

