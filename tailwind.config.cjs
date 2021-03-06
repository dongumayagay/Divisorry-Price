const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px'
			}
		},
		extend: {
			keyframes: {
				sway: {
					'0%, 100%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					}
				},
				bounceslow: {
					'0%, 100%': {
						transform: 'translateY(-15%)',
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
					},
					'50%': {
						transform: 'none',
						'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
					}
				},
				scrolltext: {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				}
			},
			animation: {
				sway: 'sway 2s ease-in-out infinite',
				bouncelow: 'bounceslow .75s infinite',
				scrolltext: 'scrolltext 20s linear infinite'
			}
		}
	},

	plugins: [forms]
};

module.exports = config;
