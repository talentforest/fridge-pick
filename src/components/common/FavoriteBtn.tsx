import {
  addFavoriteSelectableItemAtom,
  addFavoriteStorageItemAtom,
  deleteFavoriteItemAtom,
  findFavoriteItemAtom,
} from '@/atom/favoritesAtom';
import Icon from '@/components/common/ui/Icon';
import { SelectableItem } from '@/types/selectableItem';
import { EnrichStorageItem } from '@/types/storage';
import { createSelectableItemKey, createTrackedItemKey } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';

interface FavoriteBtnProps {
  storageItem?: EnrichStorageItem;
  selectableItem?: SelectableItem;
  className?: string;
  size?: number;
}

export default function FavoriteBtn({
  storageItem,
  selectableItem,
  className,
  size = 25,
}: FavoriteBtnProps) {
  const addFavoriteStorageItem = useSetAtom(addFavoriteStorageItemAtom);
  const addFavoriteSelectableItem = useSetAtom(addFavoriteSelectableItemAtom);
  const deleteFavoriteItem = useSetAtom(deleteFavoriteItemAtom);

  const storageKey = createTrackedItemKey(storageItem);
  const selectableKey = createSelectableItemKey(selectableItem);
  const key = storageItem ? storageKey : selectableKey;

  const favoriteItem = useAtomValue(findFavoriteItemAtom(key));

  const onPress = () => {
    if (!favoriteItem) {
      if (storageItem) {
        return addFavoriteStorageItem(storageItem);
      }
      if (selectableItem) addFavoriteSelectableItem(selectableItem);
    } else {
      deleteFavoriteItem(favoriteItem.id);
    }
  };

  return (
    <Icon
      name="Heart"
      size={size}
      hasFill={!!favoriteItem}
      color={!!favoriteItem ? 'red' : 'inactive'}
      className={`${className}`}
      onPress={onPress}
    />
  );
}
