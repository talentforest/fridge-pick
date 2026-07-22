import { favoriteIngredientListAtom, favoriteMealListAtom } from '@/atom/favoritesAtom';
import { useNavigation } from '@react-navigation/native';
import { StackNavProp } from '@/types/RootStackParamList';
import { StorageTypeId } from '@/types/storage';
import { useOverlay } from '@/hooks';
import { useAtomValue } from 'jotai';
import { View } from 'react-native';
import { SelectableItem } from '@/types/selectableItem';
import GridContainer from '@/components/common/container/GridContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import SectionTitle from '@/components/common/header/SectionTitle';
import Text from '@/components/common/ui/Text';
import FavoriteItemSheet from '@/components/favorites/FavoriteItemSheet';
import Card from '@/components/common/ui/Card';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MyPickItemCard from '@/components/selectableItem/MyPickItemCard';

export default function FavoritesScreen() {
  const favoriteMealList = useAtomValue(favoriteMealListAtom);
  const favoriteIngredientList = useAtomValue(favoriteIngredientListAtom);

  const { openSheet, closeSheet } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const onOpenSheetPress = (item: SelectableItem) => {
    openSheet({
      render: () => (
        <FavoriteItemSheet
          item={item}
          onNavigatePress={(storageType: StorageTypeId) => {
            closeSheet();
            navigation.navigate('StorageDetailScreen', {
              id: storageType,
            });
          }}
        />
      ),
    });
  };

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="자주먹는 식재료와 메뉴" />

      <ScrollViewContainer contentContainerClassName="pt-4 flex-1">
        <View className="gap-y-3">
          <SectionTitle title="좋아하는 식재료" icon="Heart" />

          {favoriteIngredientList.length > 0 ? (
            <GridContainer columns={3}>
              {favoriteIngredientList.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onOpenSheetPress(item)}
                  className="relative"
                >
                  <MyPickItemCard
                    item={item}
                    className="h-32 !px-2"
                    imageSize={60}
                    textClassName="text-md line-clamp-1"
                  />
                </TouchableOpacity>
              ))}
            </GridContainer>
          ) : (
            <Card className="h-32 items-center justify-center">
              <Text className="text-inactive-text">좋아하는 식재료가 아직 없어요</Text>
            </Card>
          )}
        </View>

        <View className="gap-y-3">
          <SectionTitle title="좋아하는 요리" icon="UtensilsCrossed" />
          {favoriteMealList.length > 0 ? (
            <GridContainer columns={4}>
              {favoriteMealList.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => onOpenSheetPress(item)}>
                  <MyPickItemCard
                    item={item}
                    className="!px-1 pb-3"
                    textClassName="!text-[13px] line-clamp-1"
                  />
                </TouchableOpacity>
              ))}
            </GridContainer>
          ) : (
            <Card className="h-32 items-center justify-center">
              <Text className="text-inactive-text">좋아하는 메뉴가 아직 없어요</Text>
            </Card>
          )}
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
