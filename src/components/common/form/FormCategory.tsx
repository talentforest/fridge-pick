import IconWithText from '@/components/common/IconWithText';
import Text from '@/components/common/ui/Text';
import SelectBtn from '@/components/common/SelectBtn';
import { View } from 'react-native';
import { foodCategoryObj, ingredientCategoryObj } from '@/constants';
import { Food, Ingredient, SelectableItem } from '@/types/selectableItem';
import { SelectableItemKindOptions } from '@/hooks';

type FormCategoryProps = {
  newSelectableItem: SelectableItem;
  onSelectableItemChange: (
    newData: Partial<Ingredient> | Partial<Food>,
    deleteKeys?: (keyof Ingredient | keyof Food)[],
  ) => void;
  changeItemKind: (options: SelectableItemKindOptions) => void;
};

export default function FormCategory({
  newSelectableItem,
  onSelectableItemChange,
  changeItemKind,
}: FormCategoryProps) {
  const kindObj = {
    ingredient: {
      label: '식재료',
      kindCategory: ingredientCategoryObj,
      oppositeLabel: '음식',
      description: '혹시 직접 요리했거나 포장한 국 · 반찬 · 면 같은 음식인가요?',
    },
    food: {
      label: '음식',
      kindCategory: foodCategoryObj,
      oppositeLabel: '식재료',
      description: '혹시 채소 · 과일 같은 원물이거나 요리에 필요한 식재료인가요?',
    },
  };

  const { label, oppositeLabel, kindCategory, description } =
    kindObj[newSelectableItem.kind];

  return (
    <View className="gap-y-4">
      <Text className="ml-1 font-extrabold !text-[15px] text-yellow-7">{`1. ${label}의 카테고리를 선택해주세요`}</Text>

      <View className="flex-row flex-wrap gap-1.5">
        {Object.values(kindCategory).map((item) => (
          <SelectBtn
            key={item.id}
            iconName={item.icon}
            iconSize={14}
            name={item.label}
            color={item.id === newSelectableItem.category ? 'black' : 'neutral'}
            textClassName="text-sm"
            className="!px-2.5 !py-4"
            onPress={() => onSelectableItemChange({ category: item.id })}
          />
        ))}
      </View>

      <View className={`mt-2 gap-y-2.5 border-l-[3px] border-neutral-3 py-0.5 pl-2.5`}>
        <Text className="!text-[13px] text-neutral-7">{description}</Text>
        <IconWithText
          iconSize={14}
          icon="ArrowRightLeft"
          text={`${oppositeLabel} 카테고리로 변경`}
          textClassName={`font-extrabold`}
          onPress={() => {
            if (newSelectableItem.kind === 'ingredient') {
              return changeItemKind({
                kind: 'food',
                category: 'side_dish',
              });
            }
            changeItemKind({
              kind: 'ingredient',
              category: 'vegetable',
              defaultStorage: 'fridge',
              recommendedDurations: {
                fridge: { value: 7, unit: 'day' },
              },
            });
          }}
        />
      </View>
    </View>
  );
}
