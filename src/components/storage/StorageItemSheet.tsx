import { changeItemAtom, deleteItemsAtom } from '@/atom/storageItemAtom';
import GridContainer from '@/components/common/container/GridContainer';
import DateInput from '@/components/common/DateInput';
import DishCompactCard from '@/components/common/DishCompactCard';
import FormMemo from '@/components/common/form/FormMemo';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import PressableIcon from '@/components/common/PressableIcon';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import SectionTitle from '@/components/common/SectionTitle';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import StorageModal from '@/components/storage/StorageModal';
import { categoryObj, colorByStorage, dishList } from '@/constants';
import { useOverlay } from '@/hooks/common/useOverlay';

import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { formatDateString } from '@/utils';

import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

interface StorageItemSheetProps {
  storageItem: EnrichStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const { ingredient, customLabel, storage, id, expiresAt, memo } = storageItem;

  const [currentValue, setCurrentValue] = useState<
    Pick<StorageItem, 'expiresAt' | 'storage' | 'memo'>
  >({ expiresAt, storage, memo: memo || '' });

  const { closeModal, openModal, closeSheet } = useOverlay();

  const [isMemoEditing, setIsMemoEditing] = useState(false);

  const deleteItems = useSetAtom(deleteItemsAtom);
  const onItemChange = useSetAtom(changeItemAtom);

  const onChangeDate = (date: Date) => {
    if (!date) return;

    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    setCurrentValue((prev) => ({ ...prev, expiresAt }));
    onItemChange({ id, newData: { expiresAt } });
  };

  const onEditStoragePress = () => {
    openModal({
      hasDim: true,
      children: (
        <StorageModal
          currentValue={currentValue.storage.type}
          onItemChange={(newData) => {
            onItemChange({ id, newData });
            closeModal();
            closeSheet();

            // alert(`${storageObj[newData.storage.type].label}으로 옮겼습니다!`);
          }}
        />
      ),
    });
  };

  return (
    <View className="my-2 w-full flex-1 gap-y-1.5">
      <View className="flex-1 flex-row items-center gap-x-3">
        <IngredientImage ingredient={ingredient} size={80} />

        <View className="flex-1 gap-y-1.5">
          <Text className="line-clamp-1 text-xl leading-8">
            {customLabel || ingredient?.label}
          </Text>
          {ingredient && (
            <Text className="text-md text-gray-500">
              {categoryObj[ingredient.category].label}
            </Text>
          )}
        </View>
      </View>

      <View className="gap-y-3">
        {/* 소비기한 */}
        <DateInput date={currentValue.expiresAt} onChangeDate={onChangeDate}>
          <View className="flex-row gap-x-1 p-5">
            <Icon name="Calendar" size={18} color="gray" />
            <Text className="text-gray-600">연장</Text>
          </View>
        </DateInput>

        {/* 메모사항 */}
        {isMemoEditing ? (
          <View className="mt-1">
            <FormMemo
              currMemo={currentValue?.memo || ''}
              onItemChange={(newData) => {
                setCurrentValue((prev) => ({ ...prev, ...newData }));
              }}
            />
            <PressableIcon
              icon="CheckCircle2"
              text="수정완료"
              iconSize={19}
              iconColor="green"
              className="self-end px-2 py-3"
              textClassName="text-green-900"
              onPress={() => {
                onItemChange({ id, newData: { memo: currentValue.memo } });
                setIsMemoEditing((prev) => !prev);
              }}
            />
          </View>
        ) : (
          <Pressable
            onPress={() => setIsMemoEditing((prev) => !prev)}
            className="items-end rounded-2xl border border-gray-200 bg-white p-4"
          >
            <View className="w-full flex-1">
              {currentValue.memo ? (
                <Text className="leading-7 text-gray-800">{currentValue.memo}</Text>
              ) : (
                <Text className="leading-7 text-gray-400">메모사항이 없습니다.</Text>
              )}
            </View>

            <View className="mt-1 flex-row items-center gap-x-1 px-1">
              <Icon name="Edit" size={17} color="gray" />
              <Text className="text-gray-600">수정</Text>
            </View>
          </Pressable>
        )}

        <View className="flex-row gap-x-3">
          {/* 보관위치 */}
          <PressableSquareBtn
            iconName="Edit"
            name="보관위치 변경"
            className="mt-6 flex-1 !py-5"
            color="indigo"
            onPress={onEditStoragePress}
          />
          <PressableSquareBtn
            iconName="Trash2"
            name="냉장고에서 제거"
            className="mt-6 flex-1 !py-5"
            color="yellow"
            onPress={() => {
              deleteItems([id]);
              closeSheet();
            }}
          />
        </View>
      </View>

      <View className="mx-4 mb-2 mt-20 flex-row items-center gap-x-2">
        <SectionTitle
          icon="HandPlatter"
          iconColor="blue"
          className="items-center !pl-0"
          title={`${customLabel || storageItem?.ingredient?.label} 활용 요리`}
          textClassName="!text-lg text-blue-600 font-extrabold"
        />
        <View className="flex-1 border border-blue-100" />
      </View>

      <GridContainer columns={2} gap={10}>
        {dishList.slice(0, 2).map((item) => (
          <DishCompactCard
            key={item.name}
            dish={item}
            className={`bg-indigo-100 ${colorByStorage['blue'].border}`}
          />
        ))}
      </GridContainer>
    </View>
  );
}
