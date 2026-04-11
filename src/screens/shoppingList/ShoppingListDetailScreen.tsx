import {
  addToStorageAtom,
  convertedStorageItemListAtom,
  deleteItemsAtom,
} from '@/atom/shoppingListAtom';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import SquareBtn from '@/components/common/SquareBtn';
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

  const { alert } = useOverlay();

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="보관함에 추가할 식재료" />

      <ViewContentContainer className="pt-4">
        <FlatList
          data={storageItemList}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerClassName="gap-2 pb-10"
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => (
            <PurchasedItem item={item} index={index + 1} setItems={setStorageItemList} />
          )}
        />

        <SquareBtn
          name={`${storageItemList.length}개의 식재료 보관함에 추가하기`}
          onPress={async () => {
            addToStorage(storageItemList);

            deleteItems(storageItemList.map(({ id }) => id));

            closeModal();

            navigation.goBack();

            alert({
              message: '각 보관함에 성공적으로 추가되었습니다.',
            });
          }}
        />
      </ViewContentContainer>
    </SafeAreaViewContainer>
  );
}
