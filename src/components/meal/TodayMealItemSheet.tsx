import GridContainer from '@/components/common/container/GridContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import SquareBtn from '@/components/common/SquareBtn';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import Card from '@/components/common/ui/Card';
import ModalHeader from '@/components/common/header/ModalHeader';
import { deleteTodayMealItemAtom } from '@/atom/mealAtom';
import { useOverlay, useGetMealInfo } from '@/hooks';
import { MealWithEnrichIngredient } from '@/types/meal';
import { useSetAtom } from 'jotai';
import { View } from 'react-native';
import MealIngredientItemCard from '@/components/selectableItem/meal/MealIngredientItemCard';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import Indicator from '@/components/common/Indicator';

interface TodayMealItemSheetProps {
  meal: MealWithEnrichIngredient;
  type: 'mainMenu' | 'sideMenu';
}

export default function TodayMealItemSheet({ meal, type }: TodayMealItemSheetProps) {
  const { closeSheet } = useOverlay();

  const deleteTodayMealItem = useSetAtom(deleteTodayMealItemAtom);

  const onDeletePress = () => {
    deleteTodayMealItem([meal.id]);
    closeSheet();
  };

  const {
    allIngredientList,
    percentage,
    requiredTotal,
    hasStorageItemList, //
  } = useGetMealInfo(meal);

  const needMoreNum = requiredTotal - hasStorageItemList.length;

  console.log(meal.mealType);

  return (
    <View className="pt-3">
      <ModalHeader
        title={type === 'mainMenu' ? '오늘의 메인 메뉴' : '같이 먹을 메뉴'}
        hasX={false}
      />

      <View className="pt-4">
        <View className="w-[40%] items-center gap-x-3 self-center pb-4">
          <MealImage meal={meal} size={110} />
          <Text className="line-clamp-2 text-base">{meal?.label}</Text>
        </View>

        <View className="my-4 flex-row items-center rounded-full border border-neutral-3 bg-neutral-3 p-2">
          <SquareBtn
            name="직접 요리"
            color="neutral"
            iconName="ChefHat"
            className="w-[32%] !rounded-full py-3"
            textClassName="!text-[13px]"
          />
          <SquareBtn
            name="간편식/밀키트"
            color="inActive"
            iconName="HandPlatter"
            className="w-[35%] !rounded-full !bg-transparent py-3"
            textClassName="!text-[13px]"
          />
          <SquareBtn
            name="배달/포장"
            color="inActive"
            iconName="Scooter"
            className="w-[32%] !rounded-full !bg-transparent py-3"
            textClassName="!text-[13px]"
          />
        </View>

        {allIngredientList.length > 0 && (
          <View className="gap-y-7">
            <View className="my-4 flex-row items-center gap-x-6 px-2">
              <View className="">
                <View className="mb-2.5 flex-row justify-between border-b border-dashed border-neutral-5 pb-2.5">
                  <Text className="w-20 text-neutral-5">요리 난이도</Text>
                  <Indicator type="difficulty" value={meal.difficulty} />
                </View>

                <View className="mb-2.5 flex-row justify-between border-b border-dashed border-neutral-5 pb-2.5">
                  <Text className="w-20 text-neutral-5">요리 시간</Text>
                  <Indicator type="time" value={meal.cookTime} />
                </View>

                <View className="flex-row justify-between">
                  <Text className="w-20 text-neutral-5">총 식재료</Text>
                  <Indicator type="total" value={requiredTotal} />
                </View>
              </View>

              <View className="flex-1 gap-y-2">
                {/* 진행률 */}
                <ProgressBar label="재료보유율" percentage={percentage} />

                <View className="flex-1 justify-between">
                  {requiredTotal > 0 && (
                    <Card className="mt-auto !p-3">
                      <IconWithText
                        text={
                          percentage === 100
                            ? '모든 식재료가 있어요.'
                            : `식재료가 ${needMoreNum}개 부족해요.`
                        }
                        icon={percentage === 100 ? 'HandPlatter' : 'TriangleAlert'}
                        iconSize={14}
                        className="pl-1.5"
                        iconColor={percentage === 100 ? 'green' : 'red'}
                        textClassName={percentage === 100 ? 'text-green-7' : 'text-red-7'}
                      />
                    </Card>
                  )}
                </View>
              </View>
            </View>

            {allIngredientList.map(({ label, itemList }) => (
              <LabelContainer key={label} label={`${label} ${itemList.length}개`}>
                <GridContainer columns={5} gap={4} className="min-h-16">
                  {itemList.map((item) => (
                    <MealIngredientItemCard
                      key={item.id}
                      item={item}
                      imageSize={30}
                      className="min-h-16 flex-1 !px-1 !py-2"
                      textClassName="!text-[13px]"
                    />
                  ))}
                </GridContainer>
              </LabelContainer>
            ))}
          </View>
        )}

        <View className="mb-5 mt-8 justify-between gap-y-2">
          <SquareBtn
            name="오늘의 식사에서 삭제"
            iconName="Trash2"
            onPress={onDeletePress}
            color="yellow"
          />

          {needMoreNum > 0 && (
            <SquareBtn
              name={`부족한 식재료 ${needMoreNum}개 담기`}
              iconName="ShoppingBasket"
              onPress={onDeletePress}
              color="indigo"
            />
          )}
        </View>
      </View>
    </View>
  );
}
