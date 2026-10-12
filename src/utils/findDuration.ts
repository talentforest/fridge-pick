import { RecommendedDurations } from '@/types/selectableItem';

const forms = ['raw', 'packaged', 'homemade'] as const;

export function findDuration(durations: RecommendedDurations) {
  const available = forms.filter((form) => durations[form] !== undefined);
  if (available.length !== 1) return undefined;

  const form = available[0];
  if (form === undefined) return undefined;

  return durations[form];
}
