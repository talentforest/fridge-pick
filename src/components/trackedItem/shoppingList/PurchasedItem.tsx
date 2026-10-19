import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import EditPurchasedItemSheet from '@/components/trackedItem/shoppingList/EditPurchasedItemSheet';
import { useOverlay } from '@/hooks';
import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { formatDateString, getTrackedItemData } from '@/utils';
import { View } from 'react-native';
import FoodImage from '@/components/common/FoodImage';
import { formatDistanceToNowStrict } from 'date-fns';
import { ko } from 'date-fns/locale';

interface PurchasedItemProps {
  storageItem: EnrichedStorageItem;
  setStorageItemList: React.Dispatch<React.SetStateAction<EnrichedStorageItem[]>>;
  index?: number;
}

export default function PurchasedItem({
  storageItem,
  setStorageItemList,
  index,
}: PurchasedItemProps) {
  const { openSheet, closeSheet } = useOverlay();

  const date = new Date(storageItem.expiresAt);

  const onEditSubmit = (id: string, newData: EditableStorageItem) => {
    setStorageItemList((prev) => {
      return prev.map((item) => {
        if (item.id !== id) return item;
        return { ...item, ...newData };
      });
    });

    closeSheet();
  };

  const onEditPress = () =>
    openSheet({
      snapPoints: ['80%'],
      render: () => (
        <EditPurchasedItemSheet
          initialStorageItem={storageItem}
          onEditSubmit={onEditSubmit}
        />
      ),
    });

  const remaining = formatDistanceToNowStrict(date, {
    locale: ko,
    addSuffix: true,
  });

  return (
    <Card className={`items-center overflow-hidden !pt-3`}>
      {/* 인덱스 넘버 */}
      {/* {index && (
        <View className="absolute left-0 top-0 items-center justify-center rounded-br-xl bg-blue-1 p-2.5">
          <Text className="font-extrabold text-blue-7">{index}</Text>
        </View>
      )} */}

      <FoodImage trackedItem={storageItem} imageSize={40} />

      <Text className="mt-1.5 line-clamp-1 font-extrabold text-sm">
        {getTrackedItemData(storageItem).label}
      </Text>

      {/* 식재료 정보 */}
      <View className="mt-3 items-center gap-y-1.5">
        <Text className="font-extrabold !text-sm text-blue-7">{remaining}</Text>

        <Text className="!text-sm text-neutral-7">
          {formatDateString(date, 'yy. MM. dd')}
        </Text>
      </View>

      {/* 수정버튼 */}
      <Icon
        name="Edit3"
        size={10}
        className="absolute right-1.5 top-1.5 size-7 items-center justify-center rounded-full bg-neutral-5 opacity-50"
        color="white"
        onPress={onEditPress}
      />
    </Card>
  );
}
