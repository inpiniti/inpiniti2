/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "scrollbar-width": "none" /* 파이어폭스 */,
          "-ms-overflow-style": "none" /* 인터넷 익스플로러 */,
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "rgb(14, 165, 233)",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          backgroundColor: "black",
        },
        ".scrollbar::-webkit-scrollbar": {
          display: "initial",
        },
        ".scrollbar-w::-webkit-scrollbar": {
          width: "1px",
        },
        ".scrollbar-h::-webkit-scrollbar": {
          height: "1px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
