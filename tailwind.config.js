/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '550': '550px',
        '245': '245px',
        '437px': '437px',
        'inherit': 'inherit',
      },
      height: {
        '445': '445px',
        '1px': '1px',
        '2px': '2px',
        'inherit': 'inherit',
      },
      backgroundColor: {
        'e3e3e3': "#e3e3e3",
        'semitransparent': '#00000057',
        '1313137e': '#1313137e',
        '0000003d': "#0000003d"
      },
      backgroundImage: {
        'caroselImg': "url('https://images.livemint.com/dev/ico_caraousel2.svg')"
      },
      fontFamily: {
        'Lato': "'Lato', sans-serif"
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '60': '60',
      },
      backdropBlur: {
        '100': '100px'
      },
      borderColor: {
        "f4dd09ff": '#f4dd09ff',
        "d0d0d05e": '#d0d0d05e',
        '909090': '#909090',
        'f1f1f1': '#f1f1f1',
        '#f6f6f6': '#f6f6f6'
      },
      borderWidth: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px'
      },
      colors: {
        'FFFFFF': '#FFFFFF',
        '212121': '#212121',
        '474747': '#474747',
        '363636': '#363636',
        '777777': '#777777'

      },
      minHeight: {
        '293': '293px'
      },
      screens: {
        md: { 'max': "768px" },
        mobileLg: "425px",
        tablet: "768px",
        laptopSm: "800px",
        iPadAir: "820px",
        laptopMd: "1024px",
        laptopLg: "1280px",
        desktopSm: "1366px",
        desktopMd: "1440px",
        desktopLg: "1920px",
      },

    },
  },
  plugins: [],
}
