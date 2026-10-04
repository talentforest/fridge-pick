import { addIngredientListToStorageAtom } from '@/atom/storageAtom';
import { durationUnitObj, storageObj } from '@/constants';
import { useOverlay } from '@/hooks';
import { Ingredient } from '@/types/selectableItem';
import { getExpirationDate, getSelectableItemLabelAndCategory } from '@/utils';
import { useAtom, useSetAtom } from 'jotai';
import { View } from 'react-native';
import { useState } from 'react';
import FoodImage from '@/components/common/FoodImage';
import ModalHeader from '@/components/common/header/ModalHeader';
import SelectBtn from '@/components/common/SelectBtn';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { ingredientInStockAtom } from '@/atom/onboardingIngredientInStockAtom';

type AddIngredientInStockSheetProps = {
  navi: () => void;
};

export default function AddIngredientInStockSheet({
  navi,
}: AddIngredientInStockSheetProps) {
  const [pickedItemList, setPickedItemList] = useAtom(ingredientInStockAtom);

  const [isOpen, setIsOpen] = useState(false);

  const getDataList = (ingredient: Ingredient) => {
    const storage = ingredient.defaultStorage || 'fridge';

    const dataList = [
      {
        type: 'storage',
        label: '권장 보관위치',
        storageData: storageObj[storage],
      },
      {
        type: 'expiration',
        label: '권장 소비기한',
        expirationData: ingredient.expiration?.recommendedDurations
          ? ingredient.expiration?.recommendedDurations[storage]
          : null,
      },
    ];

    return dataList;
  };

  const MAX_LENGTH = 4;

  const addIngredientListToStorage = useSetAtom(addIngredientListToStorageAtom);

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
          <Text>식재료 정보는 언제든지 수정 가능합니다.</Text>
        </View>

        <View className="gap-y-3">
          {(isOpen ? pickedItemList : pickedItemList.slice(0, MAX_LENGTH)).map(
            (item, index) => (
              <Card
                key={item.id}
                className="flex-row overflow-hidden !bg-indigo-1 !px-3 !py-3"
              >
                <View className="aspect-square w-20 items-center justify-center gap-y-1 rounded-2xl bg-card p-0">
                  <FoodImage selectableItem={item} imageSize={45} />
                  <Text className="line-clamp-1 font-extrabold !text-sm">
                    {getSelectableItemLabelAndCategory(item).label}
                  </Text>
                </View>

                {/* 인덱스 넘버 */}
                {index >= 0 && (
                  <View className="absolute left-0 top-0 h-10 w-7 items-center justify-center rounded-br-xl bg-indigo-1">
                    <Text className="font-heavy text-[13px] text-blue-7">
                      {index + 1}
                    </Text>
                  </View>
                )}

                {/* 식재료 상세정보 */}
                <View className="mx-3 flex-1 flex-row items-center gap-x-4">
                  {getDataList(item).map(
                    ({ type, label, storageData, expirationData }) => (
                      <View key={label} className="min-w-24">
                        <Text className="text-sm !text-neutral-7">{label}</Text>

                        {/* 중간선 */}
                        <View className="mb-3.5 mt-2.5 border-b border-neutral-3" />

                        <View className="flex-row items-center gap-x-1 rounded-xl">
                          {type === 'storage' && storageData ? (
                            <>
                              <Icon
                                name={storageData.icon}
                                size={14}
                                color={storageData.color}
                              />
                              <Text className={`font-extrabold ${storageData.textColor}`}>
                                {storageData.label}
                              </Text>
                            </>
                          ) : (
                            <></>
                          )}

                          {type === 'expiration' && expirationData ? (
                            <View className="flex-row items-center gap-x-1">
                              <Text className="min-w-fit font-extrabold text-red-5">
                                +{expirationData.value}
                                {durationUnitObj[expirationData.unit]}
                              </Text>

                              <Text className="!text-[13px]">
                                ({getExpirationDate(expirationData, 'yy년 M월 d일')})
                              </Text>
                            </View>
                          ) : (
                            <></>
                          )}
                        </View>
                      </View>
                    ),
                  )}
                </View>

                <Icon
                  name="X"
                  size={20}
                  onPress={() =>
                    setPickedItemList((prev) => prev.filter(({ id }) => id !== item.id))
                  }
                />
              </Card>
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
