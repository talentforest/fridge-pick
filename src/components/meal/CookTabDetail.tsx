import FilterTag from '@/components/common/FilterTag';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealIngredientItemCard from '@/components/selectableItem/meal/MealIngredientItemCard';
import { difficultyObj } from '@/constants';
import { EnrichedMealWithFilterList, useGetMealInfo } from '@/hooks';
import { View } from 'react-native';

type CookTabDetailProps = {
  meal: EnrichedMealWithFilterList;
};

export default function CookTabDetail({ meal }: CookTabDetailProps) {
  const { getIngredientStructureList, possesionStatus, styleByPossesionStatus } =
    useGetMealInfo(meal);

  const allIngredientStructureList = getIngredientStructureList();

  return (
    <View className="gap-y-3">
      {/* 메뉴 속성 필터 목록 */}
      <View className="flex-row items-center gap-x-1">
        {meal.mealCategory && (
          <FilterTag
            isActive
            name="식사류"
            color="neutral"
            // icon="Square"
            className="!py-2"
            textClassName="!text-[13px]"
            iconSize={13}
          />
        )}
        <FilterTag
          isActive
          name={difficultyObj[meal.difficulty].label}
          color={difficultyObj[meal.difficulty].color}
          // icon="Zap"
          className="!py-2"
          textClassName="!text-[13px]"
          iconSize={13}
        />
        <FilterTag
          isActive
          name={'뜨거움'}
          color="red"
          // icon="Wind"
          className="!py-2"
          textClassName="!text-[13px]"
          iconSize={13}
        />
      </View>

      {allIngredientStructureList.length > 0 && (
        <>
          {/* 진행률 */}
          <Card className="gap-y-2 !px-4 !pb-3 !pt-5">
            <ProgressBar
              label="재료보유율"
              percentage={meal.possessionPercent}
              possessedIngredientCount={meal.possessedIngredientCount}
              requiredIngredientCount={meal.requiredIngredientCount}
            />

            {meal.requiredIngredientCount > 0 && (
              <View className="!h-6">
                <IconWithText
                  text={possesionStatus.label}
                  icon={possesionStatus.icon}
                  iconSize={14}
                  iconColor={possesionStatus.iconColor}
                  textClassName={styleByPossesionStatus.text}
                />
              </View>
            )}
          </Card>

          {/* 재료 */}
          {allIngredientStructureList
            .filter(({ itemList }) => itemList.length > 0)
            .map(({ label, itemList }) => (
              <Card key={label} className="overflow-hidden !p-0">
                <View
                  className={`w-full flex-row items-center gap-x-1 self-start bg-blue-1 p-[12px]`}
                >
                  <Text className={`text-blue-7`}>{label}</Text>
                </View>

                <View className="my-3 gap-y-3 px-2">
                  {itemList.map((item) => (
                    <MealIngredientItemCard
                      key={item.id}
                      item={item}
                      imageSize={25}
                      className="items-center border-0 !py-0 !pl-2.5 !pr-2"
                      isStorageItem={
                        !!meal.possessedList.find(({ id }) => id === item.id)
                      }
                      isExpiredSoon={
                        !!meal.expiredSoonList.find(({ id }) => id === item.id)
                      }
                    />
                  ))}
                </View>
              </Card>
            ))}
        </>
      )}
    </View>
  );
}
