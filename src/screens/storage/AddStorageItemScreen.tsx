import { addItemAtom } from '@/atom/storageItemAtom';
import { categoryObj, DEFAULT_EXPIRATION_DAYS, storageObj } from '@/constants';
import { initialStorageItem } from '@/constants/initialItem';
import { RootStackParamList } from '@/types/RootStackParamList';
import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { searchIngredient } from '@/utils';
import { convertIngredientToStorageItem } from '@/utils/convertToStorageItem';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import GridContainer from '@/components/common/container/GridContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import FormMemo from '@/components/common/form/FormMemo';
import FormStorage from '@/components/common/form/FormStorage';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import SearchedIngredientCard from '@/components/common/ingredient/SearchedIngredientCard';
import PressableIcon from '@/components/common/PressableIcon';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import ScreenHeader from '@/components/common/ScreenHeader';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';

type DetailRouteProp = RouteProp<RootStackParamList, 'AddStorageItem'>;

export default function AddStorageItemScreen() {
  const route = useRoute<DetailRouteProp>();
  const { id: storageType } = route.params;

  const currStorage = storageObj[storageType];
  const { label } = currStorage;

  const [searchKeyword, setSearchKeyword] = useState('');
  const [currStorageItem, setCurrStorageItem] = useState<EnrichStorageItem | null>(null);

  const recommendedKeywordList = searchIngredient(searchKeyword || '', 9);

  const addToStorage = useSetAtom(addItemAtom);

  const onItemChange = (
    newData: Partial<Pick<StorageItem, 'expiresAt' | 'storage' | 'memo'>>,
  ) => {
    setCurrStorageItem((prev) => {
      if (prev === null) return null;
      return { ...prev, ...newData };
    });
  };

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScreenHeader title={`${label}에 식재료 추가`} onLeftPress={undefined} />

      <ScrollViewContainer contentContainerClassName="gap-y-3 pt-5">
        {currStorageItem === null ? (
          <>
            <View className="gap-y-2">
              <Text className="pl-2">식재료검색</Text>
              <TextInput
                maxLength={50}
                value={searchKeyword}
                onChangeText={setSearchKeyword}
                placeholder="식재료를 검색해주세요."
                icon="Search"
                className="border border-border bg-white"
              />
            </View>

            {/* 추천 식재료 */}
            {recommendedKeywordList.length ? (
              <GridContainer columns={3} gap={4}>
                {recommendedKeywordList.map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() =>
                      setCurrStorageItem(convertIngredientToStorageItem(item))
                    }
                  >
                    <SearchedIngredientCard ingredient={item} />
                  </Pressable>
                ))}
              </GridContainer>
            ) : (
              <></>
            )}

            <PressableIcon
              icon="PlusCircle"
              text="식재료 직접 추가하기"
              className="mr-auto p-1"
              onPress={() => setCurrStorageItem(initialStorageItem)}
            />
          </>
        ) : (
          <View className="gap-y-10">
            {/* 선택한 식재료 정보 */}
            {currStorageItem.ingredient ? (
              <LabelContainer label="선택한 식재료 정보">
                <View className="flex-row items-center gap-x-1 rounded-2xl border border-border bg-white p-4">
                  <IngredientImage ingredient={currStorageItem.ingredient} size={65} />

                  <View className="gap-y-2">
                    <Text className="text-lg">{currStorageItem.ingredient.label}</Text>
                    <Text className="text-md text-gray-700">
                      {categoryObj[currStorageItem.ingredient.category].label}
                    </Text>
                  </View>

                  <PressableIcon
                    icon="RotateCcw"
                    text="선택 초기화"
                    textClassName="text-indigo-600 text-md"
                    iconSize={16}
                    className="ml-auto rounded-xl bg-yellow-200 p-3"
                    iconColor="indigo"
                    onPress={() => {
                      setSearchKeyword('');
                      setCurrStorageItem(null);
                    }}
                  />
                </View>
              </LabelContainer>
            ) : (
              <LabelContainer label="식재료 이름">
                <TextInput
                  placeholder="식재료 이름을 작성해주세요."
                  className="border border-border bg-white "
                  maxLength={30}
                >
                  <PressableIcon
                    icon="RotateCcw"
                    text="선택 초기화"
                    textClassName="text-indigo-600 text-md"
                    iconSize={16}
                    className="z-10 mr-2 rounded-xl bg-yellow-200 p-3"
                    iconColor="indigo"
                    onPress={() => {
                      setSearchKeyword('');
                      setCurrStorageItem(null);
                    }}
                  />
                </TextInput>
              </LabelContainer>
            )}

            {/* 추천 소비기한 */}
            <FormDateInput
              currDate={currStorageItem.expiresAt}
              onItemChange={onItemChange}
              defaultExpirationDays={
                currStorageItem.ingredient?.expirationDays || DEFAULT_EXPIRATION_DAYS
              }
            />

            <FormStorage
              label="추천 보관위치"
              currStorageType={currStorageItem.storage.type}
              onItemChange={onItemChange}
            />

            <FormMemo currMemo={currStorageItem.memo || ''} onItemChange={onItemChange} />

            <PressableSquareBtn
              iconName="Plus"
              name={`${storageObj[currStorageItem.storage.type].label}에 추가하기`}
              onPress={() => {
                addToStorage(currStorageItem);
                setSearchKeyword('');
                setCurrStorageItem(null);
                alert(
                  `${storageObj[currStorageItem.storage.type].label}에 성공적으로 추가되었습니다!`,
                );
              }}
            />
          </View>
        )}
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
