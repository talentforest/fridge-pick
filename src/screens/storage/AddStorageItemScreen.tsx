import { addStorageItemAtom } from '@/atom/storageItemAtom';
import { storageObj } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { EditableStorageItemData, EnrichStorageItem, StorageItem } from '@/types/storage';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Ingredient } from '@/types/ingredient';
import { useErrorHandler, useOverlay } from '@/hooks';
import LabelContainer from '@/components/common/container/LabelContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import TextInput from '@/components/common/ui/TextInput';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import SquareBtn from '@/components/common/SquareBtn';
import Icon from '@/components/common/ui/Icon';
import FormMemo from '@/components/common/form/FormMemo';
import FormDateInput from '@/components/common/form/FormDateInput';
import Text from '@/components/common/ui/Text';
import SearchAddStorageItem from '@/components/trackedItem/storage/SearchAddStorageItem';
import Card from '@/components/common/ui/Card';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';

type DetailRouteProp = RouteProp<RootStackParamList, 'AddStorageItemScreen'>;

export default function AddStorageItemScreen() {
  const scrollRef = useRef<ScrollView>(null);

  const {
    params: { id: storageType },
  } = useRoute<DetailRouteProp>();

  const { label } = storageObj[storageType];

  const [searchKeyword, setSearchKeyword] = useState('');

  const [currStorageItem, setCurrStorageItem] = useState<EnrichStorageItem | null>(null);

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
      if (!prev) return null;

      // eslint-disable-next-line unused-imports/no-unused-vars
      const { customLabel, ...rest } = newData;
      if (prev.type !== 'custom') {
        return { ...prev, ...rest };
      }

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
                <LabelContainer
                  label={`식재료 ${currStorageItem.type === 'custom' ? '이름' : '정보'}`}
                >
                  <View>
                    {currStorageItem.type === 'custom' ? (
                      <TextInput
                        value={currStorageItem.customLabel}
                        onChangeText={(text) => onItemChange({ customLabel: text })}
                        placeholder="식재료 이름을 작성해주세요."
                        className="border pr-12"
                      />
                    ) : (
                      <Card className="flex-row items-center gap-x-1.5 !py-1">
                        <TrackedItemImageLabel
                          item={currStorageItem}
                          isHorizontal
                          imageSize={70}
                          hasCategory
                          textClassName="text-base"
                        />
                      </Card>
                    )}

                    <Icon
                      name="RotateCcw"
                      size={20}
                      className={`absolute right-2 top-2 rounded-2xl bg-neutral-3 p-3`}
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
