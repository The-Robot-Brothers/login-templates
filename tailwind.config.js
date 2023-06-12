/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.tsx',
    './components/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: 'linear-gradient(45deg, rgba(98,215,222,1) 10%, rgba(106,133,229,0.9753151260504201) 50%, rgba(231,57,255,1) 90%)'
      },
      fill: {
        icon: '#a9a9a9'
      }
    }

  },
  plugins: []
}
