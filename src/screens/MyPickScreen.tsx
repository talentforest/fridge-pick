import { Image, View } from 'react-native';
import { useAtom, useAtomValue } from 'jotai';
import {
  favoriteFoodListAtom,
  favoriteIngredientListAtom,
  favoriteItemListAtom,
} from '@/atom/favoritesAtom';
import { useCallback, useState } from 'react';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { josa } from 'es-hangul';
import { image_mypick, ingredientCategoryObj } from '@/constants';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/types/RootStackParamList';
import Text from '@/components/common/ui/Text';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import GridContainer from '@/components/common/container/GridContainer';
import MyPickItemCard from '@/components/selectableItem/MyPickItemCard';
import Card from '@/components/common/ui/Card';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import Tab from '@/components/common/Tab';
import FilterTag from '@/components/common/FilterTag';
import FavoriteBtn from '@/components/common/FavoriteBtn';

type MyPickItemLocation = {
  tab: 'ingredient' | 'food';
  filter: '전체' | '보유' | '미보유';
};

type DetailRouteProp = RouteProp<RootStackParamList, 'MyPickScreen'>;

const myPickFilterList = ['전체', '보유', '미보유'] as const;

const myPickTabObj = {
  ingredient: {
    id: 'ingredient',
    label: '식재료',
  },
  food: {
    id: 'food',
    label: '메뉴',
  },
} as const;

export default function MyPickScreen() {
  const {
    params: { type },
  } = useRoute<DetailRouteProp>();

  const [allFavoriteItemList, setFavoriteItemList] = useAtom(favoriteItemListAtom);

  const storageItemList = useAtomValue(allStorageItemListAtom);
  const favoriteFoodList = useAtomValue(favoriteFoodListAtom);
  const favoriteIngredientList = useAtomValue(favoriteIngredientListAtom);

  const myPickTabList = Object.values(myPickTabObj);

  const [currTabAndFilter, setCurrTabAndFilter] = useState<MyPickItemLocation>({
    tab: type || 'ingredient',
    filter: '전체',
  });

  const [editCurrList, setEditCurrList] = useState<{
    isEditing: boolean;
    list: string[];
  }>({ isEditing: false, list: [] });

  const toggleEditing = () => {
    if (editCurrList.isEditing) {
      setFavoriteItemList((prev) =>
        prev.filter((item) => editCurrList.list.includes(item.id)),
      );
    }

    setEditCurrList((prev) => ({
      isEditing: !prev.isEditing,
      list: allFavoriteItemList.map((item) => item.id),
    }));
  };

  /** Tab이 아니고 Filter만 적용 */
  const getFilteredList = useCallback(
    ({ tab, filter }: MyPickItemLocation) => {
      const myPickObj = {
        food: favoriteFoodList,
        ingredient: favoriteIngredientList,
      };
      const myPickList = myPickObj[currTabAndFilter.tab];

      const filteredList =
        filter === '전체'
          ? myPickList
          : myPickList.filter((selectableItem) => {
              const key = createSelectableItemKey(selectableItem);

              const isOwned = storageItemList.some((storageItem) =>
                findTrackedItemWithKey(storageItem, key),
              );

              return filter === '보유' ? isOwned : !isOwned;
            });

      if (tab === 'ingredient') {
        const categoryOrder = Object.keys(ingredientCategoryObj);

        return [...filteredList].sort(
          (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
        );
      }

      return filteredList;
    },
    [currTabAndFilter.tab, favoriteFoodList, favoriteIngredientList, storageItemList],
  );

  const onFavoriteBtnPress = (myPickItemId: string) => {
    const isFavorite = editCurrList.list.includes(myPickItemId);

    setEditCurrList((prev) => ({
      ...prev,
      list: isFavorite
        ? prev.list.filter((itemId) => itemId !== myPickItemId)
        : [...prev.list, myPickItemId],
    }));
  };

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader
        title="나의 픽"
        right={{
          icon: !editCurrList.isEditing ? 'Edit' : 'CheckCircle2',
          onRightPress: toggleEditing,
        }}
      />

      <ScrollViewContainer contentContainerClassName="pt-1 gap-y-4">
        {/* Tab */}
        <View className="mx-1 flex-row">
          {myPickTabList.map(({ id, label }) => (
            <Tab
              key={label}
              subName={`${id === 'food' ? favoriteFoodList.length : favoriteIngredientList.length}개`}
              name={label}
              isSelected={currTabAndFilter.tab === id}
              onPress={() => setCurrTabAndFilter((prev) => ({ ...prev, tab: id }))}
            />
          ))}
        </View>

        {/* Filter */}
        <View className="mb-1 flex-row gap-x-2">
          {myPickFilterList.map((filter) => (
            <FilterTag
              key={filter}
              isActive={filter === currTabAndFilter.filter}
              name={`${filter} ${getFilteredList({ tab: currTabAndFilter.tab, filter }).length}`}
              color="indigo"
              textClassName="!text-[13px]"
              className="!rounded-full px-4"
              onPress={() => setCurrTabAndFilter((prev) => ({ ...prev, filter }))}
            />
          ))}
        </View>

        {/* PickItemList */}
        {getFilteredList(currTabAndFilter).length > 0 ? (
          <GridContainer columns={4} gap={8} horizontalInset={24}>
            {getFilteredList(currTabAndFilter).map((myPickItem) => (
              <View key={myPickItem.id}>
                <MyPickItemCard item={myPickItem} imageSize={55} />

                {editCurrList.isEditing ? (
                  // TODO: 흔들리며 나타나는 애니메이션 적용
                  <FavoriteBtn
                    isFavorite={editCurrList.list.includes(myPickItem.id)}
                    selectableItem={myPickItem}
                    className="absolute right-2.5 top-1.5 rounded-full bg-neutral-1 p-1.5"
                    size={15}
                    hasShadow
                    onBtnPress={() => onFavoriteBtnPress(myPickItem.id)}
                  />
                ) : (
                  <></>
                )}
              </View>
            ))}
          </GridContainer>
        ) : (
          <Card className="h-48 items-center justify-center gap-y-5 pb-6">
            <Image source={image_mypick} className="aspect-[1.45/1.2] h-20 opacity-50" />

            <Text className="text-neutral-5">
              나의 픽 {josa(myPickTabObj[currTabAndFilter.tab].label, '이/가')} 아직
              없어요
            </Text>
          </Card>
        )}
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
