module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'roseGold': '#b76e79'
      },
      fontFamily: {
        'primary': ['Poppins'],
        'secondary': ['Fuggles']
      },
      backgroundImage: theme => ({
        'image': "url('../images/banner.jpeg')"
      }),
      animation: {
        'details': 'details 0.8s ease-in-out infininpm te',
        'modal': 'modal 0.8s ease-in-out forwards'
      },
      keyframes: {
        details: {  
          'from': {
            bottom: '0px'
          },
          'to': {
            top: '20px'
          }
        },
        modal: {
          'from': {
            top: '-50%'
          },
          'to': {
            top: '50%'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
