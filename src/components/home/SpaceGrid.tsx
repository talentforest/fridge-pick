import { image_fridge, image_fridge_dark, storageObj } from '@/constants';
import { Image, View } from 'react-native';
import { Fragment } from 'react';
import { useStorageItemList, useHandleNavigate } from '@/hooks';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { useAppTheme } from '@/hooks/common/useAppTheme';
import { StorageTypeId } from '@/types/storage';

export default function SpaceGrid() {
  const {
    allStorageItemList,
    freezerItemList,
    fridgeItemList,
    pantryItemList,
    expiredSoonStorageItemList,
    expiredStorageItemList,
    safeStorageItemList,
    getExpiredItemListByStorage,
    getRecentlyUpdateByStorage,
  } = useStorageItemList();

  const storageList = [
    {
      id: 'freezer' as const,
      label: '냉동실',
      total: freezerItemList.length,
      expiredItemNum: getExpiredItemListByStorage('freezer').length,
      recentlyUpdateDays: getRecentlyUpdateByStorage(freezerItemList), // storedAt 시점 기준으로 하면 되겠다.
    },
    {
      id: 'fridge' as const,
      label: '냉장실',
      total: fridgeItemList.length,
      expiredItemNum: getExpiredItemListByStorage('fridge').length,
      recentlyUpdateDays: getRecentlyUpdateByStorage(fridgeItemList),
    },
    {
      id: 'pantry' as const,
      label: '실온',
      total: pantryItemList.length,
      expiredItemNum: getExpiredItemListByStorage('pantry').length,
      recentlyUpdateDays: getRecentlyUpdateByStorage(pantryItemList),
    },
  ];

  const itemList = [
    {
      label: '지난 식재료',
      data: expiredStorageItemList.length,
      icon: 'TriangleAlert',
      color: 'red',
      textColor: 'text-red-5',
    },
    {
      label: '임박 식재료',
      data: expiredSoonStorageItemList.length,
      icon: 'ClockAlert',
      color: 'amber',
      textColor: 'text-amber-7',
    },
    {
      label: '여유 식재료',
      data: safeStorageItemList.length,
      icon: 'LeafyGreen',
      color: 'green',
      textColor: 'text-green-7',
    },
  ] as const;

  const { colorScheme } = useAppTheme();

  return (
    <Card className="w-full gap-y-4 !px-3 !py-3">
      <View className="mx-4 flex-row items-start justify-between pt-3">
        <Text className="font-extrabold text-base">나의 냉장고 상태</Text>
        <Text className="font-extrabold text-disabledText">
          식재료 {allStorageItemList.length}개
        </Text>
      </View>

      <View className="flex-row items-center justify-center">
        <View className="relative h-32 w-[28%] items-center justify-center">
          <Image
            source={colorScheme === 'dark' ? image_fridge_dark : image_fridge}
            className="size-full pt-1"
          />

          {/* 냉장고 상태 dot */}
          <View
            className={`absolute right-5 top-1.5 size-2 rounded-xl bg-green-5 ${
              expiredStorageItemList.length > 0
                ? 'bg-red-5'
                : expiredSoonStorageItemList.length > 0
                  ? 'bg-amber-5'
                  : 'bg-green-5'
            }`}
          />
        </View>

        <View className="w-[74%] flex-row justify-between gap-y-3">
          {itemList.map((item, index) => (
            <Fragment key={item.label}>
              <View className="w-20 items-center justify-center gap-y-2.5">
                <Icon
                  name={item.icon}
                  color={item.color}
                  className="!rounded-full !p-2"
                  hasBgColor
                  size={14}
                />

                <View className="items-center gap-y-2">
                  <Text className={`!text-[11px] ${item.textColor}`}>{item.label}</Text>

                  <Text className="font-heavy text-lg">
                    {item.data}
                    <Text className="border text-textDescription">개</Text>
                  </Text>
                </View>
              </View>

              {index < itemList.length - 1 && (
                <View className="border-r border-x-primaryBorder" />
              )}
            </Fragment>
          ))}
        </View>
      </View>

      <View className="bg-primaryActionBackground flex-row overflow-hidden rounded-2xl">
        {storageList.map((spaceInfo, index) => (
          <Fragment key={spaceInfo.id}>
            <TouchableSpaceCard spaceInfo={spaceInfo} />

            {index < storageList.length - 1 && (
              <View className="my-4 border-r border-primaryBorder" />
            )}
          </Fragment>
        ))}
      </View>
    </Card>
  );
}

const TouchableSpaceCard = ({
  spaceInfo: { id, label, total, recentlyUpdateDays, expiredItemNum },
}: {
  spaceInfo: {
    id: StorageTypeId;
    label: string;
    total?: number;
    recentlyUpdateDays: number;
    expiredItemNum?: number;
    hasNotAllFavorites?: boolean;
  };
}) => {
  const { goNavigate } = useHandleNavigate();

  return (
    <TouchableOpacity
      className={`h-[120px] w-[33%] justify-between gap-y-3 px-4 py-4`}
      onPress={() => goNavigate('StorageDetailScreen', { id })}
    >
      <View className={`flex-row items-center gap-x-1`}>
        <Icon name={storageObj[id].icon} color={storageObj[id].color} size={14} />
        <Text className={`font-extrabold !text-[13px]`}>{label}</Text>
      </View>

      <View className="flex-row items-center gap-x-0.5">
        <Text className={`font-heavy !text-2xl`}>{total}</Text>
        <Text className="pt-1 text-textDescription">개</Text>
      </View>

      <View className="h-0.5 w-5 rounded-full bg-focusBorder" />

      <View className="h-5 justify-center">
        {expiredItemNum && expiredItemNum > 0 ? (
          <View className="flex-row items-center gap-x-0.5">
            <Icon name="TriangleAlert" size={13} color="red" />
            <Text className="text-sm text-errorText">주의 {expiredItemNum}개</Text>
          </View>
        ) : recentlyUpdateDays > -1 && recentlyUpdateDays <= 3 ? (
          <Text className="text-sm text-textDescription">
            {/* {formatRelativeDate(recentlyUpdateDays)} 추가 */}
            여기 수정하기
          </Text>
        ) : (
          <Text className="text-sm text-textDescription">최근 추가 없음</Text>
        )}
      </View>

      <Icon
        name="ChevronRight"
        className="absolute bottom-[56%] right-2 rounded-full bg-neutral-3 p-1.5"
        size={16}
        strokeWidth={3}
        color="indigo"
      />
    </TouchableOpacity>
  );
};
