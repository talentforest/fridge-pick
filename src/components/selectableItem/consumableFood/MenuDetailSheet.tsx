import { changeMainMenuAtom, deleteTodayMenuAtom } from '@/atom/todayMenuAtom';
import {
  useOverlay,
  useHandleTodayMenu,
  EnrichedConsumableFoodWithFilter,
} from '@/hooks';
import { useSetAtom } from 'jotai';
import { View } from 'react-native';
import { useState } from 'react';
import { findMeal, findPreparedFood } from '@/utils';
import { SelectableItem } from '@/types/selectableItem';
import SquareBtn from '@/components/common/SquareBtn';
import ModalHeader from '@/components/common/header/ModalHeader';
import IconWithText from '@/components/common/IconWithText';
import FoodSourceCard from '@/components/selectableItem/consumableFood/FoodSourceCard';
import MenuCookTabDetail from '@/components/selectableItem/consumableFood/MenuCookTabDetail';

interface MenuDetailSheetProps {
  food: EnrichedConsumableFoodWithFilter;
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

export default function MenuDetailSheet({ food }: MenuDetailSheetProps) {
  const { cook, convenience } = tabObj;

  const tabList = !food?.foodStructure
    ? ([convenience] as const)
    : !food?.availableFoodSources
      ? [cook]
      : [cook, convenience];

  const [currTab, setCurrTab] = useState<(typeof tabList)[number]['label']>(
    tabList[0].label,
  );

  const deleteTodayMenu = useSetAtom(deleteTodayMenuAtom);
  const changeMainMenu = useSetAtom(changeMainMenuAtom);

  const { isTodayMenu, onAddTodayMenuPress } = useHandleTodayMenu(food);

  const { closeSheet } = useOverlay();

  // 오늘의 메뉴 추가하기
  const onAddPress = () => {
    onAddTodayMenuPress();
    closeSheet();
  };

  // 오늘의 메뉴 삭제하기
  const onDeletePress = () => {
    deleteTodayMenu([food.id]);
    closeSheet();
  };

  // 메인메뉴로 변경하기
  const onChangeMainMenuPress = () => {
    changeMainMenu(food.id);
    closeSheet();
  };

  const selectableFood: SelectableItem =
    food.kind === 'meal' ? findMeal(food.id) : findPreparedFood(food.id);

  return (
    <>
      <View className="py-3">
        <ModalHeader title={'메뉴 상세 정보'} hasX={false} />

        <View className="pb-5">
          <View className="min-h-96 pt-5">
            {currTab === tabObj.cook.label ? (
              <MenuCookTabDetail consumableFood={food} />
            ) : (
              <></>
            )}

            {currTab === tabObj.convenience.label ? (
              <View className="gap-y-2">
                {food.availableFoodSources?.map((type) => (
                  <FoodSourceCard key={type} type={type}>
                    <IconWithText
                      text="장보기"
                      icon="Plus"
                      iconSize={14}
                      iconColor="blue"
                      textClassName="text-blue-7 font-extrabold"
                      // onPress={onPress}
                      className="!gap-x-0 px-0 py-3"
                    />
                  </FoodSourceCard>
                ))}
              </View>
            ) : (
              <></>
            )}
          </View>

          <View className="mt-6 gap-y-2">
            {!isTodayMenu ? (
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

            {isTodayMenu && (
              <View className="justify-between gap-y-2">
                <SquareBtn
                  name="오늘 먹을 메뉴에서 삭제"
                  iconName="Trash2"
                  onPress={onDeletePress}
                  bgColor="yellow"
                />

                {/* {type === 'sideMenu' ? (
                  <SquareBtn
                    name="오늘의 메인메뉴로 변경"
                    iconName="HandPlatter"
                    onPress={onChangeMainMenuPress}
                    bgColor="green"
                  />
                ) : (
                  <></>
                )} */}
              </View>
            )}
          </View>
        </View>
      </View>
    </>
  );
}
