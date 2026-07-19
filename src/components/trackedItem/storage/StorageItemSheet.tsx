import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { View } from 'react-native';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { changeStorageItemAtom } from '@/atom/storageAtom';
import { getTrackedItemData } from '@/utils';

import Text from '@/components/common/ui/Text';
import QuickActionBtnList from '@/components/trackedItem/storage/QuickActionBtnList';
import AvailableMenuAccordion from '@/components/trackedItem/storage/AvailableMenuAccordion';
import SectionTitle from '@/components/common/header/SectionTitle';
import FormIngredient from '@/components/common/form/FormIngredient';
import SelectableItemDetailCard from '@/components/selectableItem/SelectableItemDetailCard';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import FoodImage from '@/components/common/FoodImage';

interface StorageItemSheetProps {
  storageItem: EnrichedStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [currStorageItem, setCurrStorageItem] =
    useState<EnrichedStorageItem>(storageItem);

  const changeStorageItem = useSetAtom(changeStorageItemAtom);

  const onItemChange = (newData: EditableStorageItem) => {
    setCurrStorageItem((prev) => {
      if (prev.type === 'custom') {
        return { ...prev, ...newData };
      }

      const { customLabel: _, ...rest } = newData;

      return { ...prev, ...rest };
    });
  };

  const toggleEditPress = () => setIsEditing((prev) => !prev);

  if (!storageItem) return;

  const { label, categoryLabel } = getTrackedItemData(storageItem);

  return (
    <View className="gap-y-8 py-2">
      {!isEditing ? (
        <>
          <SelectableItemDetailCard storageItem={currStorageItem} />

          <View className="gap-y-3">
            <View className="flex-row items-end gap-x-1">
              <SectionTitle icon="Zap" type="sub" title="빠른관리" />
              <Text className="!text-[13px] text-neutral-5">
                식재료 상태를 빠르게 변경해보세요
              </Text>
            </View>

            <QuickActionBtnList
              storageItemId={currStorageItem.id}
              toggleEditPress={toggleEditPress}
            />
          </View>

          <AvailableMenuAccordion storageItem={currStorageItem} />
        </>
      ) : (
        <>
          <View className="w-full flex-row items-center gap-x-2">
            <Card className="items-center justify-center !bg-border !px-1 !py-0">
              <FoodImage trackedItem={currStorageItem} imageSize={65} />
            </Card>

            <View className="gap-y-2.5">
              <Text className={`font-extrabold text-xl leading-7`}>{label}</Text>
              {/* 카테고리 */}
              <Text className="mb-0.5 text-neutral-5">{categoryLabel}</Text>
            </View>
          </View>

          <FormIngredient
            currStorageItem={currStorageItem}
            onItemChange={onItemChange}
            isSheetInput={true}
          />

          <SquareBtn
            name="수정완료"
            iconName="CheckCircle2"
            iconSize={16}
            onPress={() => {
              changeStorageItem({ id: currStorageItem.id, newData: currStorageItem });
              toggleEditPress();
            }}
          />
        </>
      )}
    </View>
  );
}
