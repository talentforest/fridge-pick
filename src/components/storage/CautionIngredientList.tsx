import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import CautionStorageItem from '@/components/storage/CautionStorageItem';
import { useStorageItemList } from '@/hooks';
import { StorageTypeId } from '@/types/storage';
import { TouchableOpacity, View } from 'react-native';

interface StorageProps {
  storageType: StorageTypeId;
  openItemPress: (id: string) => void;
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
          {expiredStorageItemList.map((storageItem, index) => {
            return (
              <TouchableOpacity
                key={storageItem.id}
                activeOpacity={0.8}
                onPress={() => openItemPress(storageItem.id)}
              >
                <CautionStorageItem
                  storageItem={storageItem}
                  index={index}
                  isCurrIndex={false}
                />
              </TouchableOpacity>
            );
          })}
        </GridContainer>
      ) : (
        <Card className="min-h-36 justify-center">
          <Text className="text-center text-inactive-text">
            소비기한 주의 식재료가 없어요
          </Text>
        </Card>
      )}
    </View>
  );
}
