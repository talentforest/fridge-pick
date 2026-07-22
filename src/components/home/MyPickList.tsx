import { favoriteItemListAtom } from '@/atom/favoritesAtom';
import { useAtomValue } from 'jotai';
import { View } from 'react-native';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import SectionTitle from '@/components/common/header/SectionTitle';
import MyPickItemCard from '@/components/selectableItem/MyPickItemCard';

export default function MyPickList() {
  const myPickList = useAtomValue(favoriteItemListAtom);

  return myPickList.length > 0 ? (
    <View className="gap-y-3">
      <SectionTitle title="나의 픽" icon="Heart" hasShowAllBtn />

      <CarouselContainer
        data={myPickList}
        initialIndex={myPickList.length}
        itemWidth={0.25}
        hasNavigation
        spacing={10}
        centerFocus
        hasPagination
        requiredMinimum={3}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <MyPickItemCard item={item} />}
      ></CarouselContainer>
    </View>
  ) : (
    <></>
  );
}
