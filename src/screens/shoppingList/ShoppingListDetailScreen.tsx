import {
  addToStorageAtom,
  convertedStorageItemListAtom,
  deleteItemsAtom,
} from '@/atom/shoppingListAtom';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import ScreenHeader from '@/components/common/ScreenHeader';
import PurchasedItem from '@/components/shoppingList/PurchasedItem';
import { useOverlay } from '@/hooks/common/useOverlay';
import { RootStackParamList } from '@/types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import { FlatList } from 'react-native';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ShoppingListDetailScreen() {
  const converted = useAtomValue(convertedStorageItemListAtom);

  const [storageItemList, setStorageItemList] = useState(converted);

  const { closeModal } = useOverlay();

  const addToStorage = useSetAtom(addToStorageAtom);
  const deleteItems = useSetAtom(deleteItemsAtom);

  const navigation = useNavigation<NavProp>();

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="보관함에 추가할 식재료" />

      <ViewContentContainer className="pt-4">
        <FlatList
          data={storageItemList}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          className="mb-4 flex-1"
          contentContainerClassName="gap-4 pb-10"
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <PurchasedItem item={item} setItems={setStorageItemList} />
          )}
        />

        <PressableSquareBtn
          name={`${storageItemList.length}개의 식재료 보관함에 추가하기`}
          className="!py-6"
          onPress={async () => {
            addToStorage(storageItemList);

            deleteItems(storageItemList.map(({ id }) => id));

            alert('보관함에 성공적으로 추가되었습니다.');

            closeModal();

            navigation.goBack();
          }}
        />
      </ViewContentContainer>
    </SafeAreaViewContainer>
  );
}
