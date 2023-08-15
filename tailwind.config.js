/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx, scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'mobile-s': '360px',
        // => @media (min-width: 360px) { ... }

        'mobile-l': '420px',
        // => @media (min-width: 420px) { ... }

        'tablet-s': '600px',
        // => @media (min-width: 600px) { ... }

        'tablet-l': '768px',
        // => @media (min-width: 768px) { ... }
      },
      width: {
        15: '60px',
        19: '76px',
        32.5: '130px',
        37.5: '150px',
        50: '200px',
        73: '292px',
        75: '300px',
        106: '424px',
        125: '500px',
        142: '568px',
      },
      minWidth: {
        15: '60px',
        19: '76px',
        32.5: '130px',
        37.5: '150px',
        50: '200px',
        73: '292px',
        75: '300px',
        106: '424px',
        125: '500px',
        142: '568px',
        '12xl': '1920px',
      },
      maxWidth: {
        15: '60px',
        19: '76px',
        32.5: '130px',
        37.5: '150px',
        50: '200px',
        73: '292px',
        75: '300px',
        106: '424px',
        125: '500px',
        142: '568px',
        '12xl': '1920px',
      },
      height: {
        15: '60px',
        19: '76px',
        32.5: '130px',
        37.5: '150px',
        50: '200px',
        73: '292px',
        75: '300px',
        106: '424px',
        125: '500px',
        142: '568px',
      },
      minHeight: {
        15: '60px',
        19: '76px',
        32.5: '130px',
        37.5: '150px',
        50: '200px',
        73: '292px',
        75: '300px',
        106: '424px',
        125: '500px',
        142: '568px',
      },
      maxHeight: {
        15: '60px',
        19: '76px',
        32.5: '130px',
        37.5: '150px',
        50: '200px',
        73: '292px',
        75: '300px',
        106: '424px',
        125: '500px',
        142: '568px',
      },
      padding: {
        1.5: '6px',
        2.5: '10px',
        3.75: '15px',
        12.5: '50px',
      },
      margin: {
        1.5: '6px',
        2.5: '10px',
        3.75: '15px',
        12.5: '50px',
      },
      inset: {
        0.25: '1px',
      },
      colors: {
        'clear-white': 'rgba(255, 255, 255, 0.4)',
        'clear-black': '#202124',
        'transparent-black': 'rgba(0, 0, 0, 0.4)',
        'main-color': '#00ACD5',
        aquamarine: '#7fffd4',
        dark: '#202124',
        red: '#FF3939',
      },
      backgroundSize: {
        lg: '70px',
      },
    },
    borderRadius: {
      md: '20px',
      lg: '50px',
      full: '9999px',
    },
    boxShadow: {
      classic: '0px 5px 4px rgba(0, 0, 0, 0.25)',
    },
  },

  plugins: [],
};
