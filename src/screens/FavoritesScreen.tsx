import { favoriteStorageItemListAtom } from '@/atom/favoritesAtom';
import GridContainer from '@/components/common/container/GridContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import IngredientCard from '@/components/common/ingredient/IngredientCard';
import ScreenHeader from '@/components/common/ScreenHeader';
import SectionTitle from '@/components/common/SectionTitle';
import Text from '@/components/common/ui/Text';
import { useAtomValue } from 'jotai';
import { View } from 'react-native';

export default function FavoritesScreen() {
  const favoriteList = useAtomValue(favoriteStorageItemListAtom);

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="자주먹는 식재료와 요리" />

      <ScrollViewContainer contentContainerClassName="pt-5">
        <View>
          <SectionTitle title="좋아하는 식재료" icon="EggFried" />
          <GridContainer columns={4} className="mt-4" gap={10}>
            {favoriteList.map((item) => (
              <IngredientCard
                key={item.id}
                ingredient={item}
                isCompact
                className="h-24"
                textClassName="!text-[13px]"
              />
            ))}
          </GridContainer>
        </View>

        <Text>2번 이상 먹은 식재료</Text>

        <View>
          <SectionTitle title="자주먹는 요리" icon="ChefHat" />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
