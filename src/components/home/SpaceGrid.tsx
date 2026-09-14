import { image_fridge, image_fridge_dark, storageObj } from '@/constants';
import { getAddedFormatLabel } from '@/utils';
import { Image, useColorScheme, View } from 'react-native';
import { Fragment } from 'react';
import { useStorageItemList, useHandleNavigate } from '@/hooks';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

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
    },
    {
      label: '임박 식재료',
      data: expiredSoonStorageItemList.length,
      icon: 'ClockAlert',
      color: 'yellow',
    },
    {
      label: '여유 식재료',
      data: safeStorageItemList.length,
      icon: 'LeafyGreen',
      color: 'green',
    },
  ] as const;

  const scheme = useColorScheme();

  return (
    <View className="gap-y-[10px]">
      {/* 나의 냉장고 */}
      <Card className="w-full !p-3">
        <View className="mx-4 flex-row items-center justify-between pt-4">
          <Text className="font-extrabold text-base">나의 냉장고 상태</Text>
          <Text className="font-extrabold text-blue-5">
            식재료 총 {allStorageItemList.length}개
          </Text>
        </View>

        <View className="mb-5 mt-4 flex-row items-center justify-center">
          <View className="relative h-32 w-[28%] items-center justify-center">
            <Image
              source={scheme === 'dark' ? image_fridge_dark : image_fridge}
              className="mt-2 size-full"
            />

            {/* 냉장고 상태 dot */}
            <View
              className={`absolute right-5 top-1.5 size-2 rounded-xl bg-green-5 ${
                expiredStorageItemList.length > 0
                  ? 'bg-red-5'
                  : expiredSoonStorageItemList.length > 0
                    ? 'bg-yellow-5'
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
                    className={`!rounded-full !p-2`}
                    color={item.color}
                    hasBgColor
                    size={15}
                  />

                  <View className="items-center gap-y-3">
                    <Text
                      className={`text-sm ${item.color === 'yellow' ? 'text-yellow-7' : item.color === 'green' ? 'text-green-7' : 'text-red-5'}`}
                    >
                      {item.label}
                    </Text>
                    <Text className="font-heavy text-xl">
                      {item.data}
                      <Text className="text-neutral-5">개</Text>
                    </Text>
                  </View>
                </View>

                {index < itemList.length - 1 && (
                  <View className="border-r border-border" />
                )}
              </Fragment>
            ))}
          </View>
        </View>

        <View className="flex-row overflow-hidden rounded-2xl bg-neutral-1">
          {storageList.map((spaceInfo, index) => (
            <Fragment key={spaceInfo.id}>
              <TouchableSpaceCard spaceInfo={spaceInfo} />
              {index < storageList.length - 1 && (
                <View className="border-r border-border" />
              )}
            </Fragment>
          ))}
        </View>
      </Card>
    </View>
  );
}

const TouchableSpaceCard = ({
  spaceInfo: { id, label, total, recentlyUpdateDays, expiredItemNum },
}: {
  spaceInfo: {
    id: 'fridge' | 'freezer' | 'pantry';
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
      className={`h-[122px] w-[33%] gap-y-3.5 px-4 py-5`}
      onPress={() => goNavigate('StorageDetailScreen', { id })}
    >
      <View className={`flex-row items-center gap-x-1`}>
        <Icon name={storageObj[id].icon} color={storageObj[id].color} size={14} />
        <Text
          className={`font-extrabold !text-[13px] ${id === 'pantry' ? 'text-yellow-7' : id === 'freezer' ? 'text-ice-7' : 'text-blue-7'}`}
        >
          {label}
        </Text>
      </View>

      <View className="flex-1">
        <Text
          className={`pl-0.5 font-heavy !text-2xl ${id === 'pantry' ? 'text-yellow-7' : id === 'freezer' ? 'text-ice-7' : 'text-blue-7'}`}
        >
          {total}
          <Text className="text-neutral-5">개</Text>
        </Text>

        <View className="my-3 h-[3px] w-5 rounded-full bg-neutral-3" />

        {expiredItemNum && expiredItemNum > 0 ? (
          <View className="flex-row items-center gap-x-0.5">
            <Icon name="TriangleAlert" size={13} color="red" />
            <Text className="text-sm text-red-5">주의 {expiredItemNum}개</Text>
          </View>
        ) : recentlyUpdateDays > -1 && recentlyUpdateDays <= 3 ? (
          <Text className="!text-[13px] text-neutral-5">
            {getAddedFormatLabel(recentlyUpdateDays)} 추가
          </Text>
        ) : (
          <Text className="w-24 text-sm text-neutral-5">최근 추가 없음</Text>
        )}
      </View>

      <Icon
        name="ChevronRight"
        className="absolute bottom-[56%] right-2 rounded-full bg-neutral-3 p-1.5"
        size={16}
        strokeWidth={3}
        color="darkGray"
      />
    </TouchableOpacity>
  );
};
