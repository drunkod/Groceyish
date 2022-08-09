module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      colors: {
        green: { 100: '#DEF9EC', 200: '#237D64' },
        blue: { 100: '#F2F3F4', 200: '#253D4E' },
        yellow: { 100: '#FFD480', 200: '#FDC040' },
        gray: { 100: '#F1F1F1', 200: '#636363' },
      },

      screens: {
        '4xs': '360px',
        '3xs': '400px',
        '2xs': '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },

      backgroundImage: {
        overlayGreen:
          "linear-gradient(0deg, rgba(204, 233, 220, 0.7), rgba(204, 233, 220, 0.7)), url('https://res.cloudinary.com/cloud-m98/image/upload/v1658064467/Groceyish/Vegtables-Illustrations.webp')",
        overlayYellow:
          "linear-gradient(0deg, rgba(255, 245, 225, 0.7), rgba(255, 245, 225, 0.7)), url('https://res.cloudinary.com/cloud-m98/image/upload/v1658064467/Groceyish/Vegtables-Illustrations.webp')",
        'intro-slide-1':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658690948/Groceyish/slider-1.webp')",
        'intro-slide-2':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658690948/Groceyish/slider-2.webp')",
        'intro-slide-3':
          "url('https://res.cloudinary.com/cloud-m98/image/upload/v1658690948/Groceyish/slider-3.webp')",
      },

      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
};
