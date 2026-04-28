import CarouselContainer from '@/components/common/container/CarouselContainer';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealCard from '@/components/selectableItem/meal/MealCard';
import { useGetMealList } from '@/hooks/meal/useGetMealList';
import { EnrichStorageItem } from '@/types/storage';
import { getTrackedItemLabel } from '@/utils';
import { View } from 'react-native';

interface CautionMealListByIngredientProps {
  focusedItem: EnrichStorageItem;
}

export default function CautionMealListByIngredient({
  focusedItem,
}: CautionMealListByIngredientProps) {
  const { getMealListByExpiredSoonIngredient } = useGetMealList();

  const expiredSoonMealList = getMealListByExpiredSoonIngredient(focusedItem);

  return (
    <View className="h-[300px]">
      <Text className={`mt-1 pb-3 pl-8`}>
        <Text className="font-extrabold text-base text-yellow-7">
          [{getTrackedItemLabel(focusedItem).label}]
        </Text>{' '}
        식재료를 이용한 메뉴
      </Text>

      {expiredSoonMealList.length !== 0 ? (
        <CarouselContainer
          data={expiredSoonMealList}
          initialIndex={expiredSoonMealList.length}
          itemWidth={0.8}
          hasPagination
          centerFocus
          requiredMinimum={1}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => (
            <MealCard
              key={item.id}
              ingredientStructure={item.ingredientStructure}
              meal={item}
              filterList={item.filterList}
            />
          )}
        />
      ) : (
        <Card className="mx-6 h-60 items-center justify-center">
          <Text className="text-inactive-text">식재료를 이용한 메뉴가 없어요</Text>
        </Card>
      )}
    </View>
  );
}
