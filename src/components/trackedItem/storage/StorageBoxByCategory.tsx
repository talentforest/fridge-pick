import GridContainer from '@/components/common/container/GridContainer';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import StorageItem from '@/components/trackedItem/storage/StorageItem';
import { horizontalInset } from '@/constants';
import { IngredientCategoryItem } from '@/types/category';
import { EnrichedStorageItem } from '@/types/storage';
import { View } from 'react-native';

type StorageBoxByCategoryProps = {
  category: IngredientCategoryItem;
  storageItemList: EnrichedStorageItem[];
  openItemPress: (item: EnrichedStorageItem) => void;
};

export default function StorageBoxByCategory({
  category,
  storageItemList,
  openItemPress,
}: StorageBoxByCategoryProps) {
  return (
    <View key={category.id} className={`flex-1 bg-card px-[16px] pb-4`}>
      <View className="h-12 flex-row items-center gap-x-1">
        {category.icon && <Icon name={category.icon} size={14} color="blue" />}

        <Text className="text-blue-7">{category.label}</Text>
      </View>

      <GridContainer columns={5} gap={4} horizontalInset={horizontalInset + 16}>
        {/* 식재료 리스트 */}
        {storageItemList.map((storageItem) => (
          <TouchableOpacity
            key={storageItem.id}
            onPress={() => openItemPress(storageItem)}
          >
            <StorageItem storageItem={storageItem} />
          </TouchableOpacity>
        ))}
      </GridContainer>
    </View>
  );
}
