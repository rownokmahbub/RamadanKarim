module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "8rem",
        xl: "9rem",
        "2xl": "4rem",
      },
    },
    fontFamily: {
      monoton:["Monoton", "cursive"],
      satoshi:['Satoshi', 'sans-serif'],
      clash:['Clash Display', 'sans-serif'],
      infinite: ["Outfit", "sans-serif"],
      bebasneo: ['Bebas Neue', 'cursive'],
    },
    extend: {
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgb(32 32 32 / 100%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        glass: "1px 5px 12px 1px rgba( 31, 38, 135, 0.37 )",
        "glass-card": "4px 4px 4px 4px rgba( 32, 32, 32, 0.37 )",
        "card-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "dark-shadow": "10px 10px 5px 0px rgba(130,130,130,0.75)"
      },

      colors: {
        bg: {
          DEFAULT: "#056691",
          200: "#272727",
          300: "#2e2e2e",
        },
        primary: {
          DEFAULT: "#056691",
          50: "#F7C6C6",
          100: "#F5B4B4",
          200: "#F09090",
          300: "#EC6C6C",
          400: "#E74848",
          500: "#DA1E37",
          600: "#B61818",
          700: "#841212",
          800: "#530B0B",
          900: "#210404",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        black: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#056691",
          "primary-focus": "#eca001",
        },
      },
    ],
  },
  plugins: [ require("daisyui"),require('@tailwindcss/line-clamp')],
};