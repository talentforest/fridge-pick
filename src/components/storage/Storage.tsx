import GridContainer from '@/components/common/container/GridContainer';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';
import CategoryLabel from '@/components/storage/CategoryLabel';
import StorageItem from '@/components/storage/StorageItem';
import StorageItemSheet from '@/components/storage/StorageItemSheet';
import { image_empty_basket, storageObj } from '@/constants';
import { useStorageItemList } from '@/hooks';
import { useOverlay } from '@/provider/OverlayProvider';
import { StorageSideId, StorageTypeId } from '@/types/storage';
import { searchStorageItem } from '@/utils';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

interface StorageProps {
  storageType: StorageTypeId;
}

const SETTING_SIDE = false;

export default function Storage({ storageType }: StorageProps) {
  const [currSide, setCurrSide] = useState<StorageSideId>('inner');

  const [searchKeyword, setSearchKeyword] = useState('');

  const storage = useMemo(() => {
    return {
      type: storageType,
      side: currSide,
      section: '1' as const,
    };
  }, [storageType, currSide]);

  const { openSheet } = useOverlay();

  const { label, color } = storageObj[storageType];

  const {
    sideList,
    itemCountBySide,
    groupedItemsByCategory,
    allStorageItemList, //
  } = useStorageItemList({ storage });

  const searchedStorageItemList = searchStorageItem(
    searchKeyword,
    allStorageItemList,
  );

  return (
    <View className="gap-y-1">
      <TextInput
        className={`rounded-xl border border-border bg-white`}
        placeholder="찾으시는 식료품을 작성해주세요."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />

      <Card
        className={`min-h-[50vh] flex-1 gap-y-6 rounded-2xl !p-0 ${groupedItemsByCategory.length === 0 ? '' : '!border-0 !bg-transparent'}`}
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

        {/* 내부 */}
        {searchKeyword && (
          <ScrollView
            nestedScrollEnabled
            className="flex-1"
            contentContainerClassName="flex-1"
          >
            <View
              className={`flex-1 gap-y-3 rounded-2xl border border-border bg-white p-4`}
            >
              <Text>검색결과 {searchedStorageItemList.length}개</Text>

              {/* 식재료 리스트 */}
              <GridContainer gap={10} columns={4}>
                {searchedStorageItemList.map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() =>
                      openSheet({
                        element: <StorageItemSheet storageItem={item} />,
                      })
                    }
                  >
                    <StorageItem item={item} />
                  </Pressable>
                ))}
              </GridContainer>
            </View>
          </ScrollView>
        )}

        {!searchKeyword &&
          (groupedItemsByCategory.length !== 0 ? (
            <ScrollView
              nestedScrollEnabled
              className="flex-1"
              contentContainerClassName="flex-1"
            >
              <View className="flex-1 gap-y-3">
                {groupedItemsByCategory.map(({ category, items }, index) => (
                  <View
                    key={category.id}
                    className={`flex-1 gap-y-3 border border-border bg-white p-4 ${index === 0 ? 'rounded-t-2xl' : ''} ${index === groupedItemsByCategory.length - 1 ? 'rounded-b-2xl' : ''}`}
                  >
                    <CategoryLabel category={category} color={color} />

                    <View
                      className={`flex-1 flex-row flex-wrap items-center justify-between gap-2`}
                    >
                      {/* 식재료 리스트 */}
                      {items.map((item, index) => (
                        <Pressable
                          key={item.id}
                          onPress={() =>
                            openSheet({
                              element: <StorageItemSheet storageItem={item} />,
                            })
                          }
                          className={`${items.length === index + 1 ? 'mr-auto ' : ''}`}
                        >
                          <StorageItem item={item} />
                        </Pressable>
                      ))}
                    </View>
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
              <Text className="mb-12 text-inactive">
                갖고있는 식료품이 없습니다.
              </Text>
            </View>
          ))}
      </Card>
    </View>
  );
}
