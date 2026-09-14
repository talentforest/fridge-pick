import { deleteTodayFoodAtom, todayFoodListAtom } from '@/atom/todayFoodAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { ScrollView, View } from 'react-native';
import { foodCategoryObj } from '@/constants';
import { FoodCategoryKey } from '@/types/category';
import TodayFoodEmptyCard from '@/components/selectableItem/TodayFoodEmptyCard';
import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FoodImage from '@/components/common/FoodImage';
import Icon from '@/components/common/ui/Icon';
import SectionTitle from '@/components/common/header/SectionTitle';
import IconWithText from '@/components/common/IconWithText';
import SegmentedBar from '@/components/common/SegmentedBar';
import ProgressBar from '@/components/common/ProgressBar';

interface TodayFoodProps {
  hasHeader?: boolean;
  type: 'dashboard' | 'list';
}

export default function TodayFood({ hasHeader = false, type = 'list' }: TodayFoodProps) {
  const todayFoodList = useAtomValue(todayFoodListAtom);

  const deleteTodayFood = useSetAtom(deleteTodayFoodAtom);

  const mainFoodList = todayFoodList.filter(
    (item) =>
      item.food.category === 'main_dish_meal' ||
      item.food.category === 'soup_meal' ||
      item.food.category === 'noodle_meal' ||
      item.food.category === 'western_meal' ||
      item.food.category === 'fresh_meal' ||
      item.food.category === 'rice_meal',
  );

  const sideFoodList = todayFoodList.filter((item) => item.food.category === 'side_dish');

  const dessertFoodList = todayFoodList.filter(
    (item) =>
      item.food.category === 'light_food' ||
      item.food.category === 'bakery' ||
      item.food.category === 'snack_dessert',
  );

  const foodList = [...mainFoodList, ...sideFoodList, ...dessertFoodList];

  const categoryList = [
    ...foodList
      .reduce<Map<FoodCategoryKey, number>>((acc, item) => {
        const category = item.food.category;

        acc.set(category, (acc.get(category) ?? 0) + 1);

        return acc;
      }, new Map())
      .entries(),
  ].map(([category, count]) => ({ category, count }));

  const dataList = foodList.reduce(
    (acc, item) => {
      const percent = item.food.requiredPossessionPercent;

      if (percent === 100) {
        acc[0]!.count += 1;
      } else if (percent >= 30) {
        acc[1]!.count += 1;
      } else {
        acc[2]!.count += 1;
      }

      return acc;
    },
    [
      { label: '바로가능', count: 0, color: 'green' as const },
      { label: '조금부족', count: 0, color: 'yellow' as const },
      { label: '많이부족', count: 0, color: 'red' as const },
    ],
  );

  return (
    <View className="gap-y-3">
      {hasHeader && (
        <SectionTitle title="오늘 먹을 메뉴" icon="Utensils">
          <Icon
            name="RefreshCcw"
            size={18}
            color="neutral"
            className="px-1"
            onPress={() => deleteTodayFood(todayFoodList.map(({ food: { id } }) => id))}
          />
        </SectionTitle>
      )}

      <View className="min-h-[288px]">
        {foodList.length > 0 ? (
          <>
            {type === 'list' && (
              <Card className="gap-y-5 !bg-card !py-6">
                <View className="flex-row items-center justify-center gap-y-2">
                  <View className="items-center gap-y-1.5 border-r border-orange-3 px-4">
                    <Text className="font-heavy !text-[28px] text-red-5">
                      {todayFoodList.length}
                    </Text>
                    <Text className="ml-1 text-sm text-red-5">개 메뉴</Text>
                  </View>

                  <View className="flex-1 gap-y-4 pl-4">
                    <SegmentedBar
                      label="메뉴 재료 준비 상태"
                      total={todayFoodList.length}
                      dataList={dataList}
                    />

                    <IconWithText
                      icon="Info"
                      iconSize={12}
                      text="모든 메뉴가 재료가 더 필요해요"
                      iconColor="red"
                      textClassName="font-extrabold text-red-5 text-sm"
                    />
                  </View>
                </View>

                <View className="gap-y-3 px-1">
                  <View className="flex-row gap-x-3 border-t border-orange-3 pt-5">
                    <IconWithText
                      icon="LayoutGrid"
                      text="메뉴구성"
                      iconSize={12}
                      iconColor="red"
                      textClassName="text-sm text-red-5 font-extrabold"
                    />
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      contentContainerClassName="gap-x-2"
                    >
                      {categoryList.map((food, idx) => (
                        <View key={idx} className="flex-row items-center gap-x-2">
                          <Text className="text-sm text-neutral-7">
                            {foodCategoryObj[food.category].label}{' '}
                            <Text className={`font-extrabold text-sm text-red-5`}>
                              {food.count}
                            </Text>
                          </Text>

                          {categoryList.length - 1 !== idx ? (
                            <View className="size-[3px] bg-neutral-5" />
                          ) : (
                            <></>
                          )}
                        </View>
                      ))}
                    </ScrollView>
                  </View>

                  <GridContainer columns={4} gap={8} horizontalInset={42}>
                    {foodList.map((item) => (
                      <View key={item.food.id} className="gap-y-1.5">
                        <View className="items-center rounded-xl bg-neutral-1 py-1">
                          <FoodImage food={item.food} imageSize={65} />
                        </View>
                        <Text className="text-center text-sm">{item.food.label}</Text>

                        <View className="px-1.5">
                          <ProgressBar
                            percentage={item.food.requiredPossessionPercent}
                            possessedCount={item.food.requiredPossessedList.length}
                            requiredCount={item.food.requiredCount}
                          />
                        </View>
                      </View>
                    ))}
                  </GridContainer>
                </View>
              </Card>
            )}

            {type === 'dashboard' && (
              <Card className="gap-y-4 !py-3">
                <View className="gap-y-1.5 border">
                  <GridContainer columns={4} horizontalInset={30} gap={6}>
                    <View className="flex-1 items-center justify-center gap-y-2">
                      <Text className="text-center font-heavy !text-[28px] text-orange-9">
                        {todayFoodList.length}
                      </Text>
                      <Text className="text-sm text-yellow-7">개 메뉴</Text>
                    </View>

                    {foodList.map((item) => (
                      <View key={item.food.id} className="gap-y-1.5 border">
                        <View className="items-center rounded-xl bg-neutral-1 py-1">
                          <FoodImage food={item.food} imageSize={65} />
                        </View>
                        <Text className="text-center text-sm">{item.food.label}</Text>
                      </View>
                    ))}
                  </GridContainer>
                </View>
              </Card>
            )}
          </>
        ) : (
          <TodayFoodEmptyCard className="flex-1" />
        )}
      </View>
    </View>
  );
}
