import { addStorageItemAtom } from '@/atom/storageItemAtom';
import { storageObj } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { EditableStorageItemData, StorageItem } from '@/types/storage';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Ingredient } from '@/types/ingredient';
import { useErrorHandler } from '@/hooks/common/useErrorHandler';
import { useOverlay } from '@/hooks/common/useOverlay';
import LabelContainer from '@/components/common/container/LabelContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/ScreenHeader';
import TextInput from '@/components/common/ui/TextInput';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import Card from '@/components/common/ui/Card';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import SearchAddStorageItem from '@/components/storage/SearchAddStorageItem';
import SquareBtn from '@/components/common/SquareBtn';
import Icon from '@/components/common/ui/Icon';
import IngredientImageLabel from '@/components/storage/IngredientImageLabel';
import FormMemo from '@/components/common/form/FormMemo';
import FormDateInput from '@/components/common/form/FormDateInput';
import Text from '@/components/common/ui/Text';
import { findIngredient } from '@/utils';

type DetailRouteProp = RouteProp<RootStackParamList, 'AddStorageItemScreen'>;

export default function AddStorageItemScreen() {
  const {
    params: { id: storageType },
  } = useRoute<DetailRouteProp>();

  const { label } = storageObj[storageType];

  const scrollRef = useRef<ScrollView>(null);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [currStorageItem, setCurrStorageItem] = useState<StorageItem | null>(null);

  const ingredient = findIngredient(currStorageItem?.ingredientId);

  const { alert } = useOverlay();

  const { error, setError, clearError } = useErrorHandler<StorageItem | Ingredient>();

  const addToStorage = useSetAtom(addStorageItemAtom);

  const initializeStorageItem = () => {
    setSearchKeyword('');
    setCurrStorageItem(null);
    clearError();
  };

  const onItemChange = (newData: Partial<EditableStorageItemData>) => {
    setCurrStorageItem((prev) => {
      if (prev === null) return null;
      return { ...prev, ...newData };
    });
  };

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
                <LabelContainer label={ingredient ? '식재료 정보' : '식재료 이름'}>
                  <View>
                    {ingredient ? (
                      <Card className="flex-row items-center gap-x-1.5 !py-0">
                        <IngredientImageLabel
                          ingredient={ingredient}
                          customLabel={currStorageItem.customLabel}
                        />
                      </Card>
                    ) : (
                      <TextInput
                        value={currStorageItem.customLabel}
                        onChangeText={(text) => onItemChange({ customLabel: text })}
                        placeholder="식재료 이름을 작성해주세요."
                        maxLength={30}
                      />
                    )}
                    <Icon
                      name="RotateCcw"
                      size={20}
                      className={`absolute right-0 p-5 ${ingredient ? '' : 'bottom-0 top-0'}`}
                      color="text"
                      onPress={initializeStorageItem}
                    />
                  </View>
                </LabelContainer>

                <FormDateInput
                  hasLabel
                  currDate={currStorageItem.expiresAt}
                  onItemChange={onItemChange}
                />

                <FormMemo
                  hasLabel
                  currMemo={currStorageItem.memo || ''}
                  onItemChange={onItemChange}
                  onFocus={() => scrollRef.current?.scrollToEnd()}
                />
              </ScrollView>

              {error && <Text className="text-red-5">{error?.message}</Text>}

              <SquareBtn
                iconName="Plus"
                className="py-5"
                textClassName="text-base"
                name={`${label}에 추가하기`}
                onPress={() => {
                  const result = addToStorage({
                    ...currStorageItem,
                    storage: { type: storageType },
                  });

                  if (result.type === 'duplicate') {
                    return setError(result);
                  }

                  if (result.type === 'success') {
                    initializeStorageItem();
                    alert({ message: `${label}에 성공적으로 추가되었습니다!` });
                  }
                }}
              />
            </>
          )}
        </ViewContentContainer>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
}
