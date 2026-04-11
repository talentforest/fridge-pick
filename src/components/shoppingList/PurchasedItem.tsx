import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import EditPurchasedItemSheet from '@/components/shoppingList/EditPurchasedItemSheet';
import { storageObj } from '@/constants';
import { useOverlay } from '@/hooks/common/useOverlay';
import { EditableStorageItemData, EnrichStorageItem, StorageItem } from '@/types/storage';
import { formatDateString, getRemainingDays } from '@/utils';
import { View } from 'react-native';

interface PurchasedItemProps {
  item: EnrichStorageItem;
  setItems: React.Dispatch<React.SetStateAction<StorageItem[]>>;
  index?: number;
}

export default function PurchasedItem({ item, setItems, index }: PurchasedItemProps) {
  const { ingredient, ...storageItem } = item;

  const { openSheet, closeSheet } = useOverlay();

  const date = new Date(item.expiresAt);

  const currentStorage = storageObj[storageItem.storage.type];

  const infoByItem = [
    {
      label: '보관위치',
      value: currentStorage?.label,
      icon: currentStorage.icon,
      color: currentStorage.color,
    },
    {
      label: '소비기한',
      value: formatDateString(date, 'yy년 M월 d일'),
      icon: 'Calendar' as const,
      color: 'text' as const,
    },
  ];

  const onEditSubmit = (id: string, newData: EditableStorageItemData) => {
    setItems((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, ...newData } : item;
      }),
    );
    closeSheet();
  };

  const onEditPress = () =>
    openSheet({
      hasDim: true,
      render: () => (
        <EditPurchasedItemSheet initialItem={item} onEditSubmit={onEditSubmit} />
      ),
    });

  return (
    <Card className={`flex-row overflow-hidden px-2 py-4`}>
      {/* 인덱스 넘버 */}
      {index && (
        <View className="absolute left-0 top-0 items-center justify-center rounded-br-xl bg-blue-1 p-2.5">
          <Text className="font-extrabold text-blue-5">{index}</Text>
        </View>
      )}

      {/* 식재료 이미지 */}
      <View className={`w-24 items-center justify-center gap-y-1.5 `}>
        <IngredientImage ingredient={ingredient} size={60} />
        <Text className="line-clamp-2 text-center leading-6">
          {storageItem.customLabel || ingredient?.label}
        </Text>
      </View>

      {/* 중간선 */}
      <View className="ml-1 mr-3.5 border-r border-neutral-3" />

      {/* 식재료 정보 */}
      <View className="flex-1 gap-y-4">
        {infoByItem.map(({ label, value, icon, color }) => (
          <View key={label} className="flex-1 justify-center ">
            <View className="gap-y-2">
              <Text className="text-sm !text-neutral-7">{label}</Text>

              <View className="flex-row items-center gap-x-1">
                <Icon name={icon} size={14} color={color} />
                <Text className="!text-[15px]">{value}</Text>
                {label === '소비기한' && (
                  <Text className="text-red-600">(+{getRemainingDays(date)}일)</Text>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* 수정버튼 */}
      <Icon
        name="Edit3"
        size={15}
        className="absolute bottom-1 right-1 size-9 items-center justify-center rounded-full bg-neutral-5 opacity-50"
        color="white"
        onPress={onEditPress}
      />
    </Card>
  );
}
