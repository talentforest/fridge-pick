import Text from '@/components/common/ui/Text';
import { durationUnitObj } from '@/constants';
import { RecommendedDurations } from '@/types/selectableItem';
import { StorageTypeId } from '@/types/storage';

type DurationTextProps = {
  recommendedDurations: RecommendedDurations;
  defaultStorage: StorageTypeId;
  textClassName?: string;
};

export default function DurationText({
  recommendedDurations,
  defaultStorage,
  textClassName = '',
}: DurationTextProps) {
  const forms = ['raw', 'packaged', 'homemade'] as const;

  return forms.map((form) => {
    const duration = recommendedDurations?.[form]?.[defaultStorage];
    if (!duration) return null;

    return (
      <Text key={form} className={`font-extrabold ${textClassName}`}>
        {duration.value}
        {durationUnitObj[duration.unit]}
      </Text>
    );
  });
}
