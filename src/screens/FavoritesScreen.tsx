import { favoriteIngredientAtom, favoriteMealAtom } from '@/atom/favoritesAtom';
import { useOverlay } from '@/hooks/common/useOverlay';
import { useAtomValue } from 'jotai';
import { TouchableOpacity, View } from 'react-native';
import { SelectableItem } from '@/types/selectableItem';
import GridContainer from '@/components/common/container/GridContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import SectionTitle from '@/components/common/header/SectionTitle';
import Text from '@/components/common/ui/Text';
import FavoriteItemSheet from '@/components/favorites/FavoriteItemSheet';
import Card from '@/components/common/ui/Card';
import { useNavigation } from '@react-navigation/native';
import { StackNavProp } from '@/types/RootStackParamList';
import { StorageTypeId } from '@/types/storage';
import FavoriteBtn from '@/components/common/FavoriteBtn';

export default function FavoritesScreen() {
  const favoriteMealList = useAtomValue(favoriteMealAtom);
  const favoriteIngredientList = useAtomValue(favoriteIngredientAtom);

  const { openSheet, closeSheet } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const onOpenSheetPress = (item: SelectableItem) => {
    openSheet({
      hasDim: true,
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
      <ScreenHeader title="자주먹는 식재료와 요리" />

      <ScrollViewContainer contentContainerClassName="pt-5">
        <View className="gap-y-3">
          <SectionTitle title="좋아하는 식재료" icon="Heart" />

          {favoriteIngredientList.length > 0 ? (
            <GridContainer columns={3}>
              {favoriteIngredientList.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  onPress={() => onOpenSheetPress(item)}
                  className="relative"
                >
                  <SelectableItemCard
                    item={item}
                    isCompact
                    className="pb-3sdsd h-32 !px-2"
                    imageSize={55}
                    textClassName="!text-[13px] line-clamp-1"
                  />
                  <FavoriteBtn
                    selectableItem={item}
                    className="absolute right-2 top-1.5"
                    size={22}
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
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  onPress={() => onOpenSheetPress(item)}
                >
                  <SelectableItemCard
                    item={item}
                    isCompact
                    className="!px-1 pb-3"
                    textClassName="!text-[13px] line-clamp-1"
                  />
                </TouchableOpacity>
              ))}
            </GridContainer>
          ) : (
            <Card className="h-32 items-center justify-center">
              <Text className="text-inactive-text">좋아하는 요리가 아직 없어요</Text>
            </Card>
          )}
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
