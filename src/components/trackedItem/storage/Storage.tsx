import { itemListByStorageAtom, searchKeywordAtom } from '@/atom/storageItemAtom';
import { image_empty_basket, storageObj } from '@/constants';
import { useStorageItemList, useOverlay } from '@/hooks';
import { EnrichStorageItem, StorageSideId, StorageTypeId } from '@/types/storage';
import { searchStorageItem } from '@/utils';
import { useAtom, useAtomValue } from 'jotai';
import { useMemo, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import GridContainer from '@/components/common/container/GridContainer';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import StorageItem from '@/components/trackedItem/storage/StorageItem';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { useDebounce } from '@/hooks/common/useDebounce';

interface StorageProps {
  storageType: StorageTypeId;
  openItemPress: (item: EnrichStorageItem) => void;
}

const SETTING_SIDE = false;

export default function Storage({ storageType, openItemPress }: StorageProps) {
  const { label } = storageObj[storageType];

  const [currSide, setCurrSide] = useState<StorageSideId>('inner');

  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

  const storageItemList = useAtomValue(itemListByStorageAtom(storageType));

  const storage = useMemo(() => {
    return {
      type: storageType,
      side: currSide,
      section: '1' as const,
    };
  }, [storageType, currSide]);

  const {
    sideList,
    storageItemCountBySide,
    storageItemListByCategory, //
  } = useStorageItemList({ storage });

  const { closeSheet } = useOverlay();

  const searchedStorageItemList = useMemo(() => {
    if (!debouncedSearchKeyword) return storageItemList;
    return searchStorageItem(debouncedSearchKeyword, storageItemList);
  }, [debouncedSearchKeyword, storageItemList]);

  const onRefreshPress = () => {
    setSearchKeyword('');
    closeSheet();
  };

  return (
    <View className="min-h-[60vh] gap-y-3">
      <Card
        className={`min-h-[40vh] gap-y-6 rounded-2xl !p-0 ${storageItemListByCategory.length === 0 ? '' : '!border-0 !bg-transparent'}`}
      >
        {/* side(문쪽, 안쪽) 설정시 버튼 */}
        {SETTING_SIDE && (
          <View className="h-14 flex-row gap-x-3">
            {sideList.map(({ id, label: sideLabel }) => {
              return (
                <SquareBtn
                  key={id}
                  name={`${label} ${sideLabel}  ${storageItemCountBySide[id] ?? 0}개`}
                  onPress={() => setCurrSide(id)}
                />
              );
            })}
          </View>
        )}

        {/* 검색결과 내부 */}
        {debouncedSearchKeyword && (
          <ScrollView
            nestedScrollEnabled
            className="flex-1"
            contentContainerClassName="flex-1"
          >
            <View className={`flex-1 rounded-2xl bg-card px-4`}>
              <View className="h-12 flex-row items-center justify-between">
                <Text className="">검색결과 {searchedStorageItemList.length}개</Text>
                <Icon name="RefreshCcw" className="" size={18} onPress={onRefreshPress} />
              </View>

              <View className="w-full flex-1">
                {/* 검색 결과 식재료 리스트 */}
                {searchedStorageItemList.length > 0 ? (
                  <GridContainer columns={5} gap={4}>
                    {searchedStorageItemList.map((storageItem) => (
                      <TouchableOpacity
                        key={storageItem.id}
                        onPress={() => openItemPress(storageItem)}
                      >
                        <StorageItem storageItem={storageItem} />
                      </TouchableOpacity>
                    ))}
                  </GridContainer>
                ) : (
                  <View className="flex-1 items-center justify-center">
                    <Text className="mx-4 mb-[40%] text-center leading-7 text-gray-400">
                      냉장실에 &quot;{debouncedSearchKeyword}&quot; 식재료가 없어요.
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        )}

        {/* 내가 갖고 있는 현 상태 */}
        {!debouncedSearchKeyword &&
          (storageItemListByCategory.length !== 0 ? (
            <ScrollView
              nestedScrollEnabled
              className="flex-1"
              contentContainerClassName="flex-1"
            >
              <View className="flex-1 gap-y-4">
                {storageItemListByCategory.map(({ category, items }, index) => (
                  // 실제 카테고리별 박스
                  <View
                    key={category.id}
                    className={`flex-1 bg-card px-4 pb-4 ${index === 0 ? 'rounded-t-2xl' : ''} ${index === storageItemListByCategory.length - 1 ? 'rounded-b-2xl' : ''}`}
                  >
                    <View className="h-12 flex-row items-center gap-x-1">
                      {category.icon && <Icon name={category.icon} size={15} />}

                      <Text>{category.label}</Text>
                    </View>

                    <GridContainer columns={5} gap={4}>
                      {/* 식재료 리스트 */}
                      {items.map((storageItem) => (
                        <TouchableOpacity
                          key={storageItem.id}
                          onPress={() => openItemPress(storageItem)}
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
              <Text className="mb-12 text-inactive-text">갖고있는 식재료가 없어요.</Text>
            </View>
          ))}
      </Card>
    </View>
  );
}
