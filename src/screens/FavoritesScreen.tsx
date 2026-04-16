import { favoriteStorageItemListAtom } from '@/atom/favoritesAtom';
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
import FavoriteItem from '@/components/favorites/FavoriteItem';

export default function FavoritesScreen() {
  const favoriteList = useAtomValue(favoriteStorageItemListAtom);

  const { openSheet } = useOverlay();

  const onOpenSheetPress = (item: SelectableItem) => {
    openSheet({
      hasDim: true,
      render: () => <FavoriteItem item={item} />,
    });
  };

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="자주먹는 식재료와 요리" />

      <ScrollViewContainer contentContainerClassName="pt-5">
        <View>
          <SectionTitle title="좋아하는 식재료" icon="EggFried" />
          <GridContainer columns={4} className="mt-4" gap={6}>
            {favoriteList.map((item) => (
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
        </View>

        <Text>2번 이상 먹은 식재료</Text>

        <View>
          <SectionTitle title="자주먹는 요리" icon="ChefHat" />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
