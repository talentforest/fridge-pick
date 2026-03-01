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

        neutral: {
          900: 'var(--color-neutral-900)',
          800: 'var(--color-neutral-800)',
          500: 'var(--color-neutral-500)',
          200: 'var(--color-neutral-200)',
          0: 'var(--color-neutral-0)',
        },

        blue: {
          500: 'var(--color-blue-500)',
          200: 'var(--color-blue-200)',
        },

        red: {
          800: 'var(--color-red-500)',
          400: 'var(--color-red-200)',
        },

        yellow: {
          900: 'var(--color-yellow-900)',
          400: 'var(--color-yellow-400)',
          100: 'var(--color-yellow-100)',
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
