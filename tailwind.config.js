module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/image/hero.jpg')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7f63e2",
          "secondary": "#f46496",
          "accent": "#51f7a7",
          "neutral": "#2F2541",
          "base-100": "#FCFCFD",
          "info": "#3354CC",
          "success": "#0D6842",
          "warning": "#95560F",
          "error": "#E15141",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
