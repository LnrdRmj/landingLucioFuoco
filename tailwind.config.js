/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                app: ['Prociono'],
                Staatliches: ['Staatliches'],
                Prociono: ['Prociono'],
            },
            colors: {
                'white-warm': '#FFF6E5',
                'red-brown': '#1D100C',
                'orange-light': '#FF6D49',
                'orange-dark': '#B3391B',
            }
        },
    },
    plugins: [],
}

