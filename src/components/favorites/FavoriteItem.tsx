import ModalHeader from '@/components/common/header/ModalHeader';
import { SelectableItem } from '@/types/selectableItem';
import { View } from 'react-native';

interface FavoriteItemProps {
  item: SelectableItem;
}

export default function FavoriteItem({ item }: FavoriteItemProps) {
  return (
    <View>
      <ModalHeader title="식재료 정보" />
    </View>
  );
}
