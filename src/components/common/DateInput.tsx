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
  onResetPress?: (day?: number) => void;
}

export default function DateInput({
  date,
  openDatePicker,
  onResetPress,
  className,
}: DateInputProps) {
  const initialDate = new Date(date);
  const remainingDays = getRemainingDays(date);
  const expirationStatus = getExpirationStatus(remainingDays);

  return (
    <TouchableOpacity
      onPress={openDatePicker}
      className={`h-16 flex-row items-center justify-center gap-x-3 rounded-2xl border border-border bg-card px-3 ${className} `}
    >
      {/* 달력 아이콘 */}
      <View className="flex-row items-center gap-x-0.5 !py-1 pl-0.5">
        <Icon name="CalendarDays" size={15} color="darkGray" />
        <Text className="text-neutral-5">소비기한</Text>
      </View>

      {/* 날짜와 남은 일수 */}
      <View className="flex-1 flex-row items-center gap-x-2">
        <View className="flex-1 flex-row items-center gap-x-2">
          <Text className="font-extrabold">
            {formatDateString(initialDate, 'yy년 M월 d일 (EEE)')}
          </Text>

          <FilterTag
            name={`${formatRemainingDays(remainingDays)}`}
            className="!rounded-md !px-1.5 !py-1"
            isActive
            textClassName="!text-sm font-extrabold"
            color={expirationStatusObj[expirationStatus].color}
          />
        </View>

        {onResetPress ? (
          <Icon
            name="RefreshCcw"
            size={14}
            className="p-1"
            onPress={() => onResetPress()}
          />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
}
