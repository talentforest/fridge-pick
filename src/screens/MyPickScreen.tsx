import { Image, View } from 'react-native';
import { useAtomValue } from 'jotai';
import { favoriteFoodListAtom, favoriteIngredientListAtom } from '@/atom/favoritesAtom';
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

type MyPickLabel = '식재료' | '메뉴';
type MyPickFilter = '전체' | '보유' | '미보유';
type MyPickPosition = {
  label: MyPickLabel;
  filter: MyPickFilter;
};

type DetailRouteProp = RouteProp<RootStackParamList, 'MyPickScreen'>;

export default function MyPickScreen() {
  const {
    params: { type },
  } = useRoute<DetailRouteProp>();

  const storageItemList = useAtomValue(allStorageItemListAtom);
  const favoriteFoodList = useAtomValue(favoriteFoodListAtom);
  const favoriteIngredientList = useAtomValue(favoriteIngredientListAtom);

  const myPickTabObj = {
    ingredient: {
      label: '식재료',
      list: favoriteIngredientList,
    },
    food: {
      label: '메뉴',
      list: favoriteFoodList,
    },
  } as const;

  const myPickTabList = Object.values(myPickTabObj);

  const [currLabelAndFilter, setCurrLabelAndFilter] = useState<MyPickPosition>({
    label: myPickTabObj[type].label,
    filter: '전체',
  });

  const [currList, setCurrList] = useState({
    isEditing: false,
    favoriteList: myPickTabObj[type].list.map((myPickItem) => ({
      ...myPickItem,
      isFavorite: true,
    })),
  });

  const toggleEditing = () => {
    if (currList.isEditing) {
      // 변경
    }
    setCurrList((prev) => ({ ...prev, isEditing: !prev.isEditing }));
  };

  const myPickFilterList = ['전체', '보유', '미보유'] as const;

  const getFilteredList = useCallback(
    (position: MyPickPosition) => {
      const { label, filter } = position;

      const list = currList.favoriteList;

      const filteredList =
        filter === '전체'
          ? list
          : list.filter((selectableItem) => {
              const key = createSelectableItemKey(selectableItem);

              const isOwned = storageItemList.some((storageItem) =>
                findTrackedItemWithKey(storageItem, key),
              );

              return filter === '보유' ? isOwned : !isOwned;
            });

      if (label === '식재료') {
        const categoryOrder = Object.keys(ingredientCategoryObj);

        return [...filteredList].sort(
          (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
        );
      }

      return filteredList;
    },
    [currList.favoriteList, storageItemList],
  );

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader
        title="나의 픽"
        right={{
          icon: !currList.isEditing ? 'Edit' : 'CheckCircle',
          onRightPress: toggleEditing,
        }}
      />

      <ScrollViewContainer contentContainerClassName="pt-1 gap-y-4">
        {/* Tab */}
        <View className="mx-1 flex-row">
          {myPickTabList.map(({ label, list }) => (
            <Tab
              key={label}
              name={label}
              subName={`${list.length}`}
              isSelected={currLabelAndFilter.label === label}
              onPress={() => setCurrLabelAndFilter((prev) => ({ ...prev, label }))}
            />
          ))}
        </View>

        {/* Filter */}
        <View className="mb-1 flex-row gap-x-2">
          {myPickFilterList.map((filter) => (
            <FilterTag
              key={filter}
              isActive={filter === currLabelAndFilter.filter}
              name={`${filter} ${getFilteredList({ label: currLabelAndFilter.label, filter }).length}`}
              color="indigo"
              textClassName="!text-[13px]"
              className="!rounded-full px-4"
              onPress={() => setCurrLabelAndFilter((prev) => ({ ...prev, filter }))}
            />
          ))}
        </View>

        {getFilteredList(currLabelAndFilter).length > 0 ? (
          <GridContainer columns={4} gap={2}>
            {getFilteredList(currLabelAndFilter).map((myPickItem) => (
              <View key={myPickItem.id}>
                <MyPickItemCard item={myPickItem} imageSize={55} />

                {currList.isEditing ? (
                  // TODO: 흔들리며 나타나는 애니메이션 적용
                  <FavoriteBtn
                    isFavorite={myPickItem.isFavorite}
                    selectableItem={myPickItem}
                    className="absolute right-2.5 top-1.5 rounded-full bg-neutral-1 p-1.5"
                    size={15}
                    hasShadow
                    onBtnPress={() => {
                      setCurrList((prev) => ({
                        ...prev,
                        favoriteList: prev.favoriteList.map((item) => {
                          if (myPickItem.isFavorite) {
                            if (item.id === myPickItem.id) {
                              return { ...item, isFavorite: false };
                            }
                            return item;
                          }

                          if (item.id === myPickItem.id) {
                            return { ...item, isFavorite: true };
                          }
                          return item;
                        }),
                      }));
                    }}
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
              나의 픽 {josa(currLabelAndFilter.label, '이/가')} 아직 없어요
            </Text>
          </Card>
        )}
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
