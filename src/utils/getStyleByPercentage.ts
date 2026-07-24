export const getPossessionStatus = (percentage: number) => {
  if (percentage === 100) return 'complete';
  if (percentage >= 70) return 'good';
  if (percentage >= 30) return 'partial';
  if (percentage > 0) return 'poor';

  return 'empty';
};

export const styleByPercentageObj = {
  complete: {
    icon: 'green',
    bg: 'bg-green-5',
    border: 'border-green-3',
    text: 'text-green-7',
  },

  good: {
    icon: 'yellow',
    bg: 'bg-yellow-5',
    border: 'border-yellow-3',
    text: 'text-yellow-7',
  },

  partial: {
    icon: 'yellow',
    bg: 'bg-yellow-5',
    border: 'border-yellow-3',
    text: 'text-yellow-7',
  },

  poor: {
    icon: 'red',
    bg: 'bg-red-5',
    border: 'border-red-3',
    text: 'text-red-5',
  },

  empty: {
    icon: 'red',
    bg: 'bg-red-5',
    border: 'border-red-3',
    text: 'text-red-5',
  },
} as const;
