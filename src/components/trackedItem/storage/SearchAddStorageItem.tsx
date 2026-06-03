import GridContainer from '@/components/common/container/GridContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import IconWithText from '@/components/common/IconWithText';
import TextInput from '@/components/common/ui/TextInput';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import { initialCustomStorageItem } from '@/constants';
import { EnrichStorageItem } from '@/types/storage';
import {
  convertIngredientToStorageItem,
  convertMealToStorageItem,
  searchIngredientAndMeal,
} from '@/utils';
import { View } from 'react-native';

interface SearchAddStorageItemProps {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  setCurrStorageItem: React.Dispatch<React.SetStateAction<EnrichStorageItem | null>>;
}

export default function SearchAddStorageItem({
  searchKeyword,
  setSearchKeyword,
  setCurrStorageItem,
}: SearchAddStorageItemProps) {
  const recommendedKeywordList = searchIngredientAndMeal(searchKeyword || '', 12);

  return (
    <View>
      <View className="mt-5 gap-y-2">
        <LabelContainer label="식재료 검색">
          <TextInput
            value={searchKeyword}
            onChangeText={setSearchKeyword}
            placeholder="식재료를 검색해주세요."
            icon="Search"
          />
        </LabelContainer>
      </View>

      {/* 추천 식재료 */}
      {recommendedKeywordList.length ? (
        <GridContainer columns={4} gap={8} className="mt-2">
          {recommendedKeywordList.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                if (item.type === 'custom') return;

                const storageItem =
                  item.type === 'ingredient'
                    ? convertIngredientToStorageItem(item)
                    : convertMealToStorageItem(item);

                setCurrStorageItem(storageItem);
              }}
            >
              <SelectableItemCard
                item={item}
                isCompact
                className={`h-[90px] ${item.label === searchKeyword ? '!bg-blue-1' : ''}`}
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

            if (!selectableItem || selectableItem.type === 'custom') {
              const item = {
                ...initialCustomStorageItem,
                customLabel: searchKeyword,
              };
              return setCurrStorageItem(item);
            }

            if (selectableItem.type === 'ingredient') {
              const item = convertIngredientToStorageItem(selectableItem);
              return setCurrStorageItem(item);
            }

            const item = convertMealToStorageItem(selectableItem);
            setCurrStorageItem(item);
          }}
        />
      )}
    </View>
  );
}
