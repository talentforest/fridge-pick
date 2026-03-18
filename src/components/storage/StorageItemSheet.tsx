import { changeItemAtom, deleteItemsAtom } from '@/atom/storageItemAtom';
import GridContainer from '@/components/common/container/GridContainer';
import DateTimePicker from '@/components/common/DateTimePicker';
import DishCompactCard from '@/components/common/DishCompactCard';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import ModalHeader from '@/components/common/ModalHeader';
import PressableIcon from '@/components/common/PressableIcon';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import SectionTitle from '@/components/common/SectionTitle';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import {
  categoryObj,
  colorByStorage,
  dishList,
  expirationStatusObj,
  storageObj,
} from '@/constants';
import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { formatDateString } from '@/utils';
import {
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';

import { format } from 'date-fns';
import { useSetAtom } from 'jotai';
import { ReactNode, useState } from 'react';
import { View } from 'react-native';

interface StorageItemSheetProps {
  storageItem: EnrichStorageItem;
  closeSheet: () => void;
  openDatePicker: (options: { element: ReactNode; hasDim?: boolean }) => void;
}

export default function StorageItemSheet({
  storageItem,
  closeSheet,
  openDatePicker,
}: StorageItemSheetProps) {
  const { ingredient, customLabel, storage, id, expiresAt } = storageItem;

  const [isEditing, setIsEditing] = useState(false);

  const [currentValue, setCurrentValue] = useState<
    Pick<StorageItem, 'expiresAt' | 'storage'>
  >({ expiresAt, storage });

  const remainingDays = getRemainingDays(new Date(currentValue.expiresAt));
  const expirationStatus = getExpirationStatus(+remainingDays);

  const deleteItems = useSetAtom(deleteItemsAtom);
  const onItemChange = useSetAtom(changeItemAtom);

  const storageItemInfo = [
    {
      label: '소비기한' as const,
      value: format(new Date(currentValue.expiresAt), 'yy. MM. dd.'),
      detail: (
        <Text className={expirationStatusObj[expirationStatus].textColor}>
          {formatRemainingDays(remainingDays)}
        </Text>
      ),
    },
    {
      label: '보관위치' as const,
      value: storageObj[currentValue.storage.type].label,
    },
  ];

  const onChangeDate = (date: Date) => {
    if (!date) return;

    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    setCurrentValue((prev) => ({ ...prev, expiresAt }));
    onItemChange({ id, newData: { expiresAt } });
  };

  return (
    <View className="my-5 w-full flex-1 gap-y-3">
      <View className="flex-1 flex-row items-center gap-x-3">
        <IngredientImage ingredient={ingredient} size={80} />

        <View className="flex-1 gap-y-1.5">
          <Text className="line-clamp-1 text-xl leading-8">
            {customLabel || ingredient?.label}
          </Text>

          {ingredient && (
            <View className="flex-row items-center gap-x-1">
              <Text className="text-md text-gray-500">
                {categoryObj[ingredient.category].label}
              </Text>
            </View>
          )}
        </View>
      </View>

      <View className="gap-y-3">
        {storageItemInfo.map(({ label, value, detail }) => (
          <View
            key={label}
            className="flex-1 flex-row items-start rounded-3xl bg-white pl-5 pr-2"
          >
            <Text className="mr-3 py-5 text-gray-500">{label}</Text>

            <View className="flex-1 py-5">
              <>
                {label === '소비기한' && (
                  <View className="flex-row gap-x-2">
                    <Text>{value}</Text>
                    {detail && detail}
                  </View>
                )}

                {label === '보관위치' && (
                  <View className="flex-row items-center gap-x-1">
                    <Icon
                      name={storageObj[currentValue.storage.type].icon}
                      color={storageObj[currentValue.storage.type].color}
                      size={18}
                    />
                    <Text>{value}</Text>
                  </View>
                )}
              </>

              {isEditing && label === '보관위치' && (
                <View className="mt-2 flex-row items-center gap-x-2">
                  {Object.values(storageObj).map(
                    ({ id: storageType, label, icon, color }) => (
                      <PressableSquareBtn
                        key={storageType}
                        name={label}
                        className="flex !flex-col gap-y-2 !rounded-xl !px-4 py-4"
                        textClassName="text-sm font-extrabold"
                        iconName={icon}
                        iconSize={22}
                        color={
                          currentValue.storage.type === storageType
                            ? color
                            : 'inActive'
                        }
                        onPress={() => {
                          setCurrentValue((prev) => ({
                            ...prev,
                            storage: { type: storageType },
                          }));
                        }}
                      />
                    ),
                  )}
                </View>
              )}
            </View>

            {/* 수정버튼 */}
            <PressableIcon
              icon={
                label === '소비기한'
                  ? 'Calendar'
                  : isEditing
                    ? 'CheckCircle'
                    : 'Edit'
              }
              iconSize={18}
              className="p-4"
              onPress={() => {
                if (label === '소비기한') {
                  return openDatePicker({
                    hasDim: true,
                    element: (
                      <View>
                        <ModalHeader title="날짜 변경하기" isDatePicker />
                        <DateTimePicker
                          value={new Date(storageItem.expiresAt)}
                          onChange={onChangeDate}
                        />
                      </View>
                    ),
                  });
                }

                if (label === '보관위치') {
                  onItemChange({
                    id,
                    newData: { storage: currentValue.storage },
                  });
                }

                setIsEditing((prev) => !prev);
              }}
            />
          </View>
        ))}
      </View>

      {/* 삭제 버튼 */}
      <PressableSquareBtn
        iconName="Trash2"
        name="냉장고에서 제거하기"
        className="mt-6 flex-1 !py-5"
        color="yellow"
        onPress={() => {
          deleteItems([id]);
          closeSheet();
        }}
      />

      <View className="mx-4 mb-2 mt-20 flex-row items-center gap-x-2">
        <SectionTitle
          icon="HandPlatter"
          iconColor="blue"
          className="items-center !pl-0"
          title={`${customLabel || storageItem?.ingredient?.label} 활용 요리`}
          textClassName="!text-lg text-blue-600 font-extrabold"
        />
        <View className="flex-1 border border-blue-100" />
      </View>

      <GridContainer columns={2} gap={10}>
        {dishList.slice(0, 2).map((item) => (
          <DishCompactCard
            key={item.name}
            dish={item}
            className={`bg-indigo-100 ${colorByStorage['blue'].border}`}
          />
        ))}
      </GridContainer>
    </View>
  );
}
