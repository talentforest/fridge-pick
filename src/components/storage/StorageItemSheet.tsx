import { changeItemAtom, deleteItemsAtom } from '@/atom/storageItemAtom';
import MealCompactCard from '@/components/common/MealCompactCard';
import SquareBtn from '@/components/common/SquareBtn';
import SectionTitle from '@/components/common/SectionTitle';
import Text from '@/components/common/ui/Text';
import StorageModal from '@/components/storage/StorageModal';
import { mealList, storageObj } from '@/constants';
import { useOverlay } from '@/hooks/common/useOverlay';

import { EditableStorageItemData, EnrichStorageItem, StorageItem } from '@/types/storage';
import { formatDateString } from '@/utils';

import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import FormMemo from '@/components/common/form/FormMemo';
import Icon from '@/components/common/ui/Icon';
import IngredientImageLabel from '@/components/storage/IngredientImageLabel';

interface StorageItemSheetProps {
  storageItem: EnrichStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const { ingredient, customLabel, storage, id, expiresAt, memo } = storageItem;

  const [currentValue, setCurrentValue] = useState<
    Pick<StorageItem, 'expiresAt' | 'storage' | 'memo'>
  >({ expiresAt, storage, memo: memo || '' });

  const { closeModal, openModal, closeSheet, alert, confirm, expandSheet } = useOverlay();

  const [isMemoEditing, setIsMemoEditing] = useState(false);

  const deleteItems = useSetAtom(deleteItemsAtom);
  const onItemChange = useSetAtom(changeItemAtom);

  const onChangeDate = (newData: EditableStorageItemData) => {
    if (!newData.expiresAt) return;

    const expiresAt = formatDateString(new Date(newData.expiresAt), 'yyyy-MM-dd');
    setCurrentValue((prev) => ({ ...prev, expiresAt }));
    onItemChange({ id, newData });
  };

  const onEditStoragePress = () => {
    openModal({
      hasDim: true,
      children: (
        <StorageModal
          currentValue={currentValue.storage.type}
          onItemChange={async (newData) => {
            onItemChange({ id, newData });
            closeModal();
            closeSheet();

            alert({
              title: '보관위치 변경 알림',
              message: `[${ingredient?.label}] 식재료를 ${storageObj[newData.storage.type].label}으로 옮겼습니다.`,
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

  return (
    <View className="my-2 w-full flex-1 gap-y-1.5">
      {ingredient && (
        <IngredientImageLabel ingredient={ingredient} customLabel={customLabel} />
      )}

      <View className="gap-y-3">
        {/* 소비기한 */}
        <FormDateInput currDate={currentValue.expiresAt} onItemChange={onChangeDate} />

        {/* 메모사항 */}
        {isMemoEditing ? (
          <FormMemo
            autoFocus={true}
            currMemo={currentValue?.memo || ''}
            onItemChange={(newData) => {
              setCurrentValue((prev) => ({ ...prev, ...newData }));
            }}
            onSubmit={() => setIsMemoEditing((prev) => !prev)}
            onFocus={expandSheet}
            isSheetInput={true}
          />
        ) : (
          <Pressable
            onPress={() => setIsMemoEditing((prev) => !prev)}
            className="flex-row items-start justify-between rounded-2xl border border-border bg-card px-4 py-3"
          >
            {currentValue.memo !== '' ? (
              <Text className="flex-1 pt-1 leading-[22px]">{currentValue.memo}</Text>
            ) : (
              <Text className="mt-2 text-inactive-text">메모사항이 없습니다.</Text>
            )}

            <Icon name="Edit" color="darkGray" size={20} className="p-1.5" />
          </Pressable>
        )}

        <View className="flex-row gap-x-3">
          {/* 보관위치 */}
          <SquareBtn
            iconName="Edit"
            name="보관위치 변경"
            className="mt-6 flex-1 !py-5"
            color="indigo"
            onPress={onEditStoragePress}
          />
          <SquareBtn
            iconName="Trash2"
            name="냉장고에서 제거"
            className="mt-6 flex-1 !py-5"
            color="yellow"
            onPress={onDeletePress}
          />
        </View>
      </View>

      <View className="mb-2 mt-12 flex-row items-center gap-x-2">
        <SectionTitle
          icon="HandPlatter"
          iconColor="yellow"
          className="items-center !pl-0"
          title={`${customLabel || storageItem?.ingredient?.label} 활용 요리`}
        />
      </View>

      <CarouselContainer
        data={mealList}
        initialIndex={mealList.length}
        itemWidth={0.6}
        hasNavigation
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <MealCompactCard key={item.mealId} meal={item} />}
      />
    </View>
  );
}
