import CarouselContainer from '@/components/common/container/CarouselContainer';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import CautionMealListByIngredient from '@/components/meal/CautionMealListByIngredient';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import SectionTitle from '@/components/common/header/SectionTitle';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import GridContainer from '@/components/common/container/GridContainer';
import { cautionStorageItemListAtom } from '@/atom/storageItemAtom';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { View } from 'react-native';
import { EnrichStorageItem, StorageTypeId } from '@/types/storage';

interface ExpiringIngredientsProps {
  hasCautionIngredientMeal?: boolean;
  title?: string;
  storageType?: StorageTypeId;
  onItemPress?: (item: EnrichStorageItem) => void;
  isGridType?: boolean;
  type?: 'expiredSoon' | 'expired' | 'caution';
}

export default function CautionIngredientList({
  title,
  hasCautionIngredientMeal,
  storageType,
  onItemPress,
  isGridType,
  type = 'caution',
}: ExpiringIngredientsProps) {
  const expiredStorageItemList = useAtomValue(cautionStorageItemListAtom(type));

  const cautionStorageItemList = useMemo(() => {
    if (!storageType) return expiredStorageItemList;

    return expiredStorageItemList.filter(
      (item) => item.storageItem.storage.type === storageType,
    );
  }, [expiredStorageItemList, storageType]);

  return cautionStorageItemList.length > 0 ? (
    <View className={`${hasCautionIngredientMeal ? 'h-[540px]' : ''} gap-y-3`}>
      <SectionTitle title={title || '지금 주의해야하는 식재료'} icon="ClockAlert" />

      {isGridType ? (
        <GridContainer columns={4}>
          {cautionStorageItemList.map((item, index) => (
            <TouchableOpacity
              key={item.storageItem.id}
              onPress={() => {
                if (onItemPress) return onItemPress(item.storageItem);
              }}
            >
              <CautionStorageItem
                index={index + 1}
                storageItem={item.storageItem}
                remainingDays={item.remainingDays}
              />
            </TouchableOpacity>
          ))}
        </GridContainer>
      ) : (
        <FullBleedSection>
          <CarouselContainer
            data={cautionStorageItemList}
            initialIndex={cautionStorageItemList.length}
            itemWidth={0.25}
            hasNavigation
            spacing={8}
            centerFocus
            hasPagination
            requiredMinimum={3}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({ item, isCurrIndex, onPress }) =>
              onItemPress || onPress ? (
                <TouchableOpacity
                  onPress={() => {
                    if (onItemPress) return onItemPress(item.storageItem);
                    if (onPress) return onPress();
                  }}
                >
                  <CautionStorageItem
                    storageItem={item.storageItem}
                    isCurrIndex={isCurrIndex}
                    remainingDays={item.remainingDays}
                  />
                </TouchableOpacity>
              ) : (
                <CautionStorageItem
                  storageItem={item.storageItem}
                  isCurrIndex={isCurrIndex}
                  remainingDays={item.remainingDays}
                />
              )
            }
          >
            {/* 식재료를 이용한 메뉴 */}
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
      )}
    </View>
  ) : (
    <></>
  );
}
