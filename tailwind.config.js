module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'redPastel': '#E84949',
            'darkRedPastel': '#C63232',
            'darkGrey': '#3A3A3A',
            'lightGrey': '#838383',
            'white': '#fff'
        },
        extend: {},
    },
    plugins: [
        require('autoprefixer'),
    ],
}