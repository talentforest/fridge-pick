import { initialCustomStorageItem } from '@/constants';
import { SelectableItem } from '@/types/selectableItem';
import { EnrichedStorageItem, StorageTypeId } from '@/types/storage';
import {
  convertIngredientToStorageItem,
  convertMealToStorageItem,
  convertPreparedFoodToStorageItem,
  searchIngredientAndMeal,
} from '@/utils';
import { View } from 'react-native';
import GridContainer from '@/components/common/container/GridContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import IconWithText from '@/components/common/IconWithText';
import TextInput from '@/components/common/ui/TextInput';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';

interface SearchAddStorageItemProps {
  currStorageType: StorageTypeId;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  setCurrStorageItem: React.Dispatch<React.SetStateAction<EnrichedStorageItem | null>>;
}

export default function SearchAddStorageItem({
  currStorageType,
  searchKeyword,
  setSearchKeyword,
  setCurrStorageItem,
}: SearchAddStorageItemProps) {
  const recommendedKeywordList = searchIngredientAndMeal(searchKeyword || '', 12);

  const onSelectStorageItemPress = (item: SelectableItem) => {
    if (item.kind === 'ingredient') {
      const storageItem = convertIngredientToStorageItem(item, currStorageType);
      setCurrStorageItem(storageItem);
    }
    if (item.kind === 'preparedFood') {
      const storageItem = convertPreparedFoodToStorageItem(item, currStorageType);
      setCurrStorageItem(storageItem);
    }
    if (item.kind === 'meal') {
      const storageItem = convertMealToStorageItem(item, currStorageType);
      setCurrStorageItem(storageItem);
    }
  };

  return (
    <View className="pt-5">
      <LabelContainer label="식재료 검색">
        <TextInput
          value={searchKeyword}
          onChangeText={setSearchKeyword}
          placeholder="식재료를 검색해주세요."
          icon="Search"
        />
      </LabelContainer>

      {/* 추천 식재료 */}
      {recommendedKeywordList.length ? (
        <GridContainer columns={4} className="mt-2">
          {recommendedKeywordList.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onSelectStorageItemPress(item)}
            >
              <SelectableItemCard
                item={item}
                className={`${item.label === searchKeyword ? '!bg-blue-1' : ''}`}
                textClassName="!text-[13px]"
              />
            </TouchableOpacity>
          ))}
        </GridContainer>
      ) : (
        <></>
      )}

      {searchKeyword !== '' && (
        <IconWithText
          icon="PlusCircle"
          iconSize={17}
          text={`"${searchKeyword}" 식재료 직접 추가하기`}
          iconColor="blue"
          className="mt-1 px-3 py-5"
          textClassName="text-blue-7 !text-[15px]"
          onPress={() => {
            const selectableItem = searchIngredientAndMeal(searchKeyword || '', 1)[0];

            if (selectableItem) return;

            const storageItem = {
              ...initialCustomStorageItem,
              storage: { type: currStorageType },
              customLabel: searchKeyword,
            };

            return setCurrStorageItem(storageItem);
          }}
        />
      )}
    </View>
  );
}
