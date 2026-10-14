import {
  addShoppingListToStorageAtom,
  convertedStorageItemListAtom,
  deleteShoppingItemListAtom,
} from '@/atom/shoppingListAtom';
import { useOverlay, useHandleNavigate } from '@/hooks';
import { useAtomValue, useSetAtom } from 'jotai';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { storageObj } from '@/constants';
import { EnrichedStorageItem, StorageTypeId } from '@/types/storage';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import SquareBtn from '@/components/common/SquareBtn';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import GridContainer from '@/components/common/container/GridContainer';
import PurchasedItem from '@/components/trackedItem/shoppingList/PurchasedItem';
import SectionTitle from '@/components/common/header/SectionTitle';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';

export default function AddShoppingListScreen() {
  const converted = useAtomValue(convertedStorageItemListAtom);

  const [storageItemList, setStorageItemList] = useState(converted);

  const addToStorage = useSetAtom(addShoppingListToStorageAtom);

  const deleteItemList = useSetAtom(deleteShoppingItemListAtom);

  const { closeModal, alert } = useOverlay();

  const { goBack } = useHandleNavigate();

  const onAddToStoragePress = () => {
    addToStorage(storageItemList);

    deleteItemList(storageItemList.map(({ id }) => id));

    closeModal();

    goBack();

    alert({ message: '각각 보관함으로 추가되었습니다.' });
  };

  const groupedStorageItemList = useMemo(() => {
    const grouped = storageItemList.reduce<
      Partial<Record<StorageTypeId, EnrichedStorageItem[]>>
    >((groups, item) => {
      const type = item.storage.type;

      if (!groups[type]) {
        groups[type] = [];
      }

      groups[type]!.push(item);

      return groups;
    }, {});

    return Object.entries(grouped) as [StorageTypeId, EnrichedStorageItem[]][];
  }, [storageItemList]);

  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="보관함에 추가할 목록" />

      <ViewContentContainer className="!gap-y-0">
        <ScrollViewContainer contentContainerClassName="gap-y-8 !px-0 mt-4">
          {groupedStorageItemList.map(([storage, itemList]) => (
            <View key={storageObj[storage].id} className="gap-y-3">
              <SectionTitle
                type="sub"
                title={storageObj[storage].label}
                icon={storageObj[storage].icon}
                color={storageObj[storage].color}
              />

              <GridContainer columns={3}>
                {itemList
                  .filter((item) => item.storage.type === storageObj[storage].id)
                  .map((item, index) => (
                    <PurchasedItem
                      key={item.id}
                      storageItem={item}
                      index={index + 1}
                      setStorageItemList={setStorageItemList}
                    />
                  ))}
              </GridContainer>
            </View>
          ))}
        </ScrollViewContainer>

        <SquareBtn
          name="보관함에 추가하기"
          iconName="Plus"
          onPress={onAddToStoragePress}
        />
      </ViewContentContainer>
    </SafeAreaViewContainer>
  );
}
