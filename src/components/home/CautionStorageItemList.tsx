import CarouselContainer from '@/components/common/container/CarouselContainer';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import MenuListByExpiredSoonFood from '@/components/selectableItem/consumableFood/MenuListByExpiredSoonFood';
import SectionTitle from '@/components/common/header/SectionTitle';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import GridContainer from '@/components/common/container/GridContainer';
import { storageItemListByExpirationStatusAtom } from '@/atom/storageAtom';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { View } from 'react-native';
import { EnrichedStorageItem, StorageTypeId } from '@/types/storage';

interface CautionStorageItemListProps {
  title?: string;
  storageType?: StorageTypeId;
  onItemPress?: (item: EnrichedStorageItem) => void;
  isGridType?: boolean;
  type?: 'expiredSoon' | 'expired' | 'caution';
  hasCautionStorageItem?: boolean;
}

export default function CautionStorageItemList({
  title,
  hasCautionStorageItem,
  storageType,
  onItemPress,
  isGridType,
  type = 'caution',
}: CautionStorageItemListProps) {
  const storageItemListByStatus = useAtomValue(
    storageItemListByExpirationStatusAtom(type),
  );

  const storageItemListByStorage = useMemo(() => {
    if (!storageType) return storageItemListByStatus;

    return storageItemListByStatus.filter(
      (item) => item.storageItem.storage.type === storageType,
    );
  }, [storageItemListByStatus, storageType]);

  return storageItemListByStorage.length > 0 ? (
    <View className={`${hasCautionStorageItem ? 'h-[540px]' : ''} gap-y-3`}>
      <SectionTitle title={title || '지금 주의해야하는 식재료'} icon="ClockAlert" />

      {isGridType ? (
        <GridContainer columns={3}>
          {storageItemListByStorage.map((item, index) => (
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
        <CarouselContainer
          data={storageItemListByStorage}
          initialIndex={storageItemListByStorage.length}
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
          {/* 식재료를 이용한 메뉴 리스트 */}
          {hasCautionStorageItem
            ? ({ storageItem: focusedItem }) => (
                <MenuListByExpiredSoonFood
                  key={focusedItem.id}
                  focusedItem={focusedItem}
                />
              )
            : undefined}
        </CarouselContainer>
      )}
    </View>
  ) : (
    <></>
  );
}
