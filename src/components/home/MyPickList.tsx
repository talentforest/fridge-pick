import { favoriteIngredientListAtom } from '@/atom/favoritesAtom';
import { useAtomValue } from 'jotai';
import { View } from 'react-native';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import SectionTitle from '@/components/common/header/SectionTitle';
import MyPickItemCard from '@/components/selectableItem/MyPickItemCard';
import { useMemo } from 'react';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import { useNavigation } from '@react-navigation/native';
import { StackNavProp } from '@/types/RootStackParamList';

export default function MyPickList() {
  const myPickIngredientList = useAtomValue(favoriteIngredientListAtom);

  const storageItemList = useAtomValue(allStorageItemListAtom);

  const ownedIngredientIdSet = useMemo(() => {
    return new Set(
      storageItemList
        .filter((item) => item.type === 'ingredient')
        .map((item) => item.ingredientId),
    );
  }, [storageItemList]);

  const sortedMyPickIngredientList = useMemo(() => {
    return [...myPickIngredientList]
      .sort((a, b) => {
        const aOwned = ownedIngredientIdSet.has(a.id);
        const bOwned = ownedIngredientIdSet.has(b.id);

        if (aOwned === bOwned) return 0;

        return aOwned ? 1 : -1;
      })
      .slice(0, 6);
  }, [myPickIngredientList, ownedIngredientIdSet]);

  const navigation = useNavigation<StackNavProp>();

  const onPress = () => navigation.navigate('MyPickScreen');

  return sortedMyPickIngredientList.length > 0 ? (
    <View className="gap-y-3">
      <SectionTitle
        title="나의 픽 식재료"
        icon="Heart"
        hasShowAllBtn
        onShowAllPress={onPress}
      />

      <CarouselContainer
        data={sortedMyPickIngredientList}
        initialIndex={sortedMyPickIngredientList.length}
        itemWidth={0.2}
        hasNavigation
        spacing={5}
        centerFocus
        hasPagination
        requiredMinimum={4}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <MyPickItemCard item={item} />}
      />
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
