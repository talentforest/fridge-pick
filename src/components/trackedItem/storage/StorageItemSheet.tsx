import { changeStorageItemAtom, deleteStorageItemListAtom } from '@/atom/storageItemAtom';
import { currMealList, storageObj } from '@/constants';
import { useOverlay } from '@/hooks/common/useOverlay';
import { useSetAtom } from 'jotai';
import { getTrackedItemLabel } from '@/utils';
import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { useState } from 'react';
import { View } from 'react-native';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SquareBtn from '@/components/common/SquareBtn';
import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import StorageModal from '@/components/trackedItem/storage/StorageModal';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';
import FavoriteBtn from '@/components/common/FavoriteBtn';

interface StorageItemSheetProps {
  storageItem: EnrichStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const { closeModal, openModal, closeSheet, alert, confirm } = useOverlay();

  const { id, storage, expiresAt } = storageItem;

  const [editableCurrItem, onCurrItemChange] = useState<
    Pick<StorageItem, 'memo' | 'expiresAt'>
  >({ expiresAt, memo: storageItem.memo });

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

  return (
    <View className="my-2 w-full flex-1 gap-y-1.5">
      <View className="flex-row items-start justify-between">
        <TrackedItemImageLabel
          item={storageItem}
          imageSize={85}
          hasCategory
          textClassName="text-base"
          isHorizontal
        />

        <FavoriteBtn storageItem={storageItem} />
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

          {/* 메모사항 */}
          {/* {isMemoEditing ? (
            <FormMemo
              autoFocus={true}
              currMemo={currItem?.memo || ''}
              onItemChange={(newData) => onItemChange({ id, newData })}
              onSubmit={() => {
                setIsMemoEditing((prev) => !prev);
                shrinkSheet();
              }}
              isSheetInput={true}
            />
          ) : (
            <Pressable
              onPress={() => setIsMemoEditing((prev) => !prev)}
              className="flex-row items-start justify-between rounded-2xl border border-border bg-card px-4 py-3"
            >
              {memo && memo !== '' ? (
                <Text className="mt-1 flex-1 text-base leading-[22px]">{memo}</Text>
              ) : (
                <Text className="mt-2 text-base text-inactive-text">
                  메모사항이 없습니다.
                </Text>
              )}
              <Icon name="Edit" color="darkGray" size={20} className="p-1.5" />
            </Pressable>
          )} */}

          <View className="mt-3 flex-row gap-x-3">
            {/* 보관위치 */}
            <SquareBtn
              iconName="Edit"
              name="보관위치 변경"
              className="flex-1 !py-4"
              color="indigo"
              onPress={onEditStoragePress}
            />
            <SquareBtn
              iconName="Trash2"
              name="냉장고에서 제거"
              className="flex-1 !py-4"
              color="yellow"
              onPress={onDeletePress}
            />
          </View>
        </View>
      )}

      <View className="mb-2 mt-8 flex-row items-center gap-x-2">
        <SectionTitle
          icon="HandPlatter"
          iconColor="yellow"
          className="items-center !pl-0"
          highlight={getTrackedItemLabel(storageItem).label}
          title={`${getTrackedItemLabel(storageItem).label} 활용 요리`}
        />
      </View>

      <FullBleedSection>
        <CarouselContainer
          data={currMealList.slice(0, 6)}
          initialIndex={currMealList.slice(0, 6).length}
          itemWidth={0.48}
          hasNavigation
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
        />
      </FullBleedSection>
    </View>
  );
}
