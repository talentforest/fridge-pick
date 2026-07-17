import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import Text from '@/components/common/ui/Text';
import { expirationStatusObj, storageObj } from '@/constants';
import { View } from 'react-native';
import {
  formatDateString,
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
  getTrackedItemData,
} from '@/utils';
import FoodImage from '@/components/common/FoodImage';
import { EnrichedStorageItem } from '@/types/storage';

type SelectableItemDetailCardProps = {
  storageItem: EnrichedStorageItem;
  onNavigatePress?: () => void;
  onEditPress?: () => void;
};

export default function SelectableItemDetailCard({
  storageItem,
  onNavigatePress,
  onEditPress,
}: SelectableItemDetailCardProps) {
  const { label, categoryLabel } = getTrackedItemData(storageItem);

  const remainingDays = getRemainingDays(storageItem.expiresAt);

  const status = getExpirationStatus(remainingDays);

  const formattedRemainingdays = formatRemainingDays(remainingDays);

  return (
    <View className="mt-3 flex-row gap-x-3">
      <View className="flex-1 justify-between gap-y-2">
        {/* 라벨 */}
        <View className="flex-row flex-wrap items-end gap-2">
          <Text className={`pl-1 font-extrabold text-xl leading-7`}>{label}</Text>
          {/* 카테고리 */}
          <Text className="mb-0.5 text-neutral-5">{categoryLabel}</Text>
          {/* 수정버튼 */}
          {onNavigatePress ? (
            <></>
          ) : (
            <Icon name="Edit3" size={14} className="ml-auto p-1" onPress={onEditPress} />
          )}
        </View>

        <Card className="!bg-border !px-0 !py-1.5">
          {/* 보관위치 */}
          <View className="h-[42px] w-full flex-row items-center gap-x-2 rounded-lg !px-3 !py-2">
            <Icon name="MapPinned" size={14} color="neutral" />

            <View className="flex-row items-center gap-x-0.5">
              <Text
                className={`${storageObj[storageItem.storage.type].textColor} font-extrabold`}
              >
                {storageObj[storageItem.storage.type].label}
              </Text>
              <Icon
                name={storageObj[storageItem.storage.type].icon}
                color={storageObj[storageItem.storage.type].color}
                size={14}
              />
            </View>

            {onNavigatePress ? (
              <TouchableOpacity
                className="ml-auto flex-row items-center py-2"
                onPress={onNavigatePress}
              >
                <Text className="!text-[13px] text-neutral-5">바로가기</Text>
                <Icon name="ChevronRight" size={16} color="darkGray" />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>

          <View className="mx-3 border-b border-neutral-300" />

          {/* 소비기한 */}
          <View className="h-[42px] w-full flex-row items-center gap-x-2 rounded-lg !px-3 !py-0">
            <Icon name="CalendarDays" size={14} color="neutral" />

            <View className="flex-row items-end gap-x-1">
              <Text className={`font-extrabold ${expirationStatusObj[status].textColor}`}>
                {formattedRemainingdays}
              </Text>

              <View className="mx-1.5 h-4 border-l border-neutral-5" />

              <Text className="text-neutral-7">
                {formatDateString(new Date(storageItem.expiresAt), 'yy년 M월 d일 (EEE)')}
              </Text>
            </View>
          </View>

          {/* 메모사항 */}
          {storageItem.memo ? (
            <>
              <View className="mx-3 border-b border-neutral-300" />
              <View className="h-[42px] w-full flex-row items-center gap-x-2 rounded-lg !px-3 !py-0">
                <Icon name="NotebookPen" size={14} color="neutral" />

                <Text className="text-neutral-7">{storageItem.memo}</Text>
              </View>
            </>
          ) : (
            <></>
          )}
        </Card>
      </View>

      <Card className="items-center justify-center !bg-border !px-1 !py-0">
        <FoodImage trackedItem={storageItem} imageSize={100} />
      </Card>
    </View>
  );
}
