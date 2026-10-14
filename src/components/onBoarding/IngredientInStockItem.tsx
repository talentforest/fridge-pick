import { ingredientInStockAtom } from '@/atom/onboardingIngredientInStockAtom';
import { storageObj } from '@/constants';
import { Ingredient } from '@/types/selectableItem';
import { getSelectableItemLabelAndCategory } from '@/utils';
import { useSetAtom } from 'jotai';
import { useMemo } from 'react';
import { View } from 'react-native';
import FoodImage from '@/components/common/FoodImage';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import DurationText from '@/components/common/DurationText';

type IngredientInStockItemProps = {
  ingredient: Ingredient;
  index: number;
};

export default function IngredientInStockItem({
  ingredient,
  index,
}: IngredientInStockItemProps) {
  const setPickedItemList = useSetAtom(ingredientInStockAtom);

  const dataList = useMemo(() => {
    const { defaultStorage, recommendedDurations } = ingredient;

    const storage = defaultStorage || 'fridge';

    return [
      {
        type: 'storage',
        label: '권장 보관위치',
        storageData: storageObj[storage],
      },
      {
        type: 'duration',
        label: '권장 보관기간',
        recommendedDurations,
      },
    ];
  }, [ingredient]);

  const deleteItem = () => {
    setPickedItemList((prev) => prev.filter(({ id }) => id !== ingredient.id));
  };

  return (
    <Card className="flex-row overflow-hidden !bg-border !px-3 !py-2.5">
      <View className="aspect-square w-20 items-center justify-center gap-y-1 rounded-2xl bg-neutral-3 p-0">
        <FoodImage selectableItem={ingredient} imageSize={40} />
        <Text className="line-clamp-1 font-extrabold !text-sm">
          {getSelectableItemLabelAndCategory(ingredient).label}
        </Text>
      </View>

      {/* 인덱스 넘버 */}
      {index >= 0 && (
        <View className="absolute left-0 top-0 h-10 w-7 items-center justify-center rounded-br-xl bg-neutral-1">
          <Text className="font-heavy text-[13px] text-blue-7">{index + 1}</Text>
        </View>
      )}

      {/* 식재료 상세정보 */}
      <View className="mx-3 flex-1 flex-row items-center gap-x-4">
        {dataList.map(({ type, label, storageData, recommendedDurations }) => (
          <View key={label} className="min-w-24">
            <Text className="text-sm !text-neutral-7">{label}</Text>

            {/* 중간선 */}
            <View className="mb-3.5 mt-2.5 border-b border-neutral-3" />

            <View className="flex-row items-center gap-x-1 rounded-xl">
              {type === 'storage' && storageData ? (
                <>
                  <Icon name={storageData.icon} size={14} color={storageData.color} />
                  <Text className={`font-extrabold ${storageData.textColor}`}>
                    {storageData.label}
                  </Text>
                </>
              ) : (
                <></>
              )}

              {type === 'duration' && recommendedDurations ? (
                <DurationText
                  recommendedDurations={recommendedDurations}
                  defaultStorage={ingredient.defaultStorage}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        ))}
      </View>

      <Icon name="X" size={20} onPress={deleteItem} />
    </Card>
  );
}
