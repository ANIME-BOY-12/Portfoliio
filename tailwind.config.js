/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      dropShadow: {
        'text': '0 0px 10px #0abab4c7',
        'original': '0 0px 10px rgb(243 244 246)',
        'original2': '0 0px 5px rgb(243 244 246)',
        'original3': '0 0px 2px rgb(243 244 246)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(10, 171, 180, 0.78) 0%, rgba(10, 171, 180, 0) 100%)',
      },
      boxShadow: {
        'all-around': '0px 0px 50px #0abab4c7',
      },
      keyframes: {
        bounce: {
          '0%': {opacity: '0.2' , scale: '0.2'},
          '100%': {opacity: '1' , scale: '1'}
        },
        animation: {
          bounce: 'bounce linear',
        },  
      },
    },
  },
  plugins: [],
}

