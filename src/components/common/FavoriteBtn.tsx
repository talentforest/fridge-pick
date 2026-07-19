import {
  addFavoriteSelectableItemAtom,
  addFavoriteStorageItemAtom,
  deleteFavoriteItemAtom,
  findFavoriteItemAtom,
} from '@/atom/favoritesAtom';
import { SelectableItem } from '@/types/selectableItem';
import { EnrichedStorageItem } from '@/types/storage';
import { createSelectableItemKey, createTrackedItemKey } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { useOverlay } from '@/hooks';

interface FavoriteBtnProps {
  storageItem?: EnrichedStorageItem;
  selectableItem?: SelectableItem;
  className?: string;
  size?: number;
  isBtn?: boolean;
}

export default function FavoriteBtn({
  storageItem,
  selectableItem,
  className,
  size = 22,
  isBtn = false,
}: FavoriteBtnProps) {
  const addFavoriteStorageItem = useSetAtom(addFavoriteStorageItemAtom);
  const addFavoriteSelectableItem = useSetAtom(addFavoriteSelectableItemAtom);
  const deleteFavoriteItem = useSetAtom(deleteFavoriteItemAtom);

  const storageKey = createTrackedItemKey(storageItem);
  const selectableKey = createSelectableItemKey(selectableItem);
  const key = storageItem ? storageKey : selectableKey;

  const favoriteItem = useAtomValue(findFavoriteItemAtom(key));

  const { showToast } = useOverlay();

  const onPress = () => {
    if (!favoriteItem) {
      if (storageItem) addFavoriteStorageItem(storageItem);

      if (selectableItem) addFavoriteSelectableItem(selectableItem);
    } else {
      deleteFavoriteItem(favoriteItem.id);
    }

    showToast({
      type: 'normal',
      text1: `${!favoriteItem ? '❤️ 나의 픽에 추가' : '🗑️ 나의 픽에서 삭제'}되었습니다!`,
      visibilityTime: 2000,
      position: 'bottom',
      props: {
        bgColor: favoriteItem ? 'bg-red-9' : 'bg-blue-7',
      },
    });
  };

  return isBtn ? (
    <TouchableOpacity
      onPress={onPress}
      className="mt-4 w-full flex-row items-center justify-center gap-x-1 rounded-lg bg-red-1 px-3 py-2"
    >
      <Icon
        name="Heart"
        size={size}
        hasFill={!!favoriteItem}
        color={!!favoriteItem ? 'red' : 'inactive'}
        className={`${className}`}
        onPress={onPress}
        hasShadow
      />
      <Text className="font-extrabold text-sm">나의 픽</Text>
    </TouchableOpacity>
  ) : (
    <Icon
      name="Heart"
      size={size}
      hasFill={!!favoriteItem}
      color={!!favoriteItem ? 'red' : 'inactive'}
      className={`${className}`}
      onPress={onPress}
      hasShadow
    />
  );
}
