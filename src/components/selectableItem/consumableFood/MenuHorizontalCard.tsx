import FoodImage from '@/components/common/FoodImage';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { EnrichedConsumableFoodWithFilter, useHandleTodayMenu } from '@/hooks';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

type MenuItemCardProps = {
  menu: EnrichedConsumableFoodWithFilter;
};

export default function MenuHorizontalCard({ menu }: MenuItemCardProps) {
  const hasNotIngredientList = useMemo(() => {
    const requiredList = menu.foodStructure
      ? [
          ...menu.foodStructure?.essential,
          ...menu.foodStructure?.common,
          ...menu.foodStructure?.seasoning,
        ]
      : [];

    return requiredList.filter((item) => {
      const key = createSelectableItemKey(item);
      return !menu.requiredPossessedList.find((p) =>
        findTrackedItemWithKey(p.storageItem, key),
      );
    });
  }, [menu.foodStructure, menu.requiredPossessedList]);

  const { onAddTodayMenuPress, isTodayMenu } = useHandleTodayMenu(menu);

  return (
    <Card key={menu.id} className="flex-row items-center gap-x-2.5 !px-3 !py-3">
      <View className="items-center rounded-2xl bg-neutral-1 px-1 py-3">
        <FoodImage consumableFood={menu} imageSize={70} />
      </View>

      <View className="flex-1 gap-y-2 py-1">
        <Text className="mb-1.5 font-extrabold !text-[15px]">{menu.label}</Text>

        <ProgressBar
          label="재료 보유율"
          percentage={menu.requiredPossessionPercent}
          possessedCount={menu.requiredPossessedList.length}
          requiredCount={menu.requiredCount}
        />

        <ScrollView
          horizontal
          contentContainerClassName="gap-x-2"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
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
                      {hasNotIngredientList.map((i) => i.label).join(', ')}
                    </Text>
                    <Text className="!text-[11px] text-neutral-7">만 있으면 돼요</Text>
                  </>
                )}
              </Text>
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      </View>

      <IconWithText
        text="오늘 먹을 메뉴"
        icon={isTodayMenu ? 'CheckCircle2' : 'Plus'}
        iconSize={12}
        iconColor={isTodayMenu ? 'darkGray' : 'orange'}
        textClassName={`text-sm tracking-[-0.1em] ${isTodayMenu ? 'text-neutral-5' : 'text-orange-7'}`}
        className="absolute right-1 top-1 !gap-x-0.5 p-3"
        onPress={onAddTodayMenuPress}
      />
    </Card>
  );
}
