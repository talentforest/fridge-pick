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
import Text from '@/components/common/ui/Text';
import ModalHeader from '@/components/common/header/ModalHeader';
import IconWithText from '@/components/common/IconWithText';
import Card from '@/components/common/ui/Card';
import FoodSourceCard from '@/components/selectableItem/consumableFood/FoodSourceCard';
import MenuCookTabDetail from '@/components/selectableItem/consumableFood/MenuCookTabDetail';
import FoodImage from '@/components/common/FoodImage';
import FavoriteBtn from '@/components/common/FavoriteBtn';

interface MenuDetailSheetProps {
  food: EnrichedConsumableFoodWithFilter;
  type: 'mainMenu' | 'sideMenu';
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

export default function MenuDetailSheet({ food, type }: MenuDetailSheetProps) {
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

  const titleObj = {
    mainMenu: '오늘의 메인 메뉴',
    sideMenu: '같이 먹을 메뉴',
  };

  const selectableFood: SelectableItem =
    food.kind === 'meal' ? findMeal(food.id) : findPreparedFood(food.id);

  return (
    <>
      <View className="py-3">
        <ModalHeader
          title={!isTodayMenu ? '메뉴 상세 정보' : titleObj[type]}
          hasX={false}
        />

        <View className="pb-5 pt-4">
          {/* 메뉴 이미지와 라벨 박스 */}
          <Card className="mb-4 items-center rounded-2xl border bg-card !pt-0 pb-6">
            <FoodImage consumableFood={food} imageSize={130} />
            <Text className="line-clamp-2 text-base">{food?.label}</Text>
            <FavoriteBtn
              selectableItem={selectableFood}
              className="absolute right-3 top-2 gap-y-5 p-2"
            />
          </Card>

          {/* 탭 목록 */}
          <View className="flex-row gap-x-2 px-1">
            {tabList.map((tab) => (
              <IconWithText
                key={tab.label}
                className={`border-b-[3px] py-3 pr-0.5 ${currTab === tab.label ? 'border-blue-5' : 'border-transparent'}`}
                onPress={() => setCurrTab(tab.label)}
                icon={tab.icon}
                text={tab.label}
                iconSize={15}
                textClassName={`${currTab === tab.label ? 'text-blue-7 !text-[14px]' : '!text-[14px] text-inactive-text'}`}
                iconColor={currTab === tab.label ? 'blue' : 'inactive'}
              />
            ))}
          </View>

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

          <View className="mt-5 flex-row gap-x-2">
            {!isTodayMenu ? (
              <SquareBtn
                name="오늘의 식사에 추가"
                iconName="HandPlatter"
                onPress={onAddTodayMenuPress}
                bgColor="blue"
                className="flex-1 !py-[16px]"
              />
            ) : (
              <SquareBtn
                name="오늘 먹을 식사에요"
                iconName="CheckCircle2"
                bgColor="inActive"
                className="flex-1 !py-[16px]"
                disabled
              />
            )}
          </View>

          {isTodayMenu && (
            <View className="mt-12 justify-between gap-y-2">
              <SquareBtn
                name="오늘의 식사에서 삭제"
                iconName="Trash2"
                onPress={onDeletePress}
                bgColor="yellow"
              />

              {type === 'sideMenu' && (
                <SquareBtn
                  name="오늘의 메인메뉴로 변경"
                  iconName="HandPlatter"
                  onPress={onChangeMainMenuPress}
                  bgColor="green"
                />
              )}
            </View>
          )}
        </View>
      </View>
    </>
  );
}
