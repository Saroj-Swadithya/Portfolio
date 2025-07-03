/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
  lavenderBlue: '#E3E4FA',
  lavenderW3C: '#E6E6FA',
  blush: '#FFE6E8',
  blushRed: '#E56E94',
  darkLavender: '#734F96',
  lavenderPurple: '#967BB6',
  blushPink: '#E6A9EC',
  lavenderPinocchio: '#EBDDE2',

  // Optional: keep existing ones
  softWhite: '#fefefe',
  mutedGray: '#f5f5f5',
  primary: '#e0b1cb', // Or replace with one of your new colors
},
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};