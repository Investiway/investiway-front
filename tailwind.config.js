/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    prefix:'tw-',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#2c3e50',
                secondary: '#f39c12',
            },
            fontFamily: {
                'sans': ['Cutive Mono', 'Helvetica', 'Arial', 'sans-serif'],
            }
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [],
}