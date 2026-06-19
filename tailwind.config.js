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

        inactive: {
          bg: 'var(--color-inactive-bg)',
          text: 'var(--color-inactive-text)',
        },

        red: {
          9: 'var(--color-red-9)',
          7: 'var(--color-red-7)',
          5: 'var(--color-red-5)',
          3: 'var(--color-red-3)',
          1: 'var(--color-red-1)',
        },

        blue: {
          9: 'var(--color-blue-9)',
          7: 'var(--color-blue-7)',
          5: 'var(--color-blue-5)',
          3: 'var(--color-blue-3)',
          1: 'var(--color-blue-1)',
        },

        ice: {
          7: 'var(--color-ice-7)',
          5: 'var(--color-ice-5)',
          3: 'var(--color-ice-3)',
        },

        indigo: {
          5: 'var(--color-indigo-5)',
          3: 'var(--color-indigo-3)',
        },

        neutral: {
          9: 'var(--color-neutral-9)',
          7: 'var(--color-neutral-7)',
          5: 'var(--color-neutral-5)',
          3: 'var(--color-neutral-3)',
          1: 'var(--color-neutral-1)',
        },

        yellow: {
          9: 'var(--color-yellow-9)',
          7: 'var(--color-yellow-7)',
          5: 'var(--color-yellow-5)',
          3: 'var(--color-yellow-3)',
          1: 'var(--color-yellow-1)',
        },

        green: {
          9: 'var(--color-green-9)',
          7: 'var(--color-green-7)',
          5: 'var(--color-green-5)',
          3: 'var(--color-green-3)',
          1: 'var(--color-green-1)',
        },
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
