  
  module.exports = {
    theme: {
        extend: {
            transitionProperty: {
               'max-height': 'max-height',
            },
            maxHeight: {
                '96': '24rem',
                '0': '0',
            },
            rotate: {
                '360': '360deg',
               },
            inset: {
                "1": "0.25rem",
                "2": "0.5rem",
                "3": "0.75rem",
                "4": "1rem",
                "5": "1.25rem",
                "6": "1.5rem",
                "7": "1.75rem",
                "8": "2rem",
                "9": "2.25rem",
                "10": "2.5rem",
                "11": "2.75rem",
                "12": "3.0rem",
                "13": "3.25rem",
                "14": "3.5rem",
                "15": "3.75rem",
                "16": "4rem",
                "17": "4.25rem",
                "18": "4.5rem",
                "19": "4.75rem",
                "20": "5rem",
            },
        },
        backgroundImage: {
            'hero-pattern': "url(/assets/images/city-render.jpg)",
           },
        colors: {
            transparent: 'transparent',
            white: '#fff',
            black: '#000',
            gray: {
                light: 'var(--color-gray-light)',
                default: 'var(--color-gray)',
                dark: 'var(--color-gray-dark)'
            },
            teal: {
                default: 'var(--color-teal)',
                light: 'var(--color-teal-light)',
                dark: 'var(--color-teal-dark)'
            },
            mint: {
                default: 'var(--color-mint)',
                light: 'var(--color-mint-light)',
                dark: 'var(--color-mint-dark)'
            },
            green: {
                default: 'var(--color-green)',
                light: 'var(--color-green-light)',
                dark: 'var(--color-green-dark)',
            },
            lightgreen: {
                default: 'var(--color-lightgreen)',
                light: 'var(--color-lightgreen-light)',
                dark: 'var(--color-lightgreen-dark)',
            },
            twitter: "#1DA1F2",
            linkedin: "#2867B2"
        },
            linearGradientColors: theme => theme('colors'),
            radialGradientColors: theme => theme('colors'),
            conicGradientColors: theme => theme('colors'),
    },
    
    variants: {
        maxHeight: ['responsive', 'hover', 'focus', 'group-hover'],
        padding: ['responsive', 'hover', 'focus', 'group-hover'],

    },
    plugins: [
        require('tailwindcss-gradients'),
        require('tailwindcss-background-extended'),
      ],
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
      ]
    },
  }
 