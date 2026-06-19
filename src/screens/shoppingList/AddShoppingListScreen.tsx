import {
  addShoppingListToStorageAtom,
  convertedStorageItemListAtom,
  deleteShoppingItemListAtom,
} from '@/atom/shoppingListAtom';
import { useOverlay } from '@/hooks';
import { StackNavProp } from '@/types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import { FlatList } from 'react-native';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import SquareBtn from '@/components/common/SquareBtn';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import PurchasedItem from '@/components/trackedItem/shoppingList/PurchasedItem';

export default function AddShoppingListScreen() {
  const converted = useAtomValue(convertedStorageItemListAtom);

  const [storageItemList, setStorageItemList] = useState(converted);

  const { closeModal, alert } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const addToStorage = useSetAtom(addShoppingListToStorageAtom);
  const deleteItemList = useSetAtom(deleteShoppingItemListAtom);

  const onAddToStoragePress = () => {
    addToStorage(storageItemList);

    deleteItemList(storageItemList.map(({ id }) => id));

    closeModal();

    navigation.goBack();

    alert({ message: '각 보관함에 성공적으로 추가되었습니다.' });
  };

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="보관함에 추가할 식재료" />

      <ViewContentContainer>
        <FlatList
          data={storageItemList}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerClassName="gap-y-2 pb-10 pt-4"
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => (
            <PurchasedItem
              storageItem={item}
              index={index + 1}
              setStorageItemList={setStorageItemList}
            />
          )}
        />

        <SquareBtn
          name={`${storageItemList.length}개의 식재료 보관함에 추가하기`}
          onPress={onAddToStoragePress}
        />
      </ViewContentContainer>
    </SafeAreaViewContainer>
  );
}
