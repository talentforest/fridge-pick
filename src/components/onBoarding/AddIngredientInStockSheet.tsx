import { addIngredientListToStorageAtom } from '@/atom/storageAtom';
import { useOverlay } from '@/hooks';
import { useAtomValue, useSetAtom } from 'jotai';
import { View } from 'react-native';
import { useState } from 'react';
import { ingredientInStockAtom } from '@/atom/onboardingIngredientInStockAtom';
import ModalHeader from '@/components/common/header/ModalHeader';
import SelectBtn from '@/components/common/SelectBtn';
import SquareBtn from '@/components/common/SquareBtn';
import Text from '@/components/common/ui/Text';
import IngredientInStockItem from '@/components/onBoarding/IngredientInStockItem';

type AddIngredientInStockSheetProps = {
  navi: () => void;
};

const MAX_LENGTH = 4;

export default function AddIngredientInStockSheet({
  navi,
}: AddIngredientInStockSheetProps) {
  const pickedItemList = useAtomValue(ingredientInStockAtom);

  const addIngredientListToStorage = useSetAtom(addIngredientListToStorageAtom);

  const [isOpen, setIsOpen] = useState(false);

  const { closeSheet, showToast } = useOverlay();

  const onAddPress = () => {
    const result = addIngredientListToStorage(pickedItemList);

    if (result.type !== 'success') {
      showToast({
        type: 'error',
        text1: '에러가 발생했습니다.',
        props: {
          bgColor: 'red',
        },
      });
    }

    closeSheet();

    navi();
  };

  return (
    <>
      <View className="gap-y-3 pb-3">
        <ModalHeader title="선택한 식재료를 확인해주세요" />

        <View className="gap-y-1.5 py-2">
          <Text>식재료에 대한 권장 보관 정보를 자동으로 설정했어요.</Text>
          <Text>보관 정보는 언제든지 수정 가능합니다.</Text>
        </View>

        <View className="gap-y-3">
          {(isOpen ? pickedItemList : pickedItemList.slice(0, MAX_LENGTH)).map(
            (item, index) => (
              <IngredientInStockItem index={index} key={item.id} ingredient={item} />
            ),
          )}
        </View>

        {pickedItemList.length > 4 ? (
          <SelectBtn
            name={isOpen ? '접기' : `그외 ${pickedItemList.length - MAX_LENGTH}개 더보기`}
            iconName={isOpen ? 'ChevronUp' : 'ChevronDown'}
            className="w-full !rounded-lg border-0 !bg-inactive-bg !py-3.5"
            iconSize={12}
            textClassName="!text-sm"
            iconStrokeWidth={3}
            onPress={() => setIsOpen((prev) => !prev)}
          />
        ) : (
          <></>
        )}

        <SquareBtn
          iconName="CheckCircle2"
          name={`보관 정보를 확인했어요`}
          className="mt-5"
          onPress={onAddPress}
        />
      </View>
    </>
  );
}
