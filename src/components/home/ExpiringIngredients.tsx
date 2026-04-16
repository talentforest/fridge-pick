import { expiredItemListByStorageAtom } from '@/atom/storageItemAtom';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { View } from 'react-native';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import SectionTitle from '@/components/common/header/SectionTitle';
import GridContainer from '@/components/common/container/GridContainer';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';

export default function ExpiringIngredients() {
  const expiredStorageItemList = useAtomValue(expiredItemListByStorageAtom);

  const MAX_LENGTH = 5;

  const slicedData = useMemo(() => {
    return expiredStorageItemList.slice(0, MAX_LENGTH);
  }, [expiredStorageItemList]);

  return (
    <View className="gap-y-3">
      <SectionTitle title="지금 주의해야하는 식재료" icon="ClockAlert" />

      {slicedData.length > 3 ? (
        <FullBleedSection>
          <CarouselContainer
            data={slicedData}
            initialIndex={slicedData.length}
            itemWidth={0.26}
            hasNavigation
            spacing={8}
            centerFocus
            keyExtractor={(_, index) => `${index}`}
            renderItem={({ item, index, isCurrIndex }) => (
              <CautionStorageItem
                storageItem={item.storageItem}
                index={index}
                isCurrIndex={isCurrIndex}
                remainingDays={item.remainingDays}
              />
            )}
          />
        </FullBleedSection>
      ) : (
        <GridContainer columns={3}>
          {slicedData.map(({ storageItem, remainingDays }) => (
            <CautionStorageItem
              key={storageItem.id}
              storageItem={storageItem}
              remainingDays={remainingDays}
            />
          ))}
        </GridContainer>
      )}
    </View>
  );
}
