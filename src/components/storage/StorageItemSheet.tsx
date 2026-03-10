import DishCompactCard from '@/components/common/DishCompactCard';
import PressableIcon from '@/components/common/PressableIcon';
import SectionTitle from '@/components/common/SectionTitle';
import Text from '@/components/common/ui/Text';
import {
  categoryObj,
  colorByStorage,
  dishList,
  expirationStatusObj,
  ingredientImagesObj,
  storageObj,
} from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { StorageItem } from '@/types/storage';
import {
  formatRemainingDays,
  getExpirationDate,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';
import { format } from 'date-fns';
import { Image, View } from 'react-native';

interface StorageItemSheetProps {
  storageItem: StorageItem & {
    ingredient: Ingredient;
  };
}

export default function StorageItemSheet({
  storageItem,
}: StorageItemSheetProps) {
  const { ingredient, ingredientId, customLabel } = storageItem;

  const expirationDate = getExpirationDate(storageItem);
  const remainingDays = getRemainingDays(expirationDate);
  const expirationStatus = getExpirationStatus(+remainingDays);

  const storageItemInfo = [
    {
      label: '소비기한',
      value: format(expirationDate, 'yyyy. MM. dd'),
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
    <View className="gap-y-3">
      <View className="flex-row items-center gap-x-3">
        <Image
          source={ingredientImagesObj[ingredient.category]![ingredientId]}
          style={{ width: 80, height: 80 }}
          className="aspect-square rounded-xl p-1"
        />

        <View className="flex-1 gap-y-1.5">
          <Text className="line-clamp-1 text-xl leading-8">
            {customLabel || ingredient.label}
          </Text>

          <View className="flex-row items-center gap-x-1">
            <Text className="text-md text-gray-500">
              {categoryObj[ingredient.category].label}
            </Text>
          </View>
        </View>

        <View className="mb-auto mt-3 flex-row gap-x-1">
          <PressableIcon icon="Edit3" iconSize={21} className="p-2" />
          <PressableIcon icon="Trash2" className="p-2" />
        </View>
      </View>

      <View className="gap-y-2.5">
        {storageItemInfo.map(({ label, value, detail }) => (
          <View
            key={label}
            className="flex-row items-center gap-x-2 rounded-xl bg-neutral-100 p-4"
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
          title={`${storageItem.customLabel || storageItem.ingredient.label} 활용 요리`}
          textClassName="!text-lg text-blue-600 font-extrabold"
        />
        <View className="flex-1 border border-blue-100" />
      </View>

      <View className="flex-row flex-wrap gap-3">
        {dishList.map((item) => (
          <DishCompactCard
            key={item.name}
            dish={item}
            className={`w-[48%] bg-indigo-100 ${colorByStorage['blue'].border}`}
          />
        ))}
      </View>

      {/* <View className="relative  rounded-2xl bg-indigo-50 py-6">
        <CarouselContainer
          data={dishList}
          initialIndex={dishList.length}
          itemWidth={0.6}
          hasNavigation
          centerFocus
          renderItem={({ item }) => (
            <DishCompactCard
              key={item.name}
              dish={item}
              className={`flex-1 bg-indigo-100 ${colorByStorage['blue'].border}`}
            />
          )}
          keyExtractor={(_, index) => `${index}`}
        />

        <View className="ml-auto mr-2 mt-6 flex-row items-center">
          <Text className="text-gray-600 underline">메뉴 더 보러가기</Text>
          <Icon name="ChevronRight" size="22" />
        </View>
      </View> */}
    </View>
  );
}
