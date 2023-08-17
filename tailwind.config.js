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
            },
            fontFamily: {
                'bricolage': ['Bricolage Grotesque', 'sans-serif'], // Add your custom font here
                'cinzel': ['Cinzel', 'serif'],
                'faunaone': ['Fauna One', 'serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
