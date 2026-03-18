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

  const { openSheet, closeSheet, openDatePicker } = useOverlay();

  const { label, color } = storageObj[storageType];

  const {
    sideList,
    itemCountBySide,
    itemListByCategory,
    itemListByStorage, //
  } = useStorageItemList({ storage });

  const searchedStorageItemList = searchStorageItem(
    searchKeyword,
    itemListByStorage,
  );

  return (
    <View className="gap-y-3">
      <TextInput
        icon="Search"
        className={`rounded-xl border border-border bg-white`}
        placeholder="찾으시는 식료품을 작성해주세요."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />

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
            <View
              className={`flex-1 gap-y-3 rounded-2xl border border-border bg-white p-4`}
            >
              <Text>검색결과 {searchedStorageItemList.length}개</Text>

              {/* 검색 결과 식재료 리스트 */}
              <GridContainer gap={10} columns={5}>
                {searchedStorageItemList.map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() =>
                      openSheet({
                        element: (
                          <StorageItemSheet
                            storageItem={item}
                            closeSheet={closeSheet}
                            openDatePicker={openDatePicker}
                          />
                        ),
                        options: {
                          snapPoints: ['80%'],
                        },
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
                        <Pressable
                          key={item.id}
                          onPress={() =>
                            openSheet({
                              element: (
                                <StorageItemSheet
                                  storageItem={item}
                                  closeSheet={closeSheet}
                                  openDatePicker={openDatePicker}
                                />
                              ),
                              options: {
                                snapPoints: ['45%'],
                              },
                            })
                          }
                        >
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
              <Text className="mb-12 text-inactive">
                갖고있는 식료품이 없습니다.
              </Text>
            </View>
          ))}
      </Card>
    </View>
  );
}
