const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container:{
      screens:{
        'sm': '640px',  
        'md': '768px',
        'lg': '1024px',
      },
    },
    extend: {
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-2deg)'
            },
            '50%': {
                transform: 'rotate(2deg)'
            },
        },
         bounceslow : {
          '0%, 100%' :{
              transform: 'translateY(-15%)',
              'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
              transform: 'none',
              'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          }
      }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        bouncelow : 'bounceslow .75s infinite'
      },
    },
    
  },
  plugins: [],
};

module.exports = config;
