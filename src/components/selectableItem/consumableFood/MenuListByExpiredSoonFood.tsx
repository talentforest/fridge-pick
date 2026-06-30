import CarouselContainer from '@/components/common/container/CarouselContainer';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MenuCard from '@/components/selectableItem/consumableFood/MenuCard';
import { useGetMenuList } from '@/hooks';
import { EnrichedStorageItem } from '@/types/storage';
import { getTrackedItemLabelAndCategory } from '@/utils';
import { View } from 'react-native';

interface MenuListByExpiredSoonFoodProps {
  focusedItem: EnrichedStorageItem;
}

export default function MenuListByExpiredSoonFood({
  focusedItem,
}: MenuListByExpiredSoonFoodProps) {
  const { getHasStorageItemFoodList } = useGetMenuList();

  const menuListByExpiredSoonFood = getHasStorageItemFoodList(focusedItem);

  return (
    <View className="h-[350px]">
      <View className={`mt-1 flex-row items-center gap-x-2 pb-3 pl-8`}>
        <Text>임박 식재료를 이용한 메뉴</Text>
        <View className="rounded-xl bg-inactive-bg px-3 py-2.5">
          <Text className="font-extrabold">
            {getTrackedItemLabelAndCategory(focusedItem).label}
          </Text>
        </View>
      </View>

      {menuListByExpiredSoonFood.length !== 0 ? (
        <CarouselContainer
          data={menuListByExpiredSoonFood}
          initialIndex={menuListByExpiredSoonFood.length}
          itemWidth={0.75}
          hasPagination
          centerFocus
          requiredMinimum={1}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => (
            <MenuCard key={item.id} food={item} filterList={item.filterList} />
          )}
        />
      ) : (
        <Card className="mx-6 h-72 items-center justify-center">
          <Text className="text-inactive-text">식재료를 이용한 메뉴가 없어요</Text>
        </Card>
      )}
    </View>
  );
}
