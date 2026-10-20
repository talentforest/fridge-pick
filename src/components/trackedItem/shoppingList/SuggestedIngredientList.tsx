import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import { SelectableItem } from '@/types/selectableItem';
import { ScrollView } from 'react-native';

type SuggestedIngredientListProps = {
  suggestList: SelectableItem[];
  onSubmitPress: (item: string) => void;
};

export default function SuggestedIngredientList({
  suggestList,
  onSubmitPress,
}: SuggestedIngredientListProps) {
  return suggestList.length > 0 ? (
    <ScrollView
      horizontal
      className="rounded-lg"
      contentContainerClassName="gap-x-1.5"
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {suggestList.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => onSubmitPress(item.label)}>
          <SelectableItemCard
            item={item}
            className="h-[40px] min-w-[65px] flex-row items-center gap-x-0.5 !pl-2 !pr-3"
            textClassName="!text-sm"
            imageSize={24}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  ) : (
    <></>
  );
}
