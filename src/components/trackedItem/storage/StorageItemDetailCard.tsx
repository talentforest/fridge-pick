import FilterTag from '@/components/common/FilterTag';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import EditStorageItemModal from '@/components/trackedItem/storage/EditStorageItemModal';
import { storageObj } from '@/constants';
import { useOverlay } from '@/hooks';
import { EnrichedStorageItem } from '@/types/storage';
import { formatDateString, formatRemainingDays, getRemainingDays } from '@/utils';
import { View } from 'react-native';

type StorageItemDetailCardProps = {
  storageItem: EnrichedStorageItem;
  type: 'storage' | 'expiredAt' | 'memo';
};

export default function StorageItemDetailCard({
  storageItem,
  type,
}: StorageItemDetailCardProps) {
  const remainingDays = getRemainingDays(storageItem.expiresAt);

  const detail = {
    storage: {
      label: '보관위치',
      data: storageObj[storageItem.storage.type].label,
      emptyData: '보관위치 정보가 없습니다.',
      icon: storageObj[storageItem.storage.type].icon,
      color: storageObj[storageItem.storage.type].color,
    },
    expiredAt: {
      label: '소비기한',
      data: formatDateString(new Date(storageItem.expiresAt), 'yy년 M월 d일'),
      emptyData: '소비기한 정보가 없습니다.',
      icon: 'Calendar',
      color: 'neutral',
    },
    memo: {
      label: '메모사항',
      data: storageItem.memo,
      emptyData: '작성된 메모가 없습니다.',
      icon: 'NotepadText',
      color: 'green',
    },
  } as const;

  const { openModal } = useOverlay();

  const onEditStoragePress = (editType: 'storage' | 'expiredAt' | 'memo') => {
    openModal({
      hasDim: true,
      children: (
        <EditStorageItemModal
          storageItem={storageItem}
          editType={detail[editType].label}
        />
      ),
    });
  };

  return (
    <View className="flex-row items-center gap-x-3">
      <Icon
        name={detail[type].icon}
        className="rounded-xl bg-neutral-1 p-5"
        color={detail[type].color}
      />

      <View className="flex-1 justify-center gap-y-2.5">
        <Text className="!text-[13px] text-neutral-5">{detail[type].label}</Text>
        <View className="flex-row items-center gap-x-2">
          <Text
            className={`text-[15px] ${!detail[type].data ? 'text-inactive-text' : ''}`}
          >
            {detail[type].data || detail[type].emptyData}
          </Text>
          {type === 'expiredAt' && (
            <FilterTag
              name={`${formatRemainingDays(remainingDays)}`}
              className="!bg-green-1 !px-2 !py-1.5"
              textClassName="!text-[12px] !text-green-7 font-extrabold"
              color="green"
            />
          )}
        </View>
      </View>

      <Icon
        name="Edit3"
        className="mt-7 rounded-full bg-neutral-1 p-3"
        color="darkGray"
        size={12}
        onPress={() => onEditStoragePress(type)}
      />
    </View>
  );
}
