import Indicator from '@/components/common/Indicator';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { filterObj } from '@/constants';
import { Dish } from '@/types/dish';
import { View } from 'react-native';

interface DishCompactCardProps {
  dish: Dish;
  className?: string;
}

export default function DishCompactCard({
  dish,
  className = '',
}: DishCompactCardProps) {
  return (
    <Card key={dish.name} className={`w-fit gap-y-4 !px-3 !py-5 ${className}`}>
      <Text className="text-lg">{dish.name}</Text>

      {dish.filterList.length > 0 && (
        <View className="flex-row flex-wrap gap-2">
          {dish.filterList.slice(0, 1).map((filter) => (
            <Text key={filter} className={`text-md text-red-400`}>
              {filterObj['dish'][filter].label}
            </Text>
          ))}
        </View>
      )}

      <View className="gap-y-2">
        <Indicator type="total" value={dish.ingredientList.length} />
        <Indicator type="time" value={dish.time} />
      </View>

      <PressableSquareBtn name="오늘의 메뉴" iconName="CheckCircle" />
    </Card>
  );
}
