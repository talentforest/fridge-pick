import GridContainer from '@/components/common/container/GridContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import IconWithText from '@/components/common/IconWithText';
import SearchedIngredientCard from '@/components/common/ingredient/SearchedIngredientCard';
import TextInput from '@/components/common/ui/TextInput';
import { initialStorageItem } from '@/constants/initialItem';
import { EnrichStorageItem } from '@/types/storage';
import { convertIngredientToStorageItem, searchIngredient } from '@/utils';
import { Pressable, View } from 'react-native';

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
  const recommendedKeywordList = searchIngredient(searchKeyword || '', 12);

  return (
    <View>
      <View className="mt-5 gap-y-2">
        <LabelContainer label="식재료 검색">
          <TextInput
            maxLength={50}
            value={searchKeyword}
            onChangeText={setSearchKeyword}
            placeholder="식재료를 검색해주세요."
            icon="Search"
          />
        </LabelContainer>
      </View>

      {/* 추천 식재료 */}
      {recommendedKeywordList.length ? (
        <GridContainer columns={3} gap={8} className="mt-2">
          {recommendedKeywordList.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => setCurrStorageItem(convertIngredientToStorageItem(item))}
            >
              <SearchedIngredientCard ingredient={item} />
            </Pressable>
          ))}
        </GridContainer>
      ) : (
        <></>
      )}

      <IconWithText
        icon="PlusCircle"
        iconSize={16}
        text="식재료 직접 추가하기"
        className="mt-1 p-3"
        onPress={() => setCurrStorageItem(initialStorageItem)}
      />
    </View>
  );
}
