import { RecommendedDurations } from '@/types/selectableItem';
import { StorageTypeId } from '@/types/storage';

const forms = ['raw', 'packaged', 'homemade'] as const;

export function findDuration(durations: RecommendedDurations) {
  const available = forms.filter((form) => durations[form] !== undefined);
  if (available.length !== 1) return undefined;

  const form = available[0];
  if (form === undefined) return undefined;

  return durations[form];
}

export function findDurationByStorageType(
  recommendedDurations: RecommendedDurations,
  storageType: StorageTypeId,
) {
  return Object.values(recommendedDurations)[0]?.[storageType];
}
