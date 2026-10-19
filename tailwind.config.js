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
        heavy: ['NanumSquareNeoHeavy'],
      },

      colors: {
        // Primary
        primary: 'var(--color-primary)',
        primaryBackground: 'var(--color-primaryBackground)',

        // Background
        screen: 'var(--color-screen)',
        card: 'var(--color-card)',
        bottomSheet: 'var(--color-bottomSheet)',
        overlay: 'var(--color-overlay)',

        // Border
        divider: 'var(--color-divider)',
        border: 'var(--color-border)',
        inputBorder: 'var(--color-inputBorder)',
        focusBorder: 'var(--color-focusBorder)',
        primaryBorder: 'var(--color-primaryBorder)',

        // Text
        text: 'var(--color-text)',
        textDescription: 'var(--color-textDescription)',
        textPlaceholder: 'var(--color-textPlaceholder)',

        // Unselected
        unselectedBackground: 'var(--color-unselectedBackground)',
        unselectedText: 'var(--color-unselectedText)',
        unselectedBorder: 'var(--color-unselectedBorder)',

        // Disabled
        disabledBackground: 'var(--color-disabledBackground)',
        disabledText: 'var(--color-disabledText)',
        disabledBorder: 'var(--color-disabledBorder)',

        // Input
        input: 'var(--color-input)',

        // Status
        successText: 'var(--color-successText)',
        successBackground: 'var(--color-successBackground)',
        warningText: 'var(--color-warningText)',
        warningBackground: 'var(--color-warningBackground)',
        errorText: 'var(--color-errorText)',
        errorBackground: 'var(--color-errorBackground)',

        green: {
          9: 'var(--color-green-9)',
          7: 'var(--color-green-7)',
          5: 'var(--color-green-5)',
          3: 'var(--color-green-3)',
          1: 'var(--color-green-1)',
        },

        amber: {
          9: 'var(--color-amber-9)',
          7: 'var(--color-amber-7)',
          5: 'var(--color-amber-5)',
          3: 'var(--color-amber-3)',
          1: 'var(--color-amber-1)',
        },

        red: {
          9: 'var(--color-red-9)',
          7: 'var(--color-red-7)',
          5: 'var(--color-red-5)',
          3: 'var(--color-red-3)',
          1: 'var(--color-red-1)',
          0: 'var(--color-red-0)',
        },

        blue: {
          9: 'var(--color-blue-9)',
          7: 'var(--color-blue-7)',
          5: 'var(--color-blue-5)',
          3: 'var(--color-blue-3)',
          1: 'var(--color-blue-1)',
        },

        ice: {
          9: 'var(--color-ice-9)',
          7: 'var(--color-ice-7)',
          5: 'var(--color-ice-5)',
          3: 'var(--color-ice-3)',
          1: 'var(--color-ice-1)',
        },

        neutral: {
          9: 'var(--color-neutral-9)',
          7: 'var(--color-neutral-7)',
          5: 'var(--color-neutral-5)',
          3: 'var(--color-neutral-3)',
          1: 'var(--color-neutral-1)',
          0: 'var(--color-neutral-0)',
        },
      },

      letterSpacing: {
        tight: '-0.08em',
        normal: '-0.04em',
        wide: '0em',
        wider: '0.04em',
      },

      opacity: {
        disabled: 0.4,
        pressed: 0.72,
        overlay: 0.48,
      },
    },
  },
  plugins: [],
};
