import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { CategoryItem, colorByStorage } from '@/constants';
import { View } from 'react-native';

interface CategoryLabelProps {
  category: CategoryItem;
  color: 'blue' | 'green' | 'yellow';
}

export default function CategoryLabel({ category, color }: CategoryLabelProps) {
  const { text } = colorByStorage[color];

  return (
    <View className="flex-row gap-x-1">
      {category.icon && <Icon name={category.icon} size={17} color={color} />}

      <Text className={text}>{category.label}</Text>
    </View>
  );
}
