import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

type TabProps = {
  name: string;
  isSelected?: boolean;
  subName?: string;
  onPress: () => void;
};

export default function Tab({ name, isSelected, subName, onPress }: TabProps) {
  const textClassName = `!text-[15px] ${
    isSelected ? 'text-primary font-extrabold' : 'text-textDescription'
  }`;

  const borderClassName = isSelected ? 'border-primary' : 'border-primaryBorder';

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 flex-row items-center justify-center gap-x-0.5 border-b-2 px-4 py-4 ${borderClassName}`}
    >
      <Text className={textClassName}>
        {name}

        {subName && <Text className={textClassName}> {subName}</Text>}
      </Text>
    </TouchableOpacity>
  );
}
