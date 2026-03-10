import CarouselContainer from '@/components/common/container/CarouselContainer';
import IngredientCard from '@/components/common/IngredientCard';
import SectionTitle from '@/components/common/SectionTitle';
import { ingredientObj } from '@/constants';
import { View } from 'react-native';

export default function ExpiringIngredients() {
  const expiredList = Object.values(ingredientObj['fruit']).slice(0, 8);

  return (
    <View className="gap-y-3">
      <SectionTitle
        title="지금 써야할 재료"
        className="pl-6"
        icon="ClockAlert"
      />
      <CarouselContainer
        data={expiredList}
        initialIndex={expiredList.length}
        itemWidth={0.27}
        hasNavigation
        centerFocus
        renderItem={({ item, isCurrIndex }) => (
          <IngredientCard ingredient={item} isCurrIndex={isCurrIndex} />
        )}
        keyExtractor={(_, index) => `${index}`}
      />
    </View>
  );
}
