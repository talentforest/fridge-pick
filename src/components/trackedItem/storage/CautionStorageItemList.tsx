import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import { useStorageItemList } from '@/hooks';
import { EnrichStorageItem, StorageTypeId } from '@/types/storage';
import { TouchableOpacity, View } from 'react-native';

interface CautionStorageItemListProps {
  storageType: StorageTypeId;
  openItemPress: (item: EnrichStorageItem) => void;
}

export default function CautionStorageItemList({
  storageType,
  openItemPress,
}: CautionStorageItemListProps) {
  const storage = { type: storageType };
  const { cautionStorageItemList } = useStorageItemList({ storage });

  return (
    <View>
      {cautionStorageItemList.length ? (
        <GridContainer columns={3}>
          {cautionStorageItemList.map(({ storageItem, remainingDays }, index) => {
            return (
              <TouchableOpacity
                key={storageItem.id}
                activeOpacity={0.8}
                onPress={() => openItemPress(storageItem)}
              >
                <CautionStorageItem
                  storageItem={storageItem}
                  index={index + 1}
                  isCurrIndex={false}
                  remainingDays={remainingDays}
                />
              </TouchableOpacity>
            );
          })}
        </GridContainer>
      ) : (
        <Card className="min-h-40 justify-center">
          <Text className="text-center text-inactive-text">
            소비기한 주의 식재료가 없어요
          </Text>
        </Card>
      )}
    </View>
  );
}
