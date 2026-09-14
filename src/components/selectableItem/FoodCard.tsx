import { ScrollView, View } from 'react-native';
import { FoodFilterKey } from '@/types/filter';
import { filterObj } from '@/constants';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { useMemo } from 'react';
import { EnrichedFoodWithFilter, useHandleTodayFood, useOverlay } from '@/hooks';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FilterTag from '@/components/common/FilterTag';
import ProgressBar from '@/components/common/ProgressBar';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import FoodDetailSheet from '@/components/selectableItem/FoodDetailSheet';
import Icon from '@/components/common/ui/Icon';
import FoodImage from '@/components/common/FoodImage';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import LineListContainer from '@/components/common/container/LineListContainer';

interface FoodCardProps {
  food: EnrichedFoodWithFilter;
  filterList?: readonly FoodFilterKey[];
  className?: string;
}

export default function FoodCard({ food, filterList, className = '' }: FoodCardProps) {
  const { isTodayFood } = useHandleTodayFood(food);

  const { foodStructure: i, ...rest } = food;

  const hasNotIngredientList = useMemo(() => {
    const requiredIngredientList = i ? [...i.essential, ...i.common, ...i.seasoning] : [];
    return requiredIngredientList.filter((item) => {
      const key = createSelectableItemKey(item);
      return !food.requiredPossessedList.find((p) =>
        findTrackedItemWithKey(p.storageItem, key),
      );
    });
  }, [food.requiredPossessedList, i]);

  const { openSheet } = useOverlay();

  const onPress = () => {
    openSheet({
      render: () => <FoodDetailSheet food={food} />,
    });
  };

  // 🔥 모든 재료가 준비됐어요.
  // ⏰ 소비기한이 임박한 []를 활용해요.
  // 🛒 5가지 재료가 더 필요해요
  // 🛒 장보기가 먼저 필요해요.
  // ❤️ 자주 만들던 메뉴예요
  // 🕒 최근 먹었던 메뉴예요
  // 🕒 오랜만에 만들어보세요

  return (
    <Card className={`!p-0 ${className}`}>
      <TouchableOpacity onPress={onPress} className="">
        <View className="flex-row items-start justify-between">
          <View className="flex-1 items-center rounded-t-2xl bg-border py-3">
            <FoodImage food={food} imageSize={100} />
          </View>

          <View className="absolute right-2 top-2">
            <ProgressBar
              type="circular"
              percentage={food.requiredPossessionPercent}
              possessedCount={food.requiredPossessedList.length}
              requiredCount={food.requiredCount}
              color={
                food.requiredPossessionPercent === 100
                  ? 'green'
                  : food.requiredPossessionPercent >= 30
                    ? 'yellow'
                    : 'red'
              }
            />
          </View>
        </View>

        <View className={`gap-y-3 px-3 py-4`}>
          {hasNotIngredientList.length > 0 ? (
            <View className="flex-row items-center gap-x-1.5">
              <View
                className={`size-2 rounded-full ${hasNotIngredientList.length >= 3 ? 'bg-red-5' : 'bg-orange-7'} `}
              />

              <Text className="line-clamp-2 flex-1 leading-4">
                {hasNotIngredientList.length >= 3 ? (
                  <Text className="!text-[11px] text-neutral-7">
                    식재료가{' '}
                    <Text className="font-extrabold !text-[11px] text-red-7">많이</Text>{' '}
                    부족해요
                  </Text>
                ) : (
                  <>
                    <Text className="font-extrabold !text-[11px] text-orange-9">
                      {hasNotIngredientList.length}개
                    </Text>
                    <Text className="!text-[11px] text-neutral-7">만 있으면 돼요</Text>
                  </>
                )}
              </Text>
            </View>
          ) : (
            // NOTE: 보유율 100%
            <View className="flex-row items-center gap-x-1.5">
              <View className="size-2 rounded-full bg-green-3" />
              <Text className="!text-[11px] text-green-7">바로 만들수 있어요!</Text>
            </View>
          )}

          <View className="flex-row items-center justify-between">
            <Text className="line-clamp-2 font-extrabold text-base">{food?.label}</Text>
            <FavoriteBtn selectableItem={rest} size={18} />
          </View>

          {filterList && filterList?.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-1"
              contentContainerClassName="gap-x-2 px-0.5"
            >
              {filterList.map((filter) => (
                <FilterTag
                  key={filter}
                  name={filterObj['food'][filter].label}
                  color={filterObj['food'][filter].color}
                  textClassName="!text-xs"
                  className="-ml-0.5 self-start !py-2"
                  isActive
                />
              ))}
            </ScrollView>
          ) : (
            <></>
          )}

          <View className="flex-row items-center gap-x-1">
            <Text className="text-sm text-neutral-7">필요한 재료 총</Text>
            <Text className="font-extrabold text-sm text-neutral-7">
              {food.requiredCount}개
            </Text>
          </View>

          {/* <ProgressBar
            label="재료 보유율"
            percentage={food.requiredPossessionPercent}
            possessedCount={food.requiredPossessedList.length}
            requiredCount={food.requiredCount}
          /> */}

          {hasNotIngredientList.length > 0 ? (
            <View className="gap-y-1">
              <Text className="font-extrabold text-xs text-neutral-5">부족한 식재료</Text>

              <LineListContainer
                data={hasNotIngredientList}
                renderItem={(item) => (
                  <FilterTag
                    key={item.id}
                    name={item.label}
                    color="neutral"
                    isActive
                    className="!rounded-md !px-2 !py-1.5"
                    textClassName="text-xs"
                  />
                )}
                renderMore={(hiddenCount) => (
                  <Text className="mt-1.5 text-sm text-neutral-7">+ {hiddenCount}개</Text>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          ) : (
            <></>
          )}
        </View>

        {isTodayFood ? (
          <View className="absolute left-2 top-2 flex-row gap-x-2.5 rounded-lg bg-neutral-9 p-2">
            <Icon name="Utensils" color="white" size={14} />
          </View>
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </Card>
  );
}
