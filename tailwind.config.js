/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Views/**/*.{html,cshtml}',
    './wwwroot/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'brand-100': 'var(--color-brand-100)',
        'brand-200': 'var( --color-brand-200)',
        'brand-300': 'var(--color-brand-300)',
        'brand-400': 'var(--color-brand-400)',
        secondary: 'var(--color-secondary)',
        'light-blue': 'var(--color-light-blue)',
        body: 'var(--color-body)',
        'light-100': 'var(--color-light-100)',
        'light-200': 'var(--color-light-200)',
        'light-300': 'var(--color-light-300)',
        'light-400': 'var(--color-light-400)', // DO NOT USE
        'light-500': 'var(--color-light-500)',
        'light-600': 'var(--color-light-600)',
        indicator: 'var(--color-indicator)',
        white: 'var(--color-white)',
        oddbutton: 'var(--color-oddbutton)',
        'dark-brand-100': 'var(--color-dark-brand-100)',
        'dark-brand-200': 'var( --color-dark-brand-200)',
        'dark-brand-300': 'var(--color-dark-brand-300)',
        'dark-brand-400': 'var(--color-dark-brand-400)',
        'dark-light-100': 'var(--color-dark-light-100)',
        'dark-body': 'var(--color-dark-body)',
        'dark-500': 'var( --color-dark-500)',
        'dark-600': 'var( --color-dark-600)',
        'dark-oddbutton': 'var(--color-dark-oddbutton)'
      },
      screens: {
        xs: '600px',
        sm: '1024px',
        md: '1280px',
        lg: '1680px',
        xl: '1920px'
      },
      fontSize: {
        xxs: '10px',
        xs: '11px',
        sm: '12px',
        tiny: '13px',
        base: '14px',
        lg: '15px',
        xl: '16px',
        '2xl': '17px',
        '3xl': '18px',
        '4xl': '19px',
        '5xl': '20px',
        '6xl': '21px',
        '7xl': '22px',
        '8xl': '24px'
      }
    },
  },
  plugins: [],
}

