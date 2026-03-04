import CarouselContainer from '@/components/common/container/CarouselContainer';
import IngredientCard from '@/components/common/IngredientCard';
import SectionTitle from '@/components/common/SectionTitle';
import { ingredientObj } from '@/constants';
import { View } from 'react-native';

export default function ExpiringIngredients() {
  const expiredList = Object.values(ingredientObj['fruit']).slice(0, 8);

  return (
    <View className="gap-y-3">
      <SectionTitle title="지금 써야할 재료" className="pl-6" />
      <CarouselContainer
        data={expiredList}
        initialIndex={expiredList.length}
        itemWidth={0.28}
        renderItem={({ item, index, currentIndex }) => (
          <IngredientCard
            ingredient={item}
            itemWidth={0.28}
            isCurrIndex={
              index % expiredList.length === currentIndex % expiredList.length
            }
          />
        )}
        keyExtractor={(_, index) => `${index}`}
      />
    </View>
  );
}
