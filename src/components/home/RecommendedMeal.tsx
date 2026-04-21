import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import MealCard from '@/components/selectableItem/meal/MealCard';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import { currMealList, filterObj } from '@/constants';
import { View } from 'react-native';
import { useMemo } from 'react';
import { Meal } from '@/types/meal';
import { MealFilterKey } from '@/types/filter';
import { useAtomValue } from 'jotai';
import { allStorageItemListAtom } from '@/atom/storageItemAtom';
import { getRemainingDays } from '@/utils';
import { Ingredient } from '@/types/ingredient';

export default function RecommendedDish() {
  const filterList = Object.values(filterObj['meal']);

  const storageItems = useAtomValue(allStorageItemListAtom);

  const isEasyMeal = (meal: Meal) => {
    return meal.difficulty === 'easy' && meal.cookTime <= 20;
  };

  const isMinimumMeal = (meal: Meal): boolean => {
    if (!meal.ingredientStructure) return false;
    return meal.ingredientStructure.essential.length <= 3;
  };

  const dataList: (Meal & { filterList: MealFilterKey[] })[] = useMemo(() => {
    const isExpiredSoonMeal = (meal: Meal): boolean => {
      const soonIngredients = storageItems
        .filter((i) => i.type === 'ingredient' && getRemainingDays(i.expiresAt) <= 2)
        .map((item) => {
          if (item.type !== 'ingredient') return item;
          return item.ingredientId;
        });

      if (!meal.ingredientStructure) return false;
      return meal.ingredientStructure.essential.some((i: Ingredient) =>
        soonIngredients.includes(i.id),
      );
    };

    const result = currMealList.map((meal) => {
      const filterList: MealFilterKey[] = [];

      if (isEasyMeal(meal)) {
        filterList.push('easy' as const);
      }

      if (isExpiredSoonMeal(meal)) {
        filterList.push('expiredSoon' as const);
      }

      if (isMinimumMeal(meal)) {
        filterList.push('mininum' as const);
      }

      return { ...meal, filterList };
    });

    return result;
  }, [storageItems]);

  return (
    <View className="gap-y-3">
      <SectionTitle title="메뉴 추천 리스트" icon="HandPlatter" />

      <FullBleedSection>
        <CarouselContainer
          data={currMealList.slice(0, 4)}
          initialIndex={currMealList.slice(0, 4).length}
          itemWidth={0.5}
          hasNavigation
          centerFocus
          renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
          keyExtractor={(_, index) => `${index}`}
        />
      </FullBleedSection>

      <View className="mt-10 min-h-[800px]">
        <FilterContainer filterList={filterList} dataList={dataList}>
          {(meal) => <MealCard key={meal.id} meal={meal} className="w-full" />}
        </FilterContainer>
      </View>
    </View>
  );
}
