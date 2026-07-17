import FoodImage from '@/components/common/FoodImage';
import ProgressBar from '@/components/common/ProgressBar';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import MenuFilter from '@/components/selectableItem/consumableFood/MenuFilter';
import { EnrichedConsumableFoodWithFilter } from '@/hooks';
import { View } from 'react-native';

type MenuItemCardProps = {
  menu: EnrichedConsumableFoodWithFilter;
};

export default function MenuItemCard({ menu }: MenuItemCardProps) {
  return (
    <Card key={menu.id} className="flex-row items-center gap-x-2 !px-3 !py-3">
      <View className="rounded-2xl bg-neutral-1 p-1">
        <FoodImage consumableFood={menu} imageSize={85} />
      </View>

      <View className="flex-1 gap-y-1 pt-1">
        <Text className="mb-1 font-extrabold">{menu.label}</Text>

        <View className="mb-1 flex-row flex-wrap items-start justify-start gap-1.5 gap-y-2">
          <MenuFilter food={menu} type="difficulty" />
          <MenuFilter food={menu} type="category" />
        </View>

        <ProgressBar
          label="재료 보유율"
          percentage={menu.requiredPossessionPercent}
          possessedCount={menu.requiredPossessedList.length}
          requiredCount={menu.requiredCount}
        />
      </View>

      <Icon
        name="Plus"
        size={20}
        className="absolute right-0 top-0 p-3.5"
        strokeWidth={2.5}
      />
    </Card>
  );
}
