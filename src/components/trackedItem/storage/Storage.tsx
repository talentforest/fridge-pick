import { image_empty_basket } from '@/constants';
import { useCurrStorageItemList } from '@/hooks';
import { EnrichedStorageItem, StorageTypeId } from '@/types/storage';
import { Image, ScrollView, View } from 'react-native';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import StorageBoxByCategory from '@/components/trackedItem/storage/StorageBoxByCategory';

interface StorageProps {
  storageType: StorageTypeId;
  openItemPress: (item: EnrichedStorageItem) => void;
}

export default function Storage({ storageType, openItemPress }: StorageProps) {
  const currStorage = {
    type: storageType,
    side: 'inner',
    section: '1',
  } as const;

  const { storageItemListByCategory } = useCurrStorageItemList({ currStorage });

  return (
    <Card className={`min-h-[55vh] gap-y-6 overflow-hidden border-0 !p-0`}>
      {storageItemListByCategory.length !== 0 ? (
        <ScrollView
          nestedScrollEnabled
          className="flex-1"
          contentContainerClassName="flex-1 gap-y-4 bg-neutral-1"
        >
          {storageItemListByCategory.map(({ category, itemList }) => (
            // 실제 식재료 카테고리별 박스
            <StorageBoxByCategory
              key={category.label}
              category={category}
              storageItemList={itemList}
              openItemPress={openItemPress}
            />
          ))}
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
  );
}
