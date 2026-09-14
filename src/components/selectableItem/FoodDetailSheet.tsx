import { changeMainFoodAtom, deleteTodayFoodAtom } from '@/atom/todayFoodAtom';
import { useOverlay, EnrichedFoodWithFilter, useHandleTodayFood } from '@/hooks';
import { useSetAtom } from 'jotai';
import { View } from 'react-native';
import SquareBtn from '@/components/common/SquareBtn';
import ModalHeader from '@/components/common/header/ModalHeader';

interface FoodDetailSheetProps {
  food: EnrichedFoodWithFilter;
}

const tabObj = {
  cook: {
    icon: 'ChefHat',
    label: '직접 조리해요',
  },
  convenience: {
    icon: 'Zap',
    label: '간편하게 먹어요',
  },
} as const;

export default function FoodDetailSheet({ food }: FoodDetailSheetProps) {
  const { cook, convenience } = tabObj;

  const deleteTodayFood = useSetAtom(deleteTodayFoodAtom);
  const changeMainFood = useSetAtom(changeMainFoodAtom);

  const { isTodayFood, onAddTodayFoodPress } = useHandleTodayFood(food);

  const { closeSheet } = useOverlay();

  // 오늘의 메뉴 추가하기
  const onAddPress = () => {
    onAddTodayFoodPress();
    closeSheet();
  };

  // 오늘의 메뉴 삭제하기
  const onDeletePress = () => {
    deleteTodayFood([food.id]);
    closeSheet();
  };

  // 메인메뉴로 변경하기
  const onChangeMainFoodPress = () => {
    changeMainFood(food.id);
    closeSheet();
  };

  // const selectableFood: SelectableItem = findFood(food.id);

  return (
    <>
      <View className="pb-3">
        <ModalHeader title="메뉴 상세 정보" />

        <View className="mt-6 gap-y-2">
          {!isTodayFood ? (
            <SquareBtn
              name="오늘 먹을 메뉴에 추가"
              iconName="HandPlatter"
              onPress={onAddPress}
              bgColor="blue"
              className="flex-1"
            />
          ) : (
            <SquareBtn
              name="오늘 먹을 식사에요"
              iconName="CheckCircle2"
              bgColor="inActive"
              className="flex-1"
              disabled
            />
          )}

          {isTodayFood && (
            <View className="justify-between gap-y-2">
              <SquareBtn
                name="오늘 먹을 메뉴에서 삭제"
                iconName="Trash2"
                onPress={onDeletePress}
                bgColor="yellow"
              />

              {/* {type === 'sideFood' ? (
                  <SquareBtn
                    name="오늘의 메인메뉴로 변경"
                    iconName="HandPlatter"
                    onPress={onChangeMainFoodPress}
                    bgColor="green"
                  />
                ) : (
                  <></>
                )} */}
            </View>
          )}
        </View>
      </View>
    </>
  );
}
