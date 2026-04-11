import { addItemAtom } from '@/atom/storageItemAtom';
import { storageObj } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { EditableStorageItemData, EnrichStorageItem } from '@/types/storage';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import LabelContainer from '@/components/common/container/LabelContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/ScreenHeader';
import TextInput from '@/components/common/ui/TextInput';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import Card from '@/components/common/ui/Card';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import SearchAddStorageItem from '@/components/storage/SearchAddStorageItem';
import FormIngredient from '@/components/common/form/FormIngredient';
import SquareBtn from '@/components/common/SquareBtn';
import Icon from '@/components/common/ui/Icon';
import IngredientImageLabel from '@/components/storage/IngredientImageLabel';
import { useOverlay } from '@/hooks/common/useOverlay';

type DetailRouteProp = RouteProp<RootStackParamList, 'AddStorageItemScreen'>;

export default function AddStorageItemScreen() {
  const {
    params: { id: storageType },
  } = useRoute<DetailRouteProp>();

  const { label } = storageObj[storageType];

  const scrollRef = useRef<ScrollView>(null);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [currStorageItem, setCurrStorageItem] = useState<EnrichStorageItem | null>(null);

  const addToStorage = useSetAtom(addItemAtom);

  const initializeStorageItem = () => {
    setSearchKeyword('');
    setCurrStorageItem(null);
  };

  const onItemChange = (newData: EditableStorageItemData) => {
    setCurrStorageItem((prev) => {
      if (prev === null) return null;
      return { ...prev, ...newData };
    });
  };

  const { alert } = useOverlay();

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer edges={['top', 'bottom']}>
        <ScreenHeader title={`${label}에 식재료 추가`} onLeftPress={undefined} />

        <ViewContentContainer>
          {currStorageItem === null ? (
            <SearchAddStorageItem
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
              setCurrStorageItem={setCurrStorageItem}
            />
          ) : (
            <>
              <ScrollView
                ref={scrollRef}
                contentContainerClassName="gap-y-8 pt-5"
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                {/* 선택한 식재료 정보 */}
                <LabelContainer
                  label={currStorageItem.ingredient ? '식재료 정보' : '식재료 이름'}
                >
                  <View>
                    {currStorageItem.ingredient ? (
                      <Card className="flex-row items-center gap-x-1.5 !py-0">
                        <IngredientImageLabel
                          ingredient={currStorageItem.ingredient}
                          customLabel={currStorageItem.customLabel}
                        />
                      </Card>
                    ) : (
                      <TextInput
                        placeholder="식재료 이름을 작성해주세요."
                        maxLength={30}
                      />
                    )}
                    <Icon
                      name="RotateCcw"
                      size={20}
                      className={`absolute right-0 mb-auto ml-auto p-4 ${currStorageItem.ingredient ? '' : 'bottom-0 top-0'}`}
                      color="text"
                      onPress={initializeStorageItem}
                    />
                  </View>
                </LabelContainer>

                <FormIngredient
                  currStorageItem={currStorageItem}
                  onItemChange={onItemChange}
                  onMemoFocus={() => scrollRef.current?.scrollToEnd()}
                />
              </ScrollView>

              <SquareBtn
                iconName="Plus"
                className="mt-5 py-5"
                textClassName="text-base"
                name={`${storageObj[currStorageItem.storage.type].label}에 추가하기`}
                onPress={() => {
                  addToStorage(currStorageItem);
                  setSearchKeyword('');
                  setCurrStorageItem(null);
                  alert({
                    message: `${storageObj[currStorageItem.storage.type].label}에 성공적으로 추가되었습니다!`,
                  });
                }}
              />
            </>
          )}
        </ViewContentContainer>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
}
