/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                fallback: 'url("/img/fallback-bg.jpg")'
            },
            colors: {
                cornflowerblue: 'cornflowerblue',
                cornflowernavy: '#285ab6'
            },
            boxShadow: {
                nav: '0 0 10px rgb(0 0 0 / 50%)'
            },
            dropShadow: {
                nav: '1px 1px 10px #000000'
            }
        }
    },
    plugins: []
}
