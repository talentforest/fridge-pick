import { TouchableOpacity, View } from 'react-native';
import {
  formatDateString,
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils';
import { expirationStatusObj } from '@/constants';
import { ReactNode } from 'react';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';

interface DateInputProps {
  date: string; // yyyy-MM-dd
  openDatePicker: () => void;
  children?: ReactNode;
  className?: string;
}

export default function DateInput({
  date,
  openDatePicker,
  children,
  className,
}: DateInputProps) {
  const initialDate = new Date(date);
  const remainingDays = getRemainingDays(date);
  const expirationStatus = getExpirationStatus(+remainingDays);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={openDatePicker}
      className={`h-[56] flex-row items-center gap-x-1 rounded-2xl border border-border bg-card px-2.5 ${className}`}
    >
      <View className="flex-1 flex-row items-center gap-2">
        <View
          className={`rounded-full px-3 py-2.5 ${expirationStatusObj[expirationStatus].filterColor}`}
        >
          <Text
            className={`!text-[15px] ${expirationStatusObj[expirationStatus].textColor}`}
          >
            {remainingDays < 0 && <Text className="text-sm">❗️</Text>}
            {formatRemainingDays(remainingDays)}
          </Text>
        </View>
        <Text className="text-base">{formatDateString(initialDate, 'yy년 M월 d일')}</Text>
      </View>

      <Icon name="Calendar" size={20} color="darkGray" className="!mr-2 pb-0.5" />

      {children}
    </TouchableOpacity>
  );
}
