/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        gifTitles: ['Permanent Marker', 'cursive']
      },
      colors: {
        gifBlue: '#4C4C6D',
        gifGreen: '#1B9C85',
        gifWhite: '#E8F6EF',
        gifBlack: '#333333',
        gifyellow: '#FFE194'
      }
    }
  },
  plugins: []
}
