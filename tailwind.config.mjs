import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    screens: {
      base: '0em', // 0px
      sm: '30em', // ~480px
      md: '48em', // ~768px
      lg: '62em', // ~992px
      xl: '80em', // ~1280px
      '2xl': '96em', // ~1536px
    },
    extend: {
      boxShadow: {
        input: 'rgba(17,17,26,0.1) 0 0 16px'
      },
      keyframes: {
        barOne: {
          '0%': { top: '8px' },
          '30%': { top: '17px', transform: 'rotate(0)' },
          '60%': { transform: 'rotate(45deg)' },
          '100%': { top: '17px', transform: 'rotate(135deg)' },
        },
        barOneReverse: {
          '0%': { top: '17px', transform: 'rotate(-135deg)' },
          '30%': { transform: 'rotate(-45deg)' },
          '60%': { top: '17px', transform: 'rotate(0)' },
          '100%': { top: '8px' },
        },
        barTwo: {
          '0%': { top: '17px' },
          '30%': { top: '17px', transform: 'rotate(0)' },
          '60%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        barTwoReverse: {
          '0%': { transform: 'rotate(-45deg)' },
          '30%': { transform: 'rotate(-45deg)' },
          '60%': { top: '17px', transform: 'rotate(0)' },
          '100%': { top: '17px', },
        },
        barThree: {
          '0%': { bottom: '8px' },
          '30%': { bottom: '17px', transform: 'rotate(0)' },
          '60%': { transform: 'rotate(45deg)' },
          '100%': { bottom: '17px', transform: 'rotate(45deg)' },
        },
        barThreeReverse: {
          '0%': { bottom: '17px', transform: 'rotate(-45deg)' },
          '30%': { transform: 'rotate(-45deg)' },
          '60%': { bottom: '17px', transform: 'rotate(0)' },
          '100%': { bottom: '8px' },
        },
        stretch: {
          '0%, 40%, 100%': {
            transform: 'scaleY(0.4)',
          },
          '20%': {
            transform: 'scaleY(1.0)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        barOne: '0.5s alternate both barOne',
        barOneReverse: '0.5s alternate both barOneReverse',
        barTwo: '0.5s alternate both barTwo',
        barTwoReverse: '0.5s alternate both barTwoReverse',
        barThree: '0.5s alternate both barThree',
        barThreeReverse: '0.5s alternate both barThreeReverse',
      }
    },
  },
  plugins: [
    plugin(({ addBase, addVariant, theme }) => {
      addBase({
        html: { color: theme('colors.gray.800') },
      });
      addVariant('not-last', '&:not(:last-child)')
    }),
  ],
}

