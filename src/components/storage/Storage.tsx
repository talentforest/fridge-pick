import { searchKeywordAtom } from '@/atom/storageItemAtom';
import GridContainer from '@/components/common/container/GridContainer';
import PressableIcon from '@/components/common/PressableIcon';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import CategoryLabel from '@/components/storage/CategoryLabel';
import StorageItem from '@/components/storage/StorageItem';
import StorageItemSheet from '@/components/storage/StorageItemSheet';
import { image_empty_basket, storageObj } from '@/constants';
import { useStorageItemList } from '@/hooks';
import { useOverlay } from '@/hooks/common/useOverlay';
import {
  StorageItem as StorageItemType,
  StorageSideId,
  StorageTypeId,
} from '@/types/storage';
import { searchStorageItem } from '@/utils';
import { useAtom } from 'jotai';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

interface StorageProps {
  storageType: StorageTypeId;
}

const SETTING_SIDE = false;

export default function Storage({ storageType }: StorageProps) {
  const [currSide, setCurrSide] = useState<StorageSideId>('inner');

  const storage = useMemo(() => {
    return {
      type: storageType,
      side: currSide,
      section: '1' as const,
    };
  }, [storageType, currSide]);

  const { openSheet, closeSheet } = useOverlay();

  const { label, color } = storageObj[storageType];

  const {
    sideList,
    itemCountBySide,
    itemListByCategory,
    itemListByStorage, //
  } = useStorageItemList({ storage });

  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const searchedStorageItemList = useMemo(() => {
    if (!searchKeyword) return itemListByStorage;
    return searchStorageItem(searchKeyword, itemListByStorage);
  }, [searchKeyword, itemListByStorage]);

  const openStorageItem = async (item: StorageItemType) => {
    openSheet({
      hasDim: true,
      render: () => <StorageItemSheet storageItem={item} />,
    });
  };

  return (
    <View className="gap-y-3">
      <Card
        className={`min-h-[50vh] flex-1 gap-y-6 rounded-2xl !p-0 ${itemListByCategory.length === 0 ? '' : '!border-0 !bg-transparent'}`}
      >
        {/* side(문쪽, 안쪽) 설정시 버튼 */}
        {SETTING_SIDE && (
          <View className="h-14 flex-row gap-x-3">
            {sideList.map(({ id, label: sideLabel }) => {
              return (
                <PressableSquareBtn
                  key={id}
                  name={`${label} ${sideLabel}  ${itemCountBySide[id] ?? 0}개`}
                  onPress={() => setCurrSide(id)}
                  isInActive={!(id === currSide)}
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
            <View className={`flex-1 rounded-2xl border border-border bg-white`}>
              <View className="flex-row items-center justify-between">
                <Text className="pl-4">검색결과 {searchedStorageItemList.length}개</Text>
                <PressableIcon
                  icon="RefreshCcw"
                  className="px-5 py-4"
                  iconSize={18}
                  onPress={() => {
                    setSearchKeyword('');
                    closeSheet();
                  }}
                />
              </View>

              <View className="flex-1 px-4 pb-4">
                {/* 검색 결과 식재료 리스트 */}
                {searchedStorageItemList.length > 0 ? (
                  <GridContainer gap={10} columns={5}>
                    {searchedStorageItemList.map((item) => (
                      <Pressable
                        key={item.id}
                        onPress={() => {
                          openStorageItem(item);
                        }}
                      >
                        <StorageItem item={item} />
                      </Pressable>
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
          (itemListByCategory.length !== 0 ? (
            <ScrollView
              nestedScrollEnabled
              className="flex-1"
              contentContainerClassName="flex-1"
            >
              <View className="flex-1 gap-y-3">
                {itemListByCategory.map(({ category, items }, index) => (
                  <View
                    key={category.id}
                    className={`flex-1 gap-y-3 border border-border bg-white p-4 ${index === 0 ? 'rounded-t-2xl' : ''} ${index === itemListByCategory.length - 1 ? 'rounded-b-2xl' : ''}`}
                  >
                    <CategoryLabel category={category} color={color} />

                    <GridContainer gap={4} columns={5}>
                      {/* 식재료 리스트 */}
                      {items.map((item) => (
                        <Pressable key={item.id} onPress={() => openStorageItem(item)}>
                          <StorageItem item={item} />
                        </Pressable>
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
              <Text className="mb-12 text-inactive">갖고있는 식재료가 없습니다.</Text>
            </View>
          ))}
      </Card>
    </View>
  );
}
