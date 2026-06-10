import CarouselContainer from '@/components/common/container/CarouselContainer';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealCard from '@/components/selectableItem/meal/MealCard';
import { useGetMealList } from '@/hooks';
import { EnrichStorageItem } from '@/types/storage';
import { getTrackedItemLabel } from '@/utils';
import { View } from 'react-native';

interface CautionMealListByIngredientProps {
  focusedItem: EnrichStorageItem;
}

export default function CautionMealListByIngredient({
  focusedItem,
}: CautionMealListByIngredientProps) {
  const { getHasStorageItemMealList } = useGetMealList();

  const expiredSoonMealList = getHasStorageItemMealList(focusedItem);

  return (
    <View className="h-[350px]">
      <View className={`mt-1 flex-row items-center gap-x-2 pb-3 pl-8`}>
        <Text>식재료를 이용한 메뉴</Text>
        <View className="rounded-xl bg-inactive-bg px-3 py-2.5">
          <Text className="font-extrabold">{getTrackedItemLabel(focusedItem).label}</Text>
        </View>
      </View>

      {expiredSoonMealList.length !== 0 ? (
        <CarouselContainer
          data={expiredSoonMealList}
          initialIndex={expiredSoonMealList.length}
          itemWidth={0.75}
          hasPagination
          centerFocus
          requiredMinimum={1}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => (
            <MealCard key={item.id} meal={item} filterList={item.filterList} />
          )}
        />
      ) : (
        <Card className="mx-6 h-72 items-center justify-center">
          <Text className="text-inactive-text">식재료를 이용한 메뉴가 없어요</Text>
        </Card>
      )}
    </View>
  );
}
