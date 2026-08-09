import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FilterTag from '@/components/common/FilterTag';
import { ScrollView, View } from 'react-native';
import { FoodFilterKey } from '@/types/filter';

import {
  EnrichedConsumableFoodWithFilter,
  useHandleTodayMenu,
  useOverlay,
} from '@/hooks';
import ProgressBar from '@/components/common/ProgressBar';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MenuDetailSheet from '@/components/selectableItem/consumableFood/MenuDetailSheet';
import Icon from '@/components/common/ui/Icon';
import FoodImage from '@/components/common/FoodImage';
import { filterObj } from '@/constants';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { useMemo } from 'react';

interface MenuCardProps {
  food: EnrichedConsumableFoodWithFilter;
  filterList?: readonly FoodFilterKey[];
  className?: string;
}

export default function MenuCard({ food, filterList, className = '' }: MenuCardProps) {
  const { isTodayMenu } = useHandleTodayMenu(food);

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
      render: () => <MenuDetailSheet type="mainMenu" food={food} />,
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
    <Card className={`!p-3 ${className}`}>
      <TouchableOpacity onPress={onPress} className="">
        <View className="mb-2 items-center rounded-lg bg-neutral-1">
          <FoodImage consumableFood={food} imageSize={90} />
        </View>

        <View className={`gap-y-3 p-0.5`}>
          <View className="flex-row items-center justify-between">
            <Text className="line-clamp-2 font-extrabold">{food?.label}</Text>
            <FavoriteBtn selectableItem={rest} size={18} />
          </View>

          {filterList && filterList?.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-3"
              contentContainerClassName="gap-x-2 px-0.5"
            >
              {filterList.map((filter) => (
                <FilterTag
                  key={filter}
                  name={filterObj['food'][filter].label}
                  color={filterObj['food'][filter].color}
                  textClassName="!text-sm"
                  className="-ml-0.5 self-start !py-2.5"
                  isActive
                />
              ))}
            </ScrollView>
          ) : (
            <></>
          )}

          <ProgressBar
            label="재료 보유율"
            percentage={food.requiredPossessionPercent}
            possessedCount={food.requiredPossessedList.length}
            requiredCount={food.requiredCount}
          />

          {hasNotIngredientList.length > 0 ? (
            <View className="flex-1 flex-row items-start gap-x-0.5">
              <Icon name="Info" size={11} color="orange" className="!mt-0.5" />
              <Text className="line-clamp-2 flex-1 leading-4">
                {hasNotIngredientList.length >= 3 ? (
                  <>
                    <Text className="font-extrabold !text-[11px] text-orange-9">
                      {hasNotIngredientList
                        .map((i) => i.label)
                        .slice(0, 2)
                        .join(', ')}
                    </Text>
                    <Text className="!text-[11px] text-neutral-7">
                      {' '}
                      외 {hasNotIngredientList.length - 2}개가 필요해요
                    </Text>
                  </>
                ) : (
                  <>
                    <Text className="font-extrabold !text-[11px] text-orange-9">
                      🔥{hasNotIngredientList.map((i) => i.label).join(', ')}
                    </Text>
                    <Text className="!text-[11px] text-neutral-7">만 있으면 돼요</Text>
                  </>
                )}
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>

        {isTodayMenu ? (
          <View className="absolute -right-1 -top-1 flex-row gap-x-2.5 rounded-lg bg-indigo-1 p-2">
            <Icon name="UtensilsCrossed" color="indigo" size={16} />
          </View>
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </Card>
  );
}
