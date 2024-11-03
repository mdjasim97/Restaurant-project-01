/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './src/**/*.{vue,js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'Bebas': ["'Bebas Neue', serif"],
                'OpenSans': ["'Open Sans', serif"],
                'Raleway': ["'Raleway', serif"],
                'Roboto': ["'Roboto', serif"],
                'Poppins': ["'Poppins', sans-serif"],
                'Inter': ["'Inter', serif"]
            }
        },
    },
    plugins: [require("daisyui")],
}