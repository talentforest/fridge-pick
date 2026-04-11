import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { CategoryItem } from '@/constants';
import { View } from 'react-native';

interface CategoryLabelProps {
  category: CategoryItem;
}

export default function CategoryLabel({ category }: CategoryLabelProps) {
  return (
    <View className="flex-row items-center gap-x-1">
      {category.icon && <Icon name={category.icon} size={15} />}

      <Text>{category.label}</Text>
    </View>
  );
}
