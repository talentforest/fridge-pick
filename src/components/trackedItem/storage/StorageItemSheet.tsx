import { changeStorageItemAtom, deleteStorageItemListAtom } from '@/atom/storageItemAtom';
import { image_empty_plate, storageObj } from '@/constants';
import { useOverlay, useGetMealList } from '@/hooks';
import { useSetAtom } from 'jotai';
import { getTrackedItemLabel } from '@/utils';
import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { useState } from 'react';
import { Image, View } from 'react-native';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SquareBtn from '@/components/common/SquareBtn';
import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import StorageModal from '@/components/trackedItem/storage/StorageModal';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import Text from '@/components/common/ui/Text';
import Card from '@/components/common/ui/Card';
import ModalHeader from '@/components/common/header/ModalHeader';

interface StorageItemSheetProps {
  storageItem: EnrichStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const { closeModal, openModal, closeSheet, alert, confirm } = useOverlay();

  const { id, storage, expiresAt } = storageItem;

  const [editableCurrItem, onCurrItemChange] = useState<
    Pick<StorageItem, 'memo' | 'expiresAt'>
  >({ expiresAt, memo: storageItem.memo });

  const { getHasStorageItemMealList } = useGetMealList();

  const mealListHasStorageItem = getHasStorageItemMealList(storageItem);

  const deleteItems = useSetAtom(deleteStorageItemListAtom);

  const onItemChange = useSetAtom(changeStorageItemAtom);

  const onEditStoragePress = () => {
    openModal({
      hasDim: true,
      children: (
        <StorageModal
          currentValue={storage.type}
          onItemChange={async (newData) => {
            onItemChange({ id, newData });

            closeModal();
            closeSheet();

            alert({
              title: '보관위치 변경 알림',
              message: `식재료를 ${storageObj[newData.storage.type].label}으로 옮겼습니다.`,
            });
          }}
        />
      ),
    });
  };

  const onDeletePress = async () => {
    const ok = await confirm({
      title: '삭제 알림',
      message: `정말로 냉장고에서 삭제하시겠습니까?`,
    });

    if (!ok) return;

    deleteItems([id]);
    closeSheet();
  };

  if (!storageItem) return;

  const label = getTrackedItemLabel(storageItem).label;

  return (
    <View className="my-2 w-full flex-1 gap-y-1.5">
      <ModalHeader hasX={false} title="식재료 정보" />

      <View className="flex-row items-start justify-between rounded-2xl  border-gray-300 py-1">
        <TrackedItemImageLabel
          item={storageItem}
          imageSize={85}
          hasCategory
          textClassName="text-base"
          isHorizontal
        />

        <FavoriteBtn storageItem={storageItem} className="mr-3 mt-2 p-1" />
      </View>

      {storageItem && (
        <View className="gap-y-3">
          {/* 소비기한 */}
          <FormDateInput
            currDate={editableCurrItem.expiresAt}
            onItemChange={(newData) => {
              onCurrItemChange({ ...editableCurrItem, ...newData });
              onItemChange({ id, newData });
            }}
          />

          <View className="mt-3 flex-row gap-x-3">
            {/* 보관위치 */}
            <SquareBtn
              iconName="Edit"
              name="보관위치 변경"
              className="flex-1"
              bgColor="indigo"
              onPress={onEditStoragePress}
            />
            <SquareBtn
              iconName="Trash2"
              name="냉장고에서 제거"
              className="flex-1"
              bgColor="yellow"
              onPress={onDeletePress}
            />
          </View>
        </View>
      )}

      <View className="my-16 gap-y-3">
        <SectionTitle
          icon="HandPlatter"
          color="yellow"
          className="items-center !pl-0"
          highlight={label}
          title={`${label} 활용 메뉴`}
        />
        {mealListHasStorageItem.length > 0 ? (
          <FullBleedSection>
            <CarouselContainer
              data={mealListHasStorageItem}
              initialIndex={mealListHasStorageItem.length}
              itemWidth={0.5}
              hasNavigation
              hasPagination
              spacing={20}
              centerFocus
              keyExtractor={(_, index) => `${index}`}
              renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
            />
          </FullBleedSection>
        ) : (
          <Card className="h-56 items-center justify-center gap-y-2">
            <Image source={image_empty_plate} className="aspect-square h-[90px]" />
            <Text className="pb-4 text-neutral-7">활용한 메뉴가 없어요</Text>
          </Card>
        )}
      </View>
    </View>
  );
}
