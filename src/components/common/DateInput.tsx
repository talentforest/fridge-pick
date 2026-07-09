import { View } from 'react-native';
import { formatDateString, formatRemainingDays, getRemainingDays } from '@/utils';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import FilterTag from '@/components/common/FilterTag';

interface DateInputProps {
  date: string; // yyyy-MM-dd
  openDatePicker: () => void;
  className?: string;
  hasConvenientButton?: boolean;
}

export default function DateInput({
  date,
  openDatePicker,
  className,
  hasConvenientButton,
}: DateInputProps) {
  const initialDate = new Date(date);
  const remainingDays = getRemainingDays(date);
  // const expirationStatus = getExpirationStatus(+remainingDays);

  return (
    <TouchableOpacity
      onPress={openDatePicker}
      className={`h-14 items-center justify-center gap-x-1 rounded-2xl border border-border bg-card px-3 ${hasConvenientButton ? 'gap-y-3' : 'h-[56] flex-row'} ${className} `}
    >
      <View className="w-full flex-row items-center gap-x-3">
        {/* 달력 아이콘 */}
        <View className="flex-row items-center gap-x-0.5">
          <Icon name="Calendar" size={15} color="darkGray" />
          <Text className="text-neutral-5">소비기한</Text>
        </View>

        {/* 날짜와 남은 일수 */}
        <View className="flex-1 flex-row items-center gap-x-2">
          <Text className="!text-[15px]">
            {formatDateString(initialDate, 'yy년 M월 d일')}
          </Text>

          <FilterTag
            name={`${formatRemainingDays(remainingDays)}`}
            className="!bg-green-1 !px-3 !py-2.5"
            textClassName="!text-[13px] !text-green-7 font-extrabold"
            color="green"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
