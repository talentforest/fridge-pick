import {
  cautionStorageItemListAtom,
  itemListByStorageAtom,
} from '@/atom/storageItemAtom';
import { image_fridge } from '@/constants';
import { StackNavProp } from '@/types/RootStackParamList';
import { EnrichStorageItem, StorageTypeId } from '@/types/storage';
import { formatDaysSince, getRemainingDays } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { useAtomValue } from 'jotai';
import { Image, View } from 'react-native';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

export default function SpaceGrid() {
  const freezerItemList = useAtomValue(itemListByStorageAtom('freezer'));
  const fridgeItemList = useAtomValue(itemListByStorageAtom('fridge'));
  const pantryItemList = useAtomValue(itemListByStorageAtom('pantry'));

  const expiredStorageItemList = useAtomValue(cautionStorageItemListAtom('caution'));

  const getExpiredItemList = (storageType: StorageTypeId) => {
    return expiredStorageItemList.filter(
      ({ storageItem }) => storageItem.storage.type === storageType,
    );
  };

  const getRecentlyUpdate = (itemList: EnrichStorageItem[]) => {
    if (itemList.length === 0) return;

    const purchasedAtList = itemList.map((item) => getRemainingDays(item.purchasedAt));
    return Math.max(...purchasedAtList);
  };

  const storageList = {
    fridge: [
      {
        id: 'freezer' as const,
        label: '냉동실',
        total: freezerItemList.length,
        expiredItemNum: getExpiredItemList('freezer').length,
        recentlyUpdateDays: getRecentlyUpdate(freezerItemList), // purchasedAt 시점 기준으로 하면 되겠다.
      },
      {
        id: 'fridge' as const,
        label: '냉장실',
        total: fridgeItemList.length,
        expiredItemNum: getExpiredItemList('fridge').length,
        recentlyUpdateDays: getRecentlyUpdate(fridgeItemList),
      },
    ],
    other: [
      {
        id: 'pantry' as const,
        label: '실온보관',
        total: pantryItemList.length,
        expiredItemNum: getExpiredItemList('pantry').length,
        recentlyUpdateDays: getRecentlyUpdate(pantryItemList),
      },
      {
        id: 'favorites' as const,
        label: '나의 픽!',
        hasNotAllFavorites: true, // 나의 픽 식재료가 현재 보관함에 없는 경우
      },
    ],
  };

  return (
    <View className="gap-y-[10px]">
      <View className="flex-row gap-x-3">
        {/* 나의 냉장고 */}
        <Card className="h-[190px] w-[38%] gap-y-[10px] !py-5">
          <Text>나의 냉장고</Text>
          <View className="relative w-full flex-1 items-center justify-center">
            {/* 주의 식재료가 있는 경우 빨간 점으로 표시 */}
            {expiredStorageItemList.length > 0 && (
              <View className="ml-12 size-2.5 rounded-xl bg-red-500" />
            )}

            <Image source={image_fridge} className="w-full flex-1 object-contain" />
          </View>
        </Card>

        <View className="flex-1 gap-y-[10px]">
          {storageList.fridge.map((spaceInfo) => (
            <TouchableSpaceCard key={spaceInfo.id} spaceInfo={spaceInfo} />
          ))}
        </View>
      </View>

      <View className="flex-row gap-x-[10px]">
        {storageList.other.map((spaceInfo) => (
          <TouchableSpaceCard key={spaceInfo.id} spaceInfo={spaceInfo} />
        ))}
      </View>
    </View>
  );
}

const TouchableSpaceCard = ({
  spaceInfo: { id, label, total, expiredItemNum, recentlyUpdateDays, hasNotAllFavorites },
}: {
  spaceInfo: {
    id: 'fridge' | 'freezer' | 'pantry' | 'favorites';
    label: string;
    total?: number;
    recentlyUpdateDays?: number;
    expiredItemNum?: number;
    hasNotAllFavorites?: boolean;
  };
}) => {
  const navigation = useNavigation<StackNavProp>();

  const notificationObj = {
    hasExpiredItem: {
      label: `주의 식재료 ${expiredItemNum}개`,
      icon: 'ClockAlert' as const,
      condition: expiredItemNum && expiredItemNum > 0,
      color: 'yellow' as const,
    },

    recentlyUpdate: {
      label:
        recentlyUpdateDays !== undefined
          ? `${formatDaysSince(recentlyUpdateDays)} 추가`
          : '',
      icon: undefined,
      condition: !expiredItemNum,
      color: 'neutral' as const,
    },
  };

  const favoriteNotificationObj = {
    hasNotAllFavorites: {
      label: '보관함에 픽이 없어요',
      icon: undefined,
      color: 'yellow' as const,
      condition: hasNotAllFavorites,
    },
    // TODO
    frequently: {
      label: '최근 많이 먹은 식재료',
    },
  };

  return (
    <TouchableOpacity
      className="h-[90px] flex-1"
      onPress={() => {
        if (id === 'favorites') {
          navigation.navigate('FavoritesScreen');
        } else {
          navigation.navigate('StorageDetailScreen', { id });
        }
      }}
    >
      <Card key={label} className="flex-1 !py-5">
        <View className="flex-1 flex-row justify-between">
          <Text>{label}</Text>

          {id === 'favorites' ? (
            <Icon name="Heart" hasFill color="red" size={22} />
          ) : (
            <Text className="font-extrabold text-2xl text-blue-5">{total}</Text>
          )}
        </View>

        {id === 'favorites' ? (
          <Text className="text-[13px] !text-neutral-5">
            {favoriteNotificationObj.hasNotAllFavorites.label}
          </Text>
        ) : (
          <>
            {Object.entries(notificationObj)
              .filter(([_, item]) => item.condition)
              .map(([key, item]) => (
                <View key={key} className="flex-row items-center">
                  {item.icon && <Icon name={item.icon} size={15} color={item.color} />}
                  <Text
                    className={`${item.color === 'yellow' ? 'text-yellow-7' : 'text-neutral-5'}`}
                  >
                    {item.label}
                  </Text>
                </View>
              ))}
          </>
        )}
      </Card>
    </TouchableOpacity>
  );
};
