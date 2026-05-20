/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        indianred: {
          100: "#d04668",
          200: "#bd405f",
        },

        white: "#fff",

        gray: {
          100: "#8a8d93",
          200: "#7c7f84",
        },

        crimson: {
          100: "#ff4c51",
          200: "#e64449",
        },

        orange: "#ffb400",

        goldenrod: "#e6a200",

        royalblue: {
          100: "#4d82ff",
          200: "#4676e8",
        },

        forestgreen: {
          100: "#008926",
          200: "#007d23",
        },
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      borderRadius: {
        "num-8": "8px",
        "num-6": "6px",
        "num-4": "4px",
      },

      padding: {
        "num-22": "22px",
        "num-18": "18px",
        "num-14": "14px",
        "num-9": "9px",
      },

      fontSize: {
        "num-17": "17px",
        "num-15": "15px",
        "num-13": "13px",
      },

      lineHeight: {
        "num-26": "26px",
      },
    },
  },

  corePlugins: {
    preflight: false,
  },
};