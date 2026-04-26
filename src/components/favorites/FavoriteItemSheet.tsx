import { addShoppingItemAtom, findShoppingItem } from '@/atom/shoppingListAtom';
import { findStorageItemWithKeyAtom } from '@/atom/storageItemAtom';
import { storageObj } from '@/constants';
import { useErrorHandler } from '@/hooks/common/useErrorHandler';
import { useOverlay } from '@/hooks/common/useOverlay';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import { ShoppingItem } from '@/types/shoppingList';
import { StorageTypeId } from '@/types/storage';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import { View } from 'react-native';
import LabelContainer from '@/components/common/container/LabelContainer';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import SelectableItemImageLabel from '@/components/selectableItem/SelectableItemImageLabel';

interface FavoriteItemSheetProps {
  item: SelectableItem;
  onNavigatePress: (storageType: StorageTypeId) => void;
}

export default function FavoriteItemSheet({
  item,
  onNavigatePress,
}: FavoriteItemSheetProps) {
  const { setError } = useErrorHandler<ShoppingItem>();

  const { closeSheet, alert } = useOverlay();

  const key = createSelectableItemKey(item);

  const storageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const isShoppingItem = useAtomValue(findShoppingItem(key));

  const addShoppingItem = useSetAtom(addShoppingItemAtom);

  const onSubmitPress = () => {
    const result = addShoppingItem(item.label);

    if (result.type === 'duplicate') {
      return setError(result);
    }

    if (result.type === 'success') {
      closeSheet();
      alert({
        title: '장보기목록 추가 알림',
        message: `${item.label}를 장보기 목록에 추가했습니다`,
      });
    }
  };

  return (
    <View className="mb-8 mt-3">
      <Text className="text-xl">식재료 정보</Text>

      <View className="my-2 flex-row items-center justify-between px-2">
        <SelectableItemImageLabel item={item} imageSize={80} />
        <FavoriteBtn selectableItem={item} />
      </View>

      <LabelContainer label="보관함별 소비기한 정보">
        <View className="flex-row gap-x-2">
          {Object.values(storageObj).map((storage) => (
            <Card
              key={storage.id}
              className={`h-[80px] flex-1 items-center justify-between gap-y-4 ${storage.id === item.defaultStorage ? '' : '!bg-neutral-3'}`}
            >
              <View className="flex-row items-center">
                <Icon name={storage.icon} size={15} color={storage.color} />
                <Text className="text-[15px]">{storage.label}</Text>
              </View>

              {item.expirationDays[storage.id] ? (
                <View className="flex-row items-center gap-x-1">
                  <Text className="text-base text-neutral-5">약</Text>
                  <Text className="font-extrabold text-base">
                    {item.expirationDays[storage.id]}일
                  </Text>
                </View>
              ) : (
                <Text className="text-base text-neutral-5">정보없음</Text>
              )}
            </Card>
          ))}
        </View>
      </LabelContainer>

      {storageItem ? (
        <SquareBtn
          name={`${storageObj[storageItem.storage.type].label}에서 식재료 상태 확인하기`}
          iconName={storageObj[storageItem.storage.type].icon}
          color={storageObj[storageItem.storage.type].color}
          iconSize={18}
          className="mt-5"
          onPress={() => onNavigatePress(storageItem.storage.type)}
        />
      ) : (
        <SquareBtn
          name={isShoppingItem ? '장보기목록에 있어요' : '장보기목록에 바로 추가하기'}
          iconName="ShoppingBasket"
          iconSize={18}
          disabled={!!isShoppingItem}
          className="mt-5"
          color={isShoppingItem ? 'inActive' : 'indigo'}
          onPress={onSubmitPress}
        />
      )}
    </View>
  );
}
