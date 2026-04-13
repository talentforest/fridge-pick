import { itemListByStorageAtom, searchKeywordAtom } from '@/atom/storageItemAtom';
import { image_empty_basket, storageObj } from '@/constants';
import { useStorageItemList } from '@/hooks';
import { useOverlay } from '@/hooks/common/useOverlay';
import { StorageSideId, StorageTypeId } from '@/types/storage';
import { searchStorageItem } from '@/utils';
import { useAtom, useAtomValue } from 'jotai';
import { useMemo, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import GridContainer from '@/components/common/container/GridContainer';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import CategoryLabel from '@/components/storage/CategoryLabel';
import StorageItem from '@/components/storage/StorageItem';

interface StorageProps {
  storageType: StorageTypeId;
  openItemPress: (storageItemId: string) => void;
}

const SETTING_SIDE = false;

export default function Storage({ storageType, openItemPress }: StorageProps) {
  const [currSide, setCurrSide] = useState<StorageSideId>('inner');

  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const storageItemList = useAtomValue(itemListByStorageAtom(storageType));

  const storage = useMemo(() => {
    return {
      type: storageType,
      side: currSide,
      section: '1' as const,
    };
  }, [storageType, currSide]);

  const { closeSheet } = useOverlay();

  const { label } = storageObj[storageType];

  const { sideList, itemCountBySide, storageItemListByCategory } = useStorageItemList({
    storage,
  });

  const searchedStorageItemList = useMemo(() => {
    if (!searchKeyword) return storageItemList;
    return searchStorageItem(searchKeyword, storageItemList);
  }, [searchKeyword, storageItemList]);

  const onRefreshPress = () => {
    setSearchKeyword('');
    closeSheet();
  };

  return (
    <View className="gap-y-3">
      <Card
        className={`min-h-[50vh] flex-1 gap-y-6 rounded-2xl !p-0 ${storageItemListByCategory.length === 0 ? '' : '!border-0 !bg-transparent'}`}
      >
        {/* side(문쪽, 안쪽) 설정시 버튼 */}
        {SETTING_SIDE && (
          <View className="h-14 flex-row gap-x-3">
            {sideList.map(({ id, label: sideLabel }) => {
              return (
                <SquareBtn
                  key={id}
                  name={`${label} ${sideLabel}  ${itemCountBySide[id] ?? 0}개`}
                  onPress={() => setCurrSide(id)}
                />
              );
            })}
          </View>
        )}

        {/* 검색결과 내부 */}
        {searchKeyword && (
          <ScrollView
            nestedScrollEnabled
            className="flex-1"
            contentContainerClassName="flex-1"
          >
            <View className={`flex-1 rounded-2xl border border-border bg-card`}>
              <View className="flex-row items-center justify-between">
                <Text className="pl-4">검색결과 {searchedStorageItemList.length}개</Text>
                <Icon
                  name="RefreshCcw"
                  className="px-5 py-4"
                  size={18}
                  onPress={onRefreshPress}
                />
              </View>

              <View className="flex-1 px-4 pb-4">
                {/* 검색 결과 식재료 리스트 */}
                {searchedStorageItemList.length > 0 ? (
                  <GridContainer gap={10} columns={5}>
                    {searchedStorageItemList.map((storageItem) => (
                      <TouchableOpacity
                        key={storageItem.id}
                        activeOpacity={0.7}
                        onPress={() => openItemPress(storageItem.id)}
                      >
                        <StorageItem storageItem={storageItem} />
                      </TouchableOpacity>
                    ))}
                  </GridContainer>
                ) : (
                  <View className="flex-1 items-center justify-center">
                    <Text className="mx-4 mb-[40%] text-center leading-7 text-gray-400">
                      냉장실에 &quot;{searchKeyword}&quot; 식재료가 없습니다.
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        )}

        {!searchKeyword &&
          (storageItemListByCategory.length !== 0 ? (
            <ScrollView
              nestedScrollEnabled
              className="flex-1"
              contentContainerClassName="flex-1"
            >
              <View className="flex-1 gap-y-3">
                {storageItemListByCategory.map(({ category, items }, index) => (
                  <View
                    key={category.id}
                    className={`flex-1 gap-y-3 border border-border bg-card p-4 ${index === 0 ? 'rounded-t-2xl' : ''} ${index === storageItemListByCategory.length - 1 ? 'rounded-b-2xl' : ''}`}
                  >
                    <CategoryLabel category={category} />

                    <GridContainer gap={4} columns={5}>
                      {/* 식재료 리스트 */}
                      {items.map((storageItem) => (
                        <TouchableOpacity
                          key={storageItem.id}
                          activeOpacity={0.7}
                          onPress={() => openItemPress(storageItem.id)}
                        >
                          <StorageItem storageItem={storageItem} />
                        </TouchableOpacity>
                      ))}
                    </GridContainer>
                  </View>
                ))}
              </View>
            </ScrollView>
          ) : (
            <View className="flex-1 items-center justify-center">
              <Image
                source={image_empty_basket}
                className="aspect-square size-1/4 opacity-60"
              />
              <Text className="mb-12 text-inactive-text">
                갖고있는 식재료가 없습니다.
              </Text>
            </View>
          ))}
      </Card>
    </View>
  );
}
