import { EnrichedStorageItem, ExpirationStatus, StorageItem } from '@/types/storage';
import { getExpirationStatus, getRemainingDays } from '@/utils/getExpirationDate';
import { enrichTrackedItem } from '@/utils/enrichItem';

export type StorageItemWithExpiration = {
  storageItem: EnrichedStorageItem;
  remainingDays: number;
  expirationStatus: ExpirationStatus;
};

type ExpirationFilter = ExpirationStatus | 'caution' | 'available';

/** 소비기한 상태별 보관함 아이템 목록 반환 */
export const getStorageItemListByExpirationStatus = (
  storageItemList: StorageItem[],
  filter: ExpirationFilter,
): StorageItemWithExpiration[] => {
  return storageItemList
    .map((item) => {
      const remainingDays = getRemainingDays(item.expiresAt);
      const expirationStatus = getExpirationStatus(remainingDays);

      return {
        storageItem: enrichTrackedItem(item),
        remainingDays,
        expirationStatus,
      };
    })
    .filter(({ expirationStatus }) => {
      switch (filter) {
        case 'safe':
          return expirationStatus === 'safe';

        case 'expiredSoon':
          return expirationStatus === 'expiredSoon';

        case 'expired':
          return expirationStatus === 'expired';

        case 'unknown':
          return expirationStatus === 'unknown';

        case 'available':
          return expirationStatus === 'safe' || expirationStatus === 'expiredSoon';

        case 'caution':
          return expirationStatus === 'expired' || expirationStatus === 'expiredSoon';
      }
    })
    .sort((a, b) => a.remainingDays - b.remainingDays);
};
