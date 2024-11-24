/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
      },
      boxShadow: {
        'modal-smooth': '1px 1px 10px 0 #ED1C2310',
        sidebar: '0 10px 20px 0 #D9D9D930',
      },
      colors: {
        brand: {
          50: '#FDE7E8',
          100: '#FBD0D1',
          200: '#F8A0A3',
          300: '#F47176',
          400: '#F04248',
          500: '#ED1C23',
          600: '#BD0F15',
          700: '#8E0B10',
          800: '#5F070A',
          900: '#2F0405',
          950: '#180203',
        },
        success: {
          50: '#E9FBF0',
          100: '#D3F8E1',
          200: '#A8F0C2',
          300: '#7CE9A4',
          400: '#51E186',
          500: '#22C55E',
          600: '#1EAE53',
          700: '#16833E',
          800: '#0F5729',
          900: '#072C15',
          950: '#04160A',
        },
        info: {
          50: '#E9F3FB',
          100: '#D4E6F7',
          200: '#A8CDF0',
          300: '#7DB4E8',
          400: '#519BE1',
          500: '#3C8FDD',
          600: '#1E68AE',
          700: '#174E82',
          800: '#0F3457',
          900: '#081A2B',
          950: '#040D16',
        },
        warning: {
          50: '#FEF0E6',
          100: '#FEE1CD',
          200: '#FCC49C',
          300: '#FBA66A',
          400: '#FA8938',
          500: '#F97416',
          600: '#C75605',
          700: '#954004',
          800: '#632B03',
          900: '#321501',
          950: '#190B01',
        },
      },
      keyframes: {
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
