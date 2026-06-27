import { View } from 'react-native';
import { formatDateString, formatRemainingDays, getRemainingDays } from '@/utils';
import { ReactNode } from 'react';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import FilterTag from '@/components/common/FilterTag';

interface DateInputProps {
  date: string; // yyyy-MM-dd
  openDatePicker: () => void;
  children?: ReactNode;
  className?: string;
  hasConvenientButton?: boolean;
}

export default function DateInput({
  date,
  openDatePicker,
  children,
  className,
  hasConvenientButton,
}: DateInputProps) {
  const initialDate = new Date(date);
  const remainingDays = getRemainingDays(date);
  // const expirationStatus = getExpirationStatus(+remainingDays);

  return (
    <TouchableOpacity
      onPress={openDatePicker}
      className={`items-center gap-x-1 rounded-2xl border border-border bg-card p-3 ${hasConvenientButton ? 'gap-y-3' : 'h-[56] flex-row'} ${className} `}
    >
      <View className="w-full flex-row items-center gap-x-2">
        {/* 달력 아이콘 */}
        <Icon name="Calendar" size={20} color="darkGray" className="pb-0.5" />

        {/* 날짜와 남은 일수 */}
        <View className="flex-1 flex-row items-center">
          <Text className="text-base">
            {formatDateString(initialDate, 'yy년 M월 d일')}
          </Text>

          <FilterTag
            name={formatRemainingDays(remainingDays)}
            className="ml-2 rounded-md !bg-green-7 !px-2.5 !py-2"
            textClassName="!text-[13px] !text-neutral-1 font-extrabold"
            color="neutral"
          />
        </View>
      </View>

      {children}
    </TouchableOpacity>
  );
}
