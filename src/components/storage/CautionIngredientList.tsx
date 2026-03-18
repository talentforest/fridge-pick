import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import CautionStorageItem from '@/components/storage/CautionStorageItem';
import StorageItemSheet from '@/components/storage/StorageItemSheet';
import { useStorageItemList } from '@/hooks';
import { useOverlay } from '@/provider/OverlayProvider';
import { StorageTypeId } from '@/types/storage';
import { Pressable, View } from 'react-native';

interface StorageProps {
  storageType: StorageTypeId;
}

export default function CautionIngredientList({ storageType }: StorageProps) {
  const { expiredStorageItemList } = useStorageItemList({
    storage: { type: storageType },
  });

  const { openSheet, closeSheet, openDatePicker } = useOverlay();

  return (
    <View className="px-6">
      {expiredStorageItemList.length ? (
        <View className="flex-row flex-wrap gap-2.5">
          {expiredStorageItemList.map((item, index) => {
            return (
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
                  })
                }
              >
                <CautionStorageItem
                  item={item}
                  index={index}
                  isCurrIndex={false}
                />
              </Pressable>
            );
          })}
        </View>
      ) : (
        <Card className="min-h-32 justify-center">
          <Text className="mb-3 text-center text-gray-400">
            소비기한 주의 식료품이 없어요
          </Text>
        </Card>
      )}
    </View>
  );
}
