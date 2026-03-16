import GridContainer from '@/components/common/container/GridContainer';
import DishCompactCard from '@/components/common/DishCompactCard';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import PressableIcon from '@/components/common/PressableIcon';
import SectionTitle from '@/components/common/SectionTitle';
import Text from '@/components/common/ui/Text';
import {
  categoryObj,
  colorByStorage,
  dishList,
  expirationStatusObj,
  storageObj,
} from '@/constants';
import { EnrichStorageItem } from '@/types/storage';
import {
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';
import { format } from 'date-fns';
import { View } from 'react-native';

interface StorageItemSheetProps {
  storageItem: EnrichStorageItem;
}

export default function StorageItemSheet({
  storageItem,
}: StorageItemSheetProps) {
  const { ingredient, customLabel } = storageItem;

  const remainingDays = getRemainingDays(new Date(storageItem?.expiresAt));
  const expirationStatus = getExpirationStatus(+remainingDays);

  const storageItemInfo = [
    {
      label: '소비기한',
      value: format(new Date(storageItem.expiresAt), 'yyyy. MM. dd'),
      detail: (
        <Text className={expirationStatusObj[expirationStatus].textColor}>
          {formatRemainingDays(remainingDays)}
        </Text>
      ),
    },
    {
      label: '보관위치',
      value: storageObj[storageItem.storage.type].label,
    },
  ];

  return (
    <View className="mt-5 gap-y-3">
      <View className="flex-row items-center gap-x-3">
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

        <View className="mb-auto mt-3 flex-row gap-x-1">
          <PressableIcon icon="Edit" iconSize={20} className="p-2" />
          <PressableIcon
            icon="Trash2"
            iconSize={20}
            className="p-2"
            // onPress={()=> }
          />
        </View>
      </View>

      <View className="gap-y-2.5">
        {storageItemInfo.map(({ label, value, detail }) => (
          <View
            key={label}
            className="flex-row items-center gap-x-2 rounded-2xl bg-white p-5"
          >
            <Text className="text-gray-500">{label}</Text>
            <Text>{value}</Text>
            {detail && detail}
          </View>
        ))}
      </View>

      <View className="mx-4 mb-2 mt-10 flex-row items-center gap-x-2">
        <SectionTitle
          icon="HandPlatter"
          iconColor="blue"
          className="items-center !pl-0"
          title={`${storageItem.customLabel || storageItem?.ingredient?.label} 활용 요리`}
          textClassName="!text-lg text-blue-600 font-extrabold"
        />
        <View className="flex-1 border border-blue-100" />
      </View>

      <GridContainer columns={2} gap={10}>
        {dishList.map((item) => (
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
