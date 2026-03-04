/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],

  theme: {
    extend: {
      fontSize: {
        xs: 10,
        sm: 12,
        md: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 22,
      },

      fontFamily: {
        normal: ['NanumSquareNeoRegular'],
        bold: ['NanumSquareNeoBold'],
        extrabold: ['NanumSquareNeoExtraBold'],
      },

      colors: {
        bg: 'var(--color-bg)',
        card: 'var(--color-card)',
        text: 'var(--color-text)',
        border: 'var(--color-border)',
        inactive: 'var(--color-inactive)',
      },

      letterSpacing: {
        tightest: '-0.05em',
        normal: '0em',
        wide: '0.02em',
        wider: '0.04em',
      },
    },
  },
  plugins: [],
};
