export const expirationStatusObj = {
  /** 소비기한 지남 */
  expired: {
    label: '만료',
    color: 'red',
    textColor: '!text-red-5',
    bgColor: 'bg-red-5',
    filterColor: 'bg-red-1',
    priority: 1,
    icon: 'AlertCircle',
    isExpired: true,
  },

  /** 임박 (0~3일) */
  expiredSoon: {
    label: '임박',
    color: 'yellow',
    textColor: '!text-yellow-7',
    bgColor: 'bg-yellow-7',
    filterColor: 'bg-yellow-3',
    priority: 3,
    icon: 'AlertTriangle',
    isExpired: false,
  },

  /** 여유 있음 */
  safe: {
    label: '신선',
    color: 'green',
    textColor: '!text-green-7',
    bgColor: 'bg-green-1',
    filterColor: 'bg-green-1',
    priority: 4,
    icon: 'CheckCircle',
    isExpired: false,
  },

  /** 계산 불가 */
  unknown: {
    label: '확인 필요',
    color: 'gray',
    textColor: '!text-neutral-7',
    bgColor: 'bg-neutral-1',
    filterColor: 'bg-neutral-3',
    priority: 5,
    icon: 'HelpCircle',
    isExpired: false,
  },
} as const;
