import Indicator from '@/components/common/Indicator';
import MealImage from '@/components/selectableItem/meal/MealImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import ModalHeader from '@/components/common/header/ModalHeader';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { MealWithEnrichIngredient } from '@/types/meal';
import { View } from 'react-native';
import { useHandleTodayMeal, useOverlay } from '@/hooks';

interface MealCompactCardProps {
  meal: MealWithEnrichIngredient;
  className?: string;
}

export default function MealCompactCard({ meal, className = '' }: MealCompactCardProps) {
  const {
    hasItem,
    onAddTodayMealPress,
    requiredIngredientNum, //
  } = useHandleTodayMeal(meal);

  const { openSheet } = useOverlay();

  const onPress = () => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 700,
      hasDim: true,
      render: () => (
        <View className="pt-3">
          <ModalHeader title={`메뉴를 어떤 방식으로 드시나요?`} hasX={false} />

          <View className="mt-4 gap-y-3">
            <TouchableOpacity
              className="gap-y-2 rounded-2xl bg-blue-3 p-3.5"
              onPress={onAddTodayMealPress}
            >
              <Text className="text-lg text-blue-9">🍳 직접 요리</Text>
              <Text className="pb-1 pl-1 text-blue-7">재료를 확인하고 직접 만들어요</Text>
            </TouchableOpacity>

            <TouchableOpacity className="gap-y-3 rounded-2xl bg-green-3 p-3.5">
              <Text className="text-lg text-green-9">🥡 간편식·밀키트</Text>
              <Text className="pb-1 pl-1 text-green-7">
                냉동·즉석식품으로 간편하게 먹어요
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="gap-y-3 rounded-2xl bg-indigo-3 p-3.5">
              <Text className="text-lg text-indigo-5">🛵 배달·포장</Text>
              <Text className="pb-1 pl-1">주문하거나 포장한 음식으로 먹어요</Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  };

  return (
    <Card key={meal.id} className={`justify-center overflow-hidden !p-0 ${className}`}>
      <View className="items-center justify-center bg-neutral-3 pb-5">
        <MealImage meal={meal} size={110} />
        <Text className="-mt-2 text-base">{meal.label}</Text>
      </View>

      <View className="justify-between gap-y-2 px-3 py-4">
        <View className="flex-row gap-x-1.5">
          <Indicator type="difficulty" value={meal.difficulty} />
          <Indicator type="time" value={meal.cookTime} />
          {requiredIngredientNum > 0 ? (
            <Indicator type="total" value={requiredIngredientNum} />
          ) : (
            <></>
          )}
        </View>

        <SquareBtn
          name="오늘 먹을 메뉴"
          className="mt-2 py-4 text-md"
          iconName="UtensilsCrossed"
          color={hasItem ? 'inActive' : 'green'}
          disabled={hasItem}
          iconSize={14}
          onPress={onPress}
        />
      </View>
    </Card>
  );
}
