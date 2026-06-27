import { storageObj } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { EnrichedStorageItem } from '@/types/storage';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
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

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer edges={['top', 'bottom']}>
        <ScreenHeader title={`${label}에 식재료 추가`} onLeftPress={undefined} />

        <ViewContentContainer>
          {currStorageItem === null ? (
            <SearchAddStorageItem
              currStorageType={currStorageType}
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
              setCurrStorageItem={setCurrStorageItem}
            />
          ) : (
            <SearchedStorageItemForm
              currStorageItem={currStorageItem}
              setSearchKeyword={setSearchKeyword}
              setCurrStorageItem={setCurrStorageItem}
              currStorageType={currStorageType}
            />
          )}
        </ViewContentContainer>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
}
