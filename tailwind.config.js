/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ], theme: {
        extend: {
            backgroundImage: {
                'hero': "url('../public/dark.png')",
                'light': "url('../public/light.png')"
            },
        },
    },
    plugins: [],
}

