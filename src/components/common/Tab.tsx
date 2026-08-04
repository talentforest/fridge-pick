import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

type TabProps = {
  name: string;
  isSelected?: boolean;
  subName?: string;
  onPress: () => void;
};

export default function Tab({ name, isSelected, subName, onPress }: TabProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 flex-row items-center justify-center gap-x-0.5 border-b-2 px-4 py-4  ${isSelected ? 'border-indigo-5' : 'border-neutral-3'}`}
    >
      <Text
        className={`!text-[15px] text-indigo-5 ${isSelected ? 'text-indigo-7 font-extrabold' : 'text-neutral-7'}`}
      >
        {name}

        {subName && (
          <Text className={`${isSelected ? 'text-indigo-5' : 'text-neutral-7'}`}>
            {' '}
            {subName}
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  );
}
