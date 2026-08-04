import { Image, View } from 'react-native';
import { useAtomValue } from 'jotai';
import { SelectableItem } from '@/types/selectableItem';
import {
  favoriteConsumableFoodListAtom,
  favoriteIngredientListAtom,
} from '@/atom/favoritesAtom';
import { useCallback, useState } from 'react';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { josa } from 'es-hangul';
import { image_empty_plate, ingredientCategoryObj } from '@/constants';
import Text from '@/components/common/ui/Text';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import GridContainer from '@/components/common/container/GridContainer';
import MyPickItemCard from '@/components/selectableItem/MyPickItemCard';
import Card from '@/components/common/ui/Card';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import Tab from '@/components/common/Tab';
import FilterTag from '@/components/common/FilterTag';

type MyPickLabel = '식재료' | '메뉴';
type MyPickFilter = '전체' | '보유' | '미보유';
type MyPickPosition = {
  label: MyPickLabel;
  filter: MyPickFilter;
};

export default function MyPickScreen() {
  const storageItemList = useAtomValue(allStorageItemListAtom);

  const [currLabelAndFilter, setCurrLabelAndFilter] = useState<MyPickPosition>({
    label: '식재료',
    filter: '전체',
  });

  const favoriteConsumableFoodList = useAtomValue(favoriteConsumableFoodListAtom);
  const favoriteIngredientList = useAtomValue(favoriteIngredientListAtom);

  const myPickTabList = [
    { label: '식재료', subName: ` ${favoriteIngredientList.length}` },
    { label: '메뉴', subName: ` ${favoriteConsumableFoodList.length}` },
  ] as const;

  const myPickFilterList = ['전체', '보유', '미보유'] as const;

  const getFilteredList = useCallback(
    (position: MyPickPosition): SelectableItem[] => {
      const { label, filter } = position;

      const list =
        label === '식재료' ? favoriteIngredientList : favoriteConsumableFoodList;

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
    [favoriteConsumableFoodList, favoriteIngredientList, storageItemList],
  );

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="나의 픽" />

      <ScrollViewContainer contentContainerClassName="pt-1 gap-y-4">
        {/* Tab */}
        <View className="mx-1 flex-row">
          {myPickTabList.map(({ label, subName }) => (
            <Tab
              key={label}
              name={label}
              subName={subName}
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
          <GridContainer columns={4}>
            {getFilteredList(currLabelAndFilter).map((item) => (
              <MyPickItemCard
                key={item.id}
                item={item}
                className="!px-2"
                imageSize={50}
                textClassName="text-md line-clamp-1"
              />
            ))}
          </GridContainer>
        ) : (
          <Card className="h-48 items-center justify-center gap-y-2 pb-6">
            <Image
              source={image_empty_plate}
              className="aspect-square h-[100px] opacity-80"
            />

            <Text className="text-neutral-5">
              나의 픽 {josa(currLabelAndFilter.label, '이/가')} 아직 없어요
            </Text>
          </Card>
        )}
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
