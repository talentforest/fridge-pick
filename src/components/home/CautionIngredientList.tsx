import { cautionStorageItemListAtom } from '@/atom/storageItemAtom';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import CautionMealListByIngredient from '@/components/meal/CautionMealListByIngredient';
import FullBleedSection from '@/components/common/container/FullBleedSection';

interface ExpiringIngredientsProps {
  hasCautionIngredientMeal?: boolean;
}

export default function CautionIngredientList({
  hasCautionIngredientMeal = false,
}: ExpiringIngredientsProps) {
  const expiredStorageItemList = useAtomValue(cautionStorageItemListAtom('caution'));

  // TODO: 일단 최대 5개까지
  const MAX_LENGTH = 5;
  const slicedData = useMemo(() => {
    return expiredStorageItemList.slice(0, MAX_LENGTH);
  }, [expiredStorageItemList]);

  return (
    <FullBleedSection>
      <CarouselContainer
        data={slicedData}
        initialIndex={slicedData.length}
        itemWidth={0.25}
        hasNavigation
        spacing={8}
        centerFocus
        requiredMinimum={3}
        hasPagination
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item, index, isCurrIndex }) => (
          <CautionStorageItem
            index={index}
            storageItem={item.storageItem}
            isCurrIndex={isCurrIndex}
            remainingDays={item.remainingDays}
          />
        )}
      >
        {hasCautionIngredientMeal
          ? ({ storageItem: focusedItem }) => (
              <CautionMealListByIngredient
                key={focusedItem.id}
                focusedItem={focusedItem}
              />
            )
          : undefined}
      </CarouselContainer>
    </FullBleedSection>
  );
}
