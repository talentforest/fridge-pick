import ModalHeader from '@/components/common/header/ModalHeader';
import Icon from '@/components/common/ui/Icon';
import FoodSourceCard from '@/components/selectableItem/consumableFood/FoodSourceCard';
import { foodSourceObj } from '@/constants';
import { useOverlay } from '@/hooks';
import { FoodSource } from '@/types/selectableItem';
import { EditableStorageItem } from '@/types/storage';
import { TouchableOpacity, View } from 'react-native';

type ConvenienceVariantListSheetProps = {
  currConvenienceVariant: FoodSource;
  availableConvenienceVariants?: readonly FoodSource[];
  onItemChange: (newData: EditableStorageItem) => void;
};

export default function ConvenienceVariantListSheet({
  currConvenienceVariant,
  availableConvenienceVariants,
  onItemChange,
}: ConvenienceVariantListSheetProps) {
  const { closeSheet } = useOverlay();

  const recommendVariantList = Object.values(foodSourceObj).map(({ id }) => id);

  return (
    <View className="py-3">
      <ModalHeader title="섭취 형태" />

      <View className="mt-3 gap-y-2">
        {recommendVariantList.map((id) => {
          const isSelected = id === currConvenienceVariant;
          return (
            <TouchableOpacity
              key={id}
              onPress={() => {
                onItemChange({ foodSource: id });
                closeSheet();
              }}
            >
              <FoodSourceCard
                type={id}
                isSelected={isSelected}
                className={isSelected ? '!border-blue-7' : ''}
              >
                <Icon
                  name="CheckCircle2"
                  className="ml-2"
                  size={22}
                  color={isSelected ? 'blue' : 'inactive'}
                />
              </FoodSourceCard>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
