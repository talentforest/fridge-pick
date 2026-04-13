import { expiredItemListByStorageAtom } from '@/atom/storageItemAtom';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { View } from 'react-native';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import SectionTitle from '@/components/common/SectionTitle';
import CautionStorageItem from '@/components/storage/CautionStorageItem';

export default function ExpiringIngredients() {
  const expiredStorageItemList = useAtomValue(expiredItemListByStorageAtom);

  const MAX_LENGTH = 5;
  const slicedData = useMemo(() => {
    return expiredStorageItemList.slice(0, MAX_LENGTH);
  }, [MAX_LENGTH]);

  return (
    <View className="gap-y-3">
      <SectionTitle title="지금 주의해야하는 식재료" icon="ClockAlert" />

      <FullBleedSection>
        <CarouselContainer
          data={slicedData}
          initialIndex={slicedData.length}
          itemWidth={0.28}
          hasNavigation
          spacing={6}
          centerFocus
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index, isCurrIndex }) => (
            <CautionStorageItem
              storageItem={item}
              index={index}
              isCurrIndex={isCurrIndex}
            />
          )}
        />
      </FullBleedSection>
    </View>
  );
}
