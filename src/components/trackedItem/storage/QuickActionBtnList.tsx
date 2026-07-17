import {
  addStorageItemAtom,
  changeStorageItemAtom,
  deleteStorageItemListAtom,
  findStorageItemById,
} from '@/atom/storageAtom';
import DateQuickBtn from '@/components/common/DateQuickBtn';
import ModalHeader from '@/components/common/header/ModalHeader';
import SquareBtn from '@/components/common/SquareBtn';
import { IconName } from '@/components/common/ui/Icon';
import { useOverlay } from '@/hooks';
import { EditableStorageItem } from '@/types/storage';
import { formatDateString } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import { View } from 'react-native';

export type QuickAction = {
  id: 'consume' | 'discard' | 'freeze' | 'extendExpiration';
  title: string;
  icon: IconName;
  color: 'green' | 'red' | 'blue' | 'yellow';
  onPress: () => void;
};

type QuickActionBtnListProps = {
  storageItemId: string;
  hasExpirationDateBtn?: boolean;
};

export default function QuickActionBtnList({
  storageItemId,
  hasExpirationDateBtn,
}: QuickActionBtnListProps) {
  const { showToast, closeSheet, openModal } = useOverlay();

  const deleteItems = useSetAtom(deleteStorageItemListAtom);
  const addItem = useSetAtom(addStorageItemAtom);

  const changeItem = useSetAtom(changeStorageItemAtom);

  const currStorageItem = useAtomValue(findStorageItemById(storageItemId));

  if (!currStorageItem) return null;

  const onDeletePress = ({ toast }: { toast: string }) => {
    deleteItems([storageItemId]);

    showToast({
      type: 'undo',
      text1: toast,
      visibilityTime: 4000,
      position: 'bottom',
      props: {
        onUndo: () => {
          addItem(currStorageItem);
        },
      },
    });

    closeSheet();
  };

  const onChangeDatePress = () => {
    if (!currStorageItem?.expiresAt) return;

    const onItemChange = (date: EditableStorageItem) => {
      if (!date?.expiresAt) return;

      const expiresAt = formatDateString(new Date(date?.expiresAt), 'yyyy-MM-dd');

      changeItem({
        id: storageItemId,
        newData: { expiresAt },
      });
    };

    const onChangeDate = (date: Date) => {
      const expiresAt = formatDateString(date, 'yyyy-MM-dd');
      onItemChange({ expiresAt });
    };

    openModal({
      children: (
        <View className="gap-y-3">
          <ModalHeader title="소비기한 연장하기" />

          <DateQuickBtn
            initialDate={currStorageItem.expiresAt}
            onChangeDate={onChangeDate}
            btnClassName="!flex-1"
            hasDateInput
          />
        </View>
      ),
    });
  };

  const quickActionList: QuickAction[] = [
    {
      id: 'consume',
      title: '다 먹었어요',
      icon: 'CheckCircle2',
      color: 'blue',
      onPress: () => onDeletePress({ toast: '✅ 다 먹어서 냉장고에서 제거했어요' }),
    },
    {
      id: 'discard',
      title: '버렸어요',
      icon: 'Trash2',
      color: 'red',
      onPress: () => onDeletePress({ toast: '🗑️ 냉장고에서 제거했어요' }),
    },
    ...(hasExpirationDateBtn
      ? [
          {
            id: 'extendExpiration' as const,
            title: '연장할게요',
            icon: 'CalendarClock' as const,
            color: 'yellow' as const,
            onPress: onChangeDatePress,
          },
        ]
      : []),
  ];

  return (
    <View className="flex-row gap-x-3">
      {quickActionList.map((action) => (
        <SquareBtn
          onPress={action.onPress}
          key={action.title}
          iconName={action.icon}
          name={action.title}
          bgColor={action.color}
          className="flex-1 !py-5"
          textClassName="font-extrabold"
        />
      ))}
    </View>
  );
}
