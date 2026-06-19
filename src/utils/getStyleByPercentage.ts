export const getPossessionStatus = (percentage: number) => {
  if (percentage === 100) return 'complete';
  if (percentage >= 70) return 'good';
  if (percentage >= 30) return 'partial';
  if (percentage > 0) return 'poor';

  return 'empty';
};

export const styleByPercentageObj = {
  complete: {
    bg: 'bg-green-5',
    border: 'border-green-3',
    text: 'text-green-7',
  },

  good: {
    bg: 'bg-yellow-5',
    border: 'border-yellow-3',
    text: 'text-yellow-7',
  },

  partial: {
    bg: 'bg-yellow-5',
    border: 'border-yellow-3',
    text: 'text-yellow-7',
  },

  poor: {
    bg: 'bg-red-5',
    border: 'border-red-5',
    text: 'text-red-5',
  },

  empty: {
    bg: 'bg-red-5',
    border: 'border-red-5',
    text: 'text-red-5',
  },
} as const;
