import { allCategoryObj } from '@/constants';
import { EnrichedStorageItem } from '@/types/storage';
import { View } from 'react-native';
import {
  convertFoodToStorageItem,
  convertIngredientToStorageItem,
  getStorageSelectableItem,
} from '@/utils';
import { useHandleCustomSelectableItem, useOverlay } from '@/hooks';
import ModalHeader from '@/components/common/header/ModalHeader';
import Text from '@/components/common/ui/Text';
import StepContainter from '@/components/common/container/StepContainter';
import FormCategory from '@/components/common/form/FormCategory';
import FoodImage from '@/components/common/FoodImage';
import FormExpirationType from '@/components/common/form/FormExpirationType';
import FormRecommendedDuration from '@/components/common/form/FormRecommendedDuration';

type SelectSelectableTypeSheetProps = {
  storageItem: EnrichedStorageItem;
  setCurrStorageItem: React.Dispatch<React.SetStateAction<EnrichedStorageItem | null>>;
};

type Step = { step: number; id: string; label: string };

export default function SelectSelectableTypeSheet({
  storageItem,
  setCurrStorageItem,
}: SelectSelectableTypeSheetProps) {
  const selectableItem = getStorageSelectableItem(storageItem);

  const { closeSheet, showToast } = useOverlay();

  const {
    changeItemKind,
    newSelectableItem,
    onSelectableItemChange,
    addCustomSelectableItem, //
  } = useHandleCustomSelectableItem({ selectableItem });

  const addNewCustomSelectableItemPress = () => {
    addCustomSelectableItem(newSelectableItem);

    if (newSelectableItem.kind === 'ingredient') {
      const storageItem = convertIngredientToStorageItem(newSelectableItem);
      setCurrStorageItem(storageItem);
    }

    if (newSelectableItem.kind === 'food') {
      const storageItem = convertFoodToStorageItem(newSelectableItem);
      setCurrStorageItem(storageItem);
    }

    closeSheet();

    showToast({
      bottomOffset: 150,
      type: 'normal',
      text1: `✅ 직접 등록한  정보가 등록되었습니다. 이번엔 실제 보관 정보를 입력합니다.`,
      visibilityTime: 4000,
    });
  };

  const stepList: Step[] = [
    { step: 1, id: 'category', label: '카테고리' },
    { step: 2, id: 'storageLocation', label: '보관위치' },
    { step: 3, id: 'storageDuration', label: '보관기간' },
  ];

  return (
    <View>
      <ModalHeader title="직접 등록" />

      <StepContainter<Step>
        stepList={stepList}
        finalBtn={{ label: '등록하기', onPress: addNewCustomSelectableItemPress }}
      >
        {(currStep: number) => {
          return (
            <>
              <View className="mt-4 flex-row items-center gap-x-4">
                <FoodImage
                  selectableItem={newSelectableItem}
                  imageSize={70}
                  iconSize={14}
                  iconClassName="top-0.5 right-0"
                  className="p-2"
                />

                <View className="flex-1 gap-y-2">
                  <Text className="font-extrabold text-base">
                    {newSelectableItem.label}
                  </Text>
                  <Text className="text-neutral-7">
                    {allCategoryObj[newSelectableItem.category].label}
                  </Text>
                </View>
              </View>

              {/* 단계별 */}
              <View className="mt-8 min-h-72 gap-y-4">
                {currStep === 1 ? (
                  <FormCategory
                    newSelectableItem={newSelectableItem}
                    onSelectableItemChange={onSelectableItemChange}
                    changeItemKind={changeItemKind}
                  />
                ) : (
                  <></>
                )}

                {currStep === 2 ? (
                  <FormExpirationType
                    newSelectableItem={newSelectableItem}
                    onSelectableItemChange={onSelectableItemChange}
                  />
                ) : (
                  <></>
                )}

                {currStep === 3 && newSelectableItem.defaultStorage ? (
                  <FormRecommendedDuration
                    newSelectableItem={newSelectableItem}
                    onSelectableItemChange={onSelectableItemChange}
                  />
                ) : (
                  <></>
                )}
              </View>
            </>
          );
        }}
      </StepContainter>
    </View>
  );
}
