const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        }
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Poppins', variants: ['400', '600', '700'] }, // Customize your fonts and variants
      ],
      path: 'fonts/',
    }),
  ],
}