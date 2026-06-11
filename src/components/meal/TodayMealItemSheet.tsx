import { changeMainMenuAtom, deleteTodayMealItemAtom } from '@/atom/mealAtom';
import { useOverlay, useGetMealInfo, useHandleTodayMeal } from '@/hooks';
import { MealWithEnrichIngredient } from '@/types/meal';
import { useSetAtom } from 'jotai';
import { View } from 'react-native';
import SquareBtn from '@/components/common/SquareBtn';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import ModalHeader from '@/components/common/header/ModalHeader';
import MealIngredientItemCard from '@/components/selectableItem/meal/MealIngredientItemCard';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import Icon from '@/components/common/ui/Icon';
import GridContainer from '@/components/common/container/GridContainer';

interface TodayMealItemSheetProps {
  meal: MealWithEnrichIngredient;
  type: 'mainMenu' | 'sideMenu';
}

export default function TodayMealItemSheet({ meal, type }: TodayMealItemSheetProps) {
  const { closeSheet } = useOverlay();

  const deleteTodayMealItem = useSetAtom(deleteTodayMealItemAtom);
  const changeMainMenu = useSetAtom(changeMainMenuAtom);

  const { hasItem, onAddTodayMealPress } = useHandleTodayMeal(meal);

  const {
    getIngredientStructureList,
    getStorageItemListInIngredientStructure,
    percentage,
    requiredTotal,
    storageItemIdSet,
    possesionStatus,
    styleByStatus,
  } = useGetMealInfo(meal);

  const allIngredientStructureList = getIngredientStructureList();

  // 오늘의 메뉴 삭제하기
  const onDeletePress = () => {
    deleteTodayMealItem([meal.id]);
    closeSheet();
  };

  // 메인메뉴로 변경하기
  const onChangeMainMenuPress = () => {
    changeMainMenu(meal.id);
    closeSheet();
  };

  const titleObj = {
    mainMenu: '오늘의 메인 메뉴',
    sideMenu: '같이 먹을 메뉴',
  };

  return (
    <View className="py-3">
      <ModalHeader title={!hasItem ? '메뉴 상세 정보' : titleObj[type]} hasX={false} />

      <View className="pb-5 pt-4">
        <View className="items-center pb-4">
          <MealImage meal={meal} size={140} />
          <Text className="line-clamp-2 text-base">{meal?.label}</Text>

          <SquareBtn
            name="오늘의 식사에 추가"
            iconName="HandPlatter"
            onPress={onAddTodayMealPress}
            color={hasItem ? 'inActive' : 'blue'}
            className="mt-5"
          />
        </View>

        {allIngredientStructureList.length > 0 && (
          <View className="mt-6 gap-y-8">
            {/* 진행률 */}
            <View className="gap-y-2 px-1">
              <ProgressBar
                label={`재료보유율  ${getStorageItemListInIngredientStructure('required').length}/${requiredTotal}`}
                percentage={percentage}
              />

              {requiredTotal > 0 && (
                <View className="!h-6">
                  <IconWithText
                    text={possesionStatus.label}
                    icon={possesionStatus.icon}
                    iconSize={14}
                    iconColor={possesionStatus.iconColor}
                    textClassName={styleByStatus.text}
                  />
                </View>
              )}
            </View>

            {/* 재료 */}
            {allIngredientStructureList.map(({ label, itemList, color }) => (
              <View key={label} className="gap-y-1">
                {itemList.length ? (
                  <>
                    <View
                      className={`flex-row items-center gap-x-1 self-start rounded-xl p-2`}
                    >
                      <Icon
                        name={label === '양념 재료' ? 'Amphora' : 'ToolCase'}
                        size={14}
                        color={color}
                      />
                      <Text
                        className={`!text-[13px] ${color === 'blue' ? 'text-blue-7' : color === 'yellow' ? 'text-yellow-7' : 'text-neutral-7'}`}
                      >
                        {label}
                      </Text>
                    </View>

                    <GridContainer columns={2}>
                      {itemList.map((item) => (
                        <MealIngredientItemCard
                          key={item.id}
                          item={item}
                          imageSize={25}
                          className="min-h-14 !py-2.5 !pl-2.5 !pr-2"
                          isStorageItem={storageItemIdSet.has(item.id)}
                        />
                      ))}
                    </GridContainer>
                  </>
                ) : (
                  <></>
                )}
              </View>
            ))}
          </View>
        )}

        {hasItem && (
          <View className="mt-12 justify-between gap-y-2">
            <SquareBtn
              name="오늘의 식사에서 삭제"
              iconName="Trash2"
              onPress={onDeletePress}
              color="yellow"
            />

            {type === 'sideMenu' && (
              <SquareBtn
                name="오늘의 메인메뉴로 변경"
                iconName="HandPlatter"
                onPress={onChangeMainMenuPress}
                color="green"
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
}
