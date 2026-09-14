import CarouselContainer from '@/components/common/container/CarouselContainer';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import FoodListByExpiredSoonFood from '@/components/selectableItem/FoodListByExpiredSoonFood';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import GridContainer from '@/components/common/container/GridContainer';
import { storageItemListByExpirationStatusAtom } from '@/atom/storageAtom';
import { useAtomValue } from 'jotai';
import { View } from 'react-native';
import { StorageTypeId } from '@/types/storage';
import { StorageItemWithExpiration } from '@/utils';
import { useMemo } from 'react';
import { useOverlay } from '@/hooks';
import StorageItemSheet from '@/components/trackedItem/storage/StorageItemSheet';

interface CautionStorageItemListProps {
  storageType?: StorageTypeId;
  isGridType?: boolean;
  type?: 'expiredSoon' | 'expired' | 'caution';
  hasFoodListByExpiredSoonFood?: boolean;
}

export default function CautionStorageItemList({
  storageType,
  type = 'caution',
  isGridType,
  hasFoodListByExpiredSoonFood,
}: CautionStorageItemListProps) {
  const storageItemListByStatus = useAtomValue(
    storageItemListByExpirationStatusAtom(type),
  );

  const { openSheet } = useOverlay();

  const storageItemListByStorage = useMemo(() => {
    if (!storageType) return storageItemListByStatus;

    return storageItemListByStatus.filter(
      (item) => item.storageItem.storage.type === storageType,
    );
  }, [storageItemListByStatus, storageType]);

  const onCautionItemPress = ({ storageItem }: StorageItemWithExpiration) => {
    openSheet({
      keyboardBehavior: 'extend',
      render: () => <StorageItemSheet storageItem={storageItem} />,
    });
  };

  return storageItemListByStorage.length > 0 ? (
    <>
      {isGridType ? (
        <GridContainer columns={4} gap={8} horizontalInset={24}>
          {storageItemListByStorage.map((item, index) => (
            <TouchableOpacity
              key={item.storageItem.id}
              onPress={() => {
                if (onCautionItemPress) return onCautionItemPress(item);
              }}
            >
              <CautionStorageItem
                isFlexCol={isGridType}
                index={index + 1}
                cautionStorageItem={item}
                className="!rounded-xl "
              />
            </TouchableOpacity>
          ))}
        </GridContainer>
      ) : (
        <CarouselContainer
          data={storageItemListByStorage}
          initialIndex={storageItemListByStorage.length}
          itemWidth={0.35}
          hasNavigation
          centerFocus
          hasPagination
          requiredMinimum={2}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, isCurrIndex, onPress }) =>
            !hasFoodListByExpiredSoonFood && (onCautionItemPress || onPress) ? (
              <TouchableOpacity
                onPress={() => {
                  if (onCautionItemPress) {
                    return onCautionItemPress(item);
                  }
                  if (onPress) {
                    return onPress();
                  }
                }}
              >
                <CautionStorageItem cautionStorageItem={item} />
              </TouchableOpacity>
            ) : (
              <View
                className={`${hasFoodListByExpiredSoonFood && isCurrIndex ? 'rounded-t-xl bg-indigo-1' : ''} `}
              >
                <CautionStorageItem
                  cautionStorageItem={item}
                  className={
                    isCurrIndex
                      ? '!rounded-b-none !rounded-t-xl !border-0 !bg-transparent'
                      : ''
                  }
                />
              </View>
            )
          }
        >
          {/* 식재료를 이용한 메뉴 리스트 */}
          {hasFoodListByExpiredSoonFood
            ? ({ storageItem: focusedItem }) => (
                <FoodListByExpiredSoonFood
                  key={focusedItem.id}
                  focusedItem={focusedItem}
                />
              )
            : undefined}
        </CarouselContainer>
      )}
    </>
  ) : (
    <></>
  );
}
