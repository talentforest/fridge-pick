import DateInput from '@/components/common/DateInput';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import PressableIcon from '@/components/common/PressableIcon';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { storageObj } from '@/constants';
import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { formatDateString } from '@/utils';
import { getExpirationDate, getRemainingDays } from '@/utils/getExpirationDate';
import { useState } from 'react';
import { View } from 'react-native';

interface PurchasedItemProps {
  item: EnrichStorageItem;
  setItems: React.Dispatch<React.SetStateAction<StorageItem[]>>;
  index?: number;
}

export default function PurchasedItem({
  item,
  setItems,
  index,
}: PurchasedItemProps) {
  const { ingredient, ...storageItem } = item;

  const [isEditing, setIsEditing] = useState(false);

  const initialDate = getExpirationDate(ingredient?.expirationDays);
  const [date, setDate] = useState(new Date(initialDate));

  const onItemChange = (
    id: string,
    newData: Partial<Pick<StorageItem, 'storage' | 'expiresAt'>>,
  ) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newData } : item)),
    );
  };

  const onChangeDate = async (date: Date) => {
    setDate(date);
    onItemChange(item.id, { expiresAt: formatDateString(date, 'yyyy-MM-dd') });
  };

  const infoByItem = [
    {
      label: '소비기한',
      value: formatDateString(date, 'yy. MM. dd'),
      icon: 'Calendar' as const,
    },
    {
      label: '보관위치',
      value: storageObj[storageItem.storage.type].label,
      icon: storageObj[storageItem.storage.type].icon,
    },
  ];

  return (
    <View
      className={`flex-row overflow-hidden rounded-2xl border bg-gray-100 py-4 ${isEditing ? 'border-2 border-indigo-300' : ' border-gray-200'}`}
    >
      {/* 인덱스 넘버 */}
      {index && (
        <View className="absolute left-0 top-0 items-center justify-center rounded-br-xl bg-indigo-200 p-2.5">
          <Text className="font-extrabold text-md">{index}</Text>
        </View>
      )}

      {/* 식재료 이미지 */}
      <View
        className={`ml-2 w-[26%] items-center justify-center border-r border-gray-300 px-1`}
      >
        <IngredientImage ingredient={ingredient} size={55} />

        <Text className="line-clamp-2 text-center font-extrabold leading-6 text-indigo-600">
          {storageItem.customLabel || ingredient?.label}
        </Text>
      </View>

      {/* 식재료 정보 */}
      <View className="flex-1 justify-center gap-y-4 px-2.5">
        {infoByItem.map(({ label, value, icon }) => (
          <View key={label} className="gap-y-2">
            <Text className="!text-[13px] text-gray-500">{label}</Text>

            {!isEditing && (
              <View className="flex-row items-center gap-x-1">
                <Icon name={icon} size={17} />
                <Text>{value}</Text>
                {label === '소비기한' && (
                  <Text className="text-red-600">
                    (+{getRemainingDays(date)}일)
                  </Text>
                )}
              </View>
            )}

            {/* 수정 */}
            {isEditing && (
              <>
                {label === '소비기한' && (
                  <DateInput date={date} setDate={onChangeDate} />
                )}

                {label === '보관위치' && (
                  <View className="flex-row items-center gap-x-2">
                    {Object.values(storageObj).map((storage) => (
                      <PressableSquareBtn
                        key={storage.id}
                        name={storage.label}
                        className="flex !flex-col gap-y-2 !rounded-xl !p-2.5"
                        textClassName="text-sm font-extrabold"
                        iconName={storage.icon}
                        iconSize={22}
                        color={
                          storageItem.storage.type === storage.id
                            ? storage.color
                            : 'inActive'
                        }
                        onPress={() => {
                          if (storageItem.storage.type === storage.id) return;
                          onItemChange(item.id, {
                            storage: { type: storage.id },
                          });
                        }}
                      />
                    ))}
                  </View>
                )}
              </>
            )}
          </View>
        ))}
      </View>

      {/* 수정버튼 */}
      <PressableIcon
        icon={isEditing ? 'CheckCircle' : 'Edit3'}
        iconSize={isEditing ? 14 : 14}
        className="absolute bottom-1.5 right-1.5 rounded-full bg-gray-600 p-2.5 opacity-50"
        iconColor={isEditing ? 'white' : 'white'}
        onPress={() => setIsEditing((prev) => !prev)}
      />
    </View>
  );
}
