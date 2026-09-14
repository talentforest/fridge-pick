import { storageObj } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { EditableStorageItem, EnrichedStorageItem, StorageItem } from '@/types/storage';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useErrorHandler } from '@/hooks';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import SearchAddStorageItem from '@/components/trackedItem/storage/SearchAddStorageItem';
import SearchedStorageItemForm from '@/components/trackedItem/storage/SearchedStorageItemForm';

type DetailRouteProp = RouteProp<RootStackParamList, 'AddStorageItemScreen'>;

export default function AddStorageItemScreen() {
  const {
    params: { id: currStorageType },
  } = useRoute<DetailRouteProp>();

  const { label } = storageObj[currStorageType];

  const [searchKeyword, setSearchKeyword] = useState('');

  const [currStorageItem, setCurrStorageItem] = useState<EnrichedStorageItem | null>(
    null,
  );

  const { clearError } = useErrorHandler<StorageItem>();

  const initializeStorageItem = () => {
    setSearchKeyword('');
    setCurrStorageItem(null);
    clearError();
  };

  const onItemChange = (newData: EditableStorageItem) => {
    setCurrStorageItem((prev): EnrichedStorageItem | null => {
      if (!prev) return null;
      return { ...prev, ...newData };
    });
  };

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer edges={['top', 'bottom']}>
        <ScreenHeader title={`${label}에 추가`} onLeftPress={undefined} />

        <ViewContentContainer>
          {currStorageItem === null ? (
            <SearchAddStorageItem
              searchKeyword={searchKeyword}
              currStorageType={currStorageType}
              setSearchKeyword={setSearchKeyword}
              setCurrStorageItem={setCurrStorageItem}
              maxLength={12}
            />
          ) : (
            <SearchedStorageItemForm
              initialize={initializeStorageItem}
              onItemChange={onItemChange}
              currStorageItem={currStorageItem}
              currStorageType={currStorageType}
            />
          )}
        </ViewContentContainer>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
}
