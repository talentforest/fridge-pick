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
import { useOverlay } from '@/hooks';

interface FavoriteBtnProps {
  isFavorite?: boolean;
  storageItem?: EnrichedStorageItem;
  selectableItem?: SelectableItem;
  className?: string;
  size?: number;
  hasShadow?: boolean;
  onBtnPress?: () => void;
}

export default function FavoriteBtn({
  isFavorite,
  storageItem,
  selectableItem,
  className,
  size = 22,
  hasShadow,
  onBtnPress,
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
    if (onBtnPress) {
      return onBtnPress();
    }

    if (!favoriteItem) {
      if (storageItem) addFavoriteStorageItem(storageItem);

      if (selectableItem) addFavoriteSelectableItem(selectableItem);
    } else {
      deleteFavoriteItem(favoriteItem.id);
    }

    showToast({
      type: 'normal',
      text1: `${!favoriteItem ? '❤️ 나의 픽에 추가' : '🗑️ 나의 픽에서 삭제'}되었습니다!`,
      props: {
        bgColor: favoriteItem ? 'red' : 'blue',
      },
    });
  };

  const isFavoriteItem = isFavorite !== undefined ? isFavorite : favoriteItem;

  return isFavoriteItem ? (
    <Icon
      name="Heart"
      hasFill
      color="red"
      onPress={onPress}
      size={size}
      className={className}
      hasShadow={hasShadow}
    />
  ) : (
    <Icon
      name="Heart"
      hasFill={false}
      color="inactive"
      onPress={onPress}
      size={size}
      className={className}
      hasShadow={hasShadow}
    />
  );
}
