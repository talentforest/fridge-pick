import { View } from 'react-native';
import {
  formatDateString,
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import FilterTag from '@/components/common/FilterTag';
import { expirationStatusObj } from '@/constants';

interface DateInputProps {
  date: string; // yyyy-MM-dd
  openDatePicker?: () => void;
  className?: string;
}

export default function DateInput({ date, openDatePicker, className }: DateInputProps) {
  const initialDate = new Date(date);
  const remainingDays = getRemainingDays(date);
  const expirationStatus = getExpirationStatus(remainingDays);

  return (
    <TouchableOpacity
      onPress={openDatePicker}
      className={`h-14 flex-row items-center justify-center gap-x-3 rounded-2xl border border-border bg-card px-3 ${className} `}
    >
      {/* 달력 아이콘 */}
      <View className="flex-row items-center gap-x-0.5">
        <Icon name="CalendarDays" size={15} color="darkGray" />
        <Text className="text-neutral-5">소비기한</Text>
      </View>

      {/* 날짜와 남은 일수 */}
      <View className="flex-1 flex-row items-center gap-x-2">
        <Text className="font-extrabold">
          {formatDateString(initialDate, 'yy년 M월 d일 EEEE')}
        </Text>

        <FilterTag
          name={`${formatRemainingDays(remainingDays)}`}
          className="ml-auto !px-3 !py-2"
          isActive
          textClassName="!text-[13px] font-extrabold"
          color={expirationStatusObj[expirationStatus].color}
        />
      </View>
    </TouchableOpacity>
  );
}
