import GridContainer from '@/components/common/container/GridContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import { storageObj } from '@/constants';
import { StorageItem, StorageTypeId } from '@/types/storage';

interface FormStorageProps {
  label: string;
  currStorageType: StorageTypeId;
  onItemChange: (
    newData: Partial<Pick<StorageItem, 'expiresAt' | 'storage' | 'memo'>>,
  ) => void;
}

export default function FormStorage({
  label,
  currStorageType,
  onItemChange,
}: FormStorageProps) {
  return (
    <LabelContainer label={label}>
      <GridContainer columns={3} gap={8}>
        {Object.values(storageObj).map(({ id: storageType, label, icon, color }) => (
          <PressableSquareBtn
            key={storageType}
            name={label}
            className="flex h-24 !flex-col gap-y-3 !rounded-xl !px-2"
            textClassName="text-md text-center font-extrabold"
            iconName={icon}
            iconSize={25}
            color={currStorageType === storageType ? color : 'inActive'}
            onPress={() => {
              onItemChange({ storage: { type: storageType } });
            }}
          />
        ))}
      </GridContainer>
    </LabelContainer>
  );
}
