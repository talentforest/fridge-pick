import {
  expiredItemListByStorageAtom,
  itemListByStorageAtom,
} from '@/atom/storageItemAtom';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { image_fridge } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { StorageTypeId } from '@/types/storage';
import { formatDaysSince } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai';
import { Image, TouchableOpacity, View } from 'react-native';

type StorageDetailNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function SpaceGrid() {
  const freezerItemList = useAtomValue(itemListByStorageAtom('freezer'));
  const fridgeItemList = useAtomValue(itemListByStorageAtom('fridge'));
  const pantryItemList = useAtomValue(itemListByStorageAtom('pantry'));

  const expiredStorageItemList = useAtomValue(expiredItemListByStorageAtom);

  const hasExpiredItem = (storageType: StorageTypeId): boolean => {
    return expiredStorageItemList.some((item) => item.storage.type === storageType);
  };

  const storageList = {
    fridge: [
      {
        id: 'freezer',
        label: '냉동실',
        total: freezerItemList.length,
        hasExpiredItem: hasExpiredItem('freezer'),
        recentlyUpdate: -2, // purchasedAt 시점 기준으로 하면 되겠다.
      },
      {
        id: 'fridge',
        label: '냉장실',
        total: fridgeItemList.length,
        hasExpiredItem: hasExpiredItem('fridge'),
      },
    ],
    other: [
      {
        id: 'pantry',
        label: '실온보관',
        total: pantryItemList.length,
        hasExpiredItem: hasExpiredItem('pantry'),
        recentlyUpdate: 0,
      },
      {
        id: 'favorites',
        label: '자주먹어요',
        total: 0,
        recentlyUpdate: -2,
        hasNotAllFavorites: true,
        // 자주먹는게 있는데 없는 식재료가 있는 경우
      },
    ],
  } as const;

  return (
    <View className="gap-y-[10px]">
      <View className="flex-row gap-x-3">
        {/* 나의 냉장고 */}
        <Card className="h-[190px] w-[38%] gap-y-[10px] !py-5">
          <Text className=" text-neutral-700">나의 냉장고</Text>
          <View className="w-full flex-1 items-center justify-center p-3">
            {expiredStorageItemList.length > 0 && (
              <View className="ml-12 size-2.5 rounded-xl bg-red-500" />
            )}
            <Image source={image_fridge} />
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
  spaceInfo: { id, label, total, hasExpiredItem, recentlyUpdate, hasNotAllFavorites },
}: {
  spaceInfo: {
    id: 'fridge' | 'freezer' | 'pantry' | 'favorites';
    label: string;
    total: number;
    hasExpiredItem?: boolean;
    recentlyUpdate?: number;
    hasNotAllFavorites?: boolean;
  };
}) => {
  const navigation = useNavigation<StorageDetailNavProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
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

        {hasExpiredItem && (
          <View className="flex-row items-center gap-x-0.5">
            <Icon name="ClockAlert" size={14} color="yellow" />
            <Text className="text-[13px] text-yellow-7">주의 식재료 존재</Text>
          </View>
        )}

        {/* TODO: 업데이트 정보 추가 */}
        {!hasExpiredItem &&
          id !== 'favorites' &&
          recentlyUpdate !== undefined &&
          recentlyUpdate <= 0 &&
          recentlyUpdate >= -3 && (
            <Text className="text-[13px] text-neutral-5">
              {formatDaysSince(recentlyUpdate)} 추가
            </Text>
          )}

        {id === 'favorites' && hasNotAllFavorites && (
          <Text className="text-[13px] text-neutral-5">없는 식재료가 있어요</Text>
        )}
      </Card>
    </TouchableOpacity>
  );
};
