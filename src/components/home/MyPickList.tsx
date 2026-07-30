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
      <SectionTitle title="나의 픽!" icon="Heart" />

      <CarouselContainer
        data={myPickList}
        initialIndex={myPickList.length}
        itemWidth={0.25}
        hasNavigation
        spacing={8}
        centerFocus
        hasPagination
        requiredMinimum={4}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <MyPickItemCard item={item} />}
      ></CarouselContainer>
    </View>
  ) : (
    <></>
  );
}

// 애호박찌개 빼기
// 문어다리슬라이스
// 해삼
// 냉장고에 넣은 반찬 추천
// 보관함에서 반찬 나의 픽 선택시 중복 추가 버그
// 식재료 보유율 높음에서 식사
// 태그 정보 불필요
