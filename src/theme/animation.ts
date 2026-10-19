export const motion = {
  duration: { instant: 100, fast: 160, normal: 240, slow: 320 },
  easing: {
    standard: [0.2, 0, 0, 1],
    enter: [0, 0, 0, 1],
    exit: [0.3, 0, 1, 1],
  },
} as const;
