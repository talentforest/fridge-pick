import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import CautionStorageItem from '@/components/storage/CautionStorageItem';
import StorageItemSheet from '@/components/storage/StorageItemSheet';
import { useStorageItemList } from '@/hooks';
import { useOverlay } from '@/hooks/common/useOverlay';
import { StorageItem, StorageTypeId } from '@/types/storage';
import { Pressable, View } from 'react-native';

interface StorageProps {
  storageType: StorageTypeId;
}

export default function CautionIngredientList({ storageType }: StorageProps) {
  const { expiredStorageItemList } = useStorageItemList({
    storage: { type: storageType },
  });

  const { openSheet } = useOverlay();

  const openPress = (storageItem: StorageItem) => {
    openSheet({
      hasDim: true,
      render: () => <StorageItemSheet storageItem={storageItem} />,
    });
  };

  return (
    <View>
      {expiredStorageItemList.length ? (
        <View className="flex-row flex-wrap gap-2.5">
          {expiredStorageItemList.map((item, index) => {
            return (
              <Pressable key={item.id} onPress={() => openPress(item)}>
                <CautionStorageItem item={item} index={index} isCurrIndex={false} />
              </Pressable>
            );
          })}
        </View>
      ) : (
        <Card className="min-h-32 justify-center">
          <Text className="mb-3 text-center text-gray-400">
            소비기한 주의 식재료가 없어요
          </Text>
        </Card>
      )}
    </View>
  );
}
