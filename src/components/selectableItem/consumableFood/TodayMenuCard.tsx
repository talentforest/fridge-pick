import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import MenuDetailSheet from '@/components/selectableItem/consumableFood/MenuDetailSheet';
import FoodImage from '@/components/common/FoodImage';
import { TodayMenu } from '@/types/storage';
import { View } from 'react-native';
import { EnrichedConsumableFoodWithFilter, useOverlay } from '@/hooks';

interface TodayMenuCardProps {
  todayMenu: TodayMenu;
  type: 'mainMenu' | 'sideMenu';
  className?: string;
}

export default function TodayMenuCard({
  todayMenu,
  className = '',
  type,
}: TodayMenuCardProps) {
  const mainMenu = type === 'mainMenu';

  const { consumableFood } = todayMenu;

  const { openSheet } = useOverlay();

  const onPress = (food: EnrichedConsumableFoodWithFilter) => {
    openSheet({
      render: () => <MenuDetailSheet type={type} food={food} />,
    });
  };

  const commonClassName = `justify-center ${mainMenu ? 'h-[220px] items-start ' : 'h-[105px] !px-2 items-center !bg-border'} ${className}`;

  return (
    <TouchableOpacity onPress={() => onPress(consumableFood)}>
      <Card className={`${commonClassName} ${mainMenu ? '!pt-3' : '!pt-1'}`}>
        {mainMenu && (
          <IconWithText
            text="메인메뉴"
            icon="Sparkles"
            className="-mb-2.5 rounded-full border border-yellow-1 bg-blue-1 px-3.5 py-2.5"
            textClassName="text-[13px] text-blue-7"
            iconSize={13}
            iconColor="blue"
          />
        )}

        <View className="w-full items-center justify-between">
          <View className="items-center">
            <FoodImage consumableFood={consumableFood} imageSize={mainMenu ? 100 : 65} />
            <Text
              className={`-mt-0.5 line-clamp-2 text-center ${mainMenu ? 'text-base' : 'text-[13px] text-neutral-7'}`}
            >
              {consumableFood?.label}
            </Text>
          </View>

          {mainMenu && (
            <View className={`mt-3 items-center gap-y-2.5`}>
              <ProgressBar
                label="재료 보유율"
                percentage={consumableFood.requiredPossessionPercent}
                possessedCount={consumableFood.requiredPossessedList.length}
                requiredCount={consumableFood.requiredCount}
              />
            </View>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
}
