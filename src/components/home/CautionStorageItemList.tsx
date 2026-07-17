import CarouselContainer from '@/components/common/container/CarouselContainer';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import MenuListByExpiredSoonFood from '@/components/selectableItem/consumableFood/MenuListByExpiredSoonFood';
import SectionTitle from '@/components/common/header/SectionTitle';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import GridContainer from '@/components/common/container/GridContainer';
import { storageItemListByExpirationStatusAtom } from '@/atom/storageAtom';
import { useAtomValue } from 'jotai';
import { View } from 'react-native';
import { StorageTypeId } from '@/types/storage';
import { StorageItemWithExpiration } from '@/utils';

interface CautionStorageItemListProps {
  title?: string;
  storageType?: StorageTypeId;
  onItemPress?: (item: StorageItemWithExpiration) => void;
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

  const storageItemListByStorage = () => {
    if (!storageType) return storageItemListByStatus;

    return storageItemListByStatus.filter(
      (item) => item.storageItem.storage.type === storageType,
    );
  };

  return storageItemListByStorage().length > 0 ? (
    <View className={`${hasCautionStorageItem ? 'h-[540px]' : ''} gap-y-3`}>
      <SectionTitle title={title || '임박 식재료'} icon="ClockAlert" hasShowAllBtn />

      {isGridType ? (
        <GridContainer columns={3}>
          {storageItemListByStorage().map((item, index) => (
            <TouchableOpacity
              key={item.storageItem.id}
              onPress={() => {
                if (onItemPress) return onItemPress(item);
              }}
            >
              <CautionStorageItem index={index + 1} cautionStorageItem={item} />
            </TouchableOpacity>
          ))}
        </GridContainer>
      ) : (
        <CarouselContainer
          data={storageItemListByStorage()}
          initialIndex={storageItemListByStorage.length}
          itemWidth={0.25}
          hasNavigation
          spacing={10}
          centerFocus
          hasPagination
          requiredMinimum={3}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, isCurrIndex, onPress }) =>
            onItemPress || onPress ? (
              <TouchableOpacity
                onPress={() => {
                  if (onItemPress) return onItemPress(item);
                  if (onPress) return onPress();
                }}
              >
                <CautionStorageItem
                  cautionStorageItem={item}
                  isCurrIndex={
                    storageItemListByStorage.length > 3 ? isCurrIndex : undefined
                  }
                />
              </TouchableOpacity>
            ) : (
              <CautionStorageItem cautionStorageItem={item} isCurrIndex={isCurrIndex} />
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
