import GridContainer from '@/components/common/container/GridContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import SquareBtn from '@/components/common/SquareBtn';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { DEFAULT_EXPIRATION_DAYS, storageObj } from '@/constants';
import { StorageItem, StorageTypeId } from '@/types/storage';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';
import { View } from 'react-native';

interface FormStorageProps {
  label: string;
  currStorageType: StorageTypeId;
  currDate?: string;
  onItemChange: (newData: Pick<StorageItem, 'storage' | 'expiresAt'>) => void;
  ingredientExpirationDays?: { fridge?: number; freezer?: number; pantry?: number };
}

export default function FormStorage({
  label,
  currStorageType,
  currDate,
  onItemChange,
  ingredientExpirationDays,
}: FormStorageProps) {
  const onChangeDate = (date: Date) => {
    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    onItemChange({ storage: { type: currStorageType }, expiresAt });
  };

  return (
    <LabelContainer label={label}>
      <GridContainer columns={3} gap={8} className="mb-2">
        {Object.values(storageObj).map(({ id: storageType, label, icon, color }) => (
          <SquareBtn
            key={storageType}
            name={label}
            className="flex h-[75px] !flex-col gap-y-2 !rounded-xl !px-2"
            textClassName="text-center !text-md"
            iconName={icon}
            iconSize={25}
            color={currStorageType === storageType ? color : 'inActive'}
            onPress={() => {
              const date = addDays(
                new Date(),
                ingredientExpirationDays?.[storageType] || DEFAULT_EXPIRATION_DAYS,
              );
              const expiresAt = formatDateString(date, 'yyyy-MM-dd');
              onItemChange({ storage: { type: storageType }, expiresAt });
            }}
          />
        ))}
      </GridContainer>

      {ingredientExpirationDays?.[currStorageType] && (
        <View className="mb-4 mt-2 flex-row items-center rounded-xl pl-1">
          <Icon name="Info" size={18} color="neutral" />
          <Text className="w-fit pl-1 text-base">
            <Text
              className={`text-base ${storageObj[currStorageType].color === 'yellow' ? 'text-yellow-' : ''}`}
            >
              [{storageObj[currStorageType].label}]
            </Text>
            의 추천 소비기한은{' '}
            <Text className="font-extrabold text-base !text-green-5">
              {ingredientExpirationDays?.[currStorageType]}일
            </Text>
            입니다.
          </Text>
        </View>
      )}

      {currDate && (
        <FormDateInput
          currDate={currDate}
          onItemChange={(newData) =>
            onChangeDate(newData.expiresAt ? new Date(newData.expiresAt) : new Date())
          }
        />
      )}
    </LabelContainer>
  );
}
