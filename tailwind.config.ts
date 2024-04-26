/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            backgroundImage: {
                // checkbox
                'icon-checkbox-on': "url('~/public/images/icons/ico_checkbox_on.svg')",
                'icon-checkbox-err-on':
                    "url('~/public/images/icons/ico_checkbox_err_on.svg')",
                'icon-checkbox-dis-on':
                    "url('~/public/images/icons/ico_checkbox_dis_on.svg')",
                'icon-checkbox02-off':
                    "url('~/public/images/icons/ico_checkbox02_off.svg')",
                'icon-checkbox02-on':
                    "url('~/public/images/icons/ico_checkbox02_on.svg')",
                'icon-checkbox03-on':
                    "url('~/public/images/icons/ico_checkbox03_on.svg')",
                // radio buttons
                'icon-radio-on': "url('~/public/images/icons/ico_radio_on.svg')"
            },
            colors: {
                default: 'black', // text black
                primary: '#F9482D', // moon main color
                secondary1: '#DB3939',
                secondary2: '#5A82D2',
                info: '#2950B1',
                positive: '#2F9E44',
                error: '#DF2101',
                notice: '#F9482D',
                gray1: '#FBFBFB',
                gray2: '#F8F8F8',
                gray3: '#F0F0F0',
                gray4: '#E5E5E5',
                gray5: '#CCCCCC',
                gray6: '#999999',
                gray7: '#767676',
                gray8: '#555555',
                gray9: '#333333',
                gray10: '#e9ecef'
            },
            size: {
                '18': '1.125rem'
            },
            fontFamily: {
                default: ['var(--font-default)']
            },
            fontWeight: {
                default: '400',
                regular: '400',
                medium: '500',
                bold: '700'
            },
            // screens: {
            //     mo: breakPoints.mo, // => @media (min-width: 375px), (max-widtn: 1024px)
            //     pc: breakPoints.pc // => @media (min-width: 1025px) ~
            // },
            width: {
                large: '1280px',
                medium: '1140px',
                small: '530px'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            boxShadow: {
                custom: '0px 0px 24px 0px rgba(0, 0, 0, 0.10)'
            }
        }
    },
    // plugins: [require('tailwindcss-animate')]
}