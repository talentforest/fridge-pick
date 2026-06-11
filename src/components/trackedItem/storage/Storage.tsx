import { horizontalInset, image_empty_basket, storageObj } from '@/constants';
import { useStorageItemList } from '@/hooks';
import { EnrichStorageItem, StorageSideId, StorageTypeId } from '@/types/storage';
import { useMemo, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import GridContainer from '@/components/common/container/GridContainer';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import StorageItem from '@/components/trackedItem/storage/StorageItem';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

interface StorageProps {
  storageType: StorageTypeId;
  openItemPress: (item: EnrichStorageItem) => void;
}

const SETTING_SIDE = false;

export default function Storage({ storageType, openItemPress }: StorageProps) {
  const { label } = storageObj[storageType];

  const [currSide, setCurrSide] = useState<StorageSideId>('inner');

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

        {/* 내가 갖고 있는 현 상태 */}
        {storageItemListByCategory.length !== 0 ? (
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
                  className={`flex-1 bg-card px-[16px] pb-4 ${index === 0 ? 'rounded-t-2xl' : ''} ${index === storageItemListByCategory.length - 1 ? 'rounded-b-2xl' : ''}`}
                >
                  <View className="h-12 flex-row items-center gap-x-1">
                    {category.icon && <Icon name={category.icon} size={15} />}

                    <Text>{category.label}</Text>
                  </View>

                  <GridContainer
                    columns={5}
                    gap={4}
                    horizontalInset={horizontalInset + 16}
                  >
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
        )}
      </Card>
    </View>
  );
}
