import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import CautionStorageItem from '@/components/storage/CautionStorageItem';
import { useStorageItemList } from '@/hooks';
import { StorageItem, StorageTypeId } from '@/types/storage';
import { Pressable, View } from 'react-native';

interface StorageProps {
  storageType: StorageTypeId;
  openItemPress: (item: StorageItem) => void;
}

export default function CautionIngredientList({
  storageType,
  openItemPress,
}: StorageProps) {
  const { expiredStorageItemList } = useStorageItemList({
    storage: { type: storageType },
  });

  return (
    <View>
      {expiredStorageItemList.length ? (
        <GridContainer columns={3} gap={10}>
          {expiredStorageItemList.map((item, index) => {
            return (
              <Pressable key={item.id} onPress={() => openItemPress(item)}>
                <CautionStorageItem item={item} index={index} isCurrIndex={false} />
              </Pressable>
            );
          })}
        </GridContainer>
      ) : (
        <Card className="min-h-32 justify-center">
          <Text className="text-center text-inactive-text">
            소비기한 주의 식재료가 없어요
          </Text>
        </Card>
      )}
    </View>
  );
}
