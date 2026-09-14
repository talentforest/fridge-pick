import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterTag from '@/components/common/FilterTag';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FoodHorizontalCard from '@/components/selectableItem/FoodHorizontalCard';
import { useGetFoodList } from '@/hooks';
import { EnrichedStorageItem } from '@/types/storage';
import { getTrackedItemData } from '@/utils';
import { josa } from 'es-hangul';
import { View } from 'react-native';

interface FoodListByExpiredSoonFoodProps {
  focusedItem: EnrichedStorageItem;
}

export default function FoodListByExpiredSoonFood({
  focusedItem,
}: FoodListByExpiredSoonFoodProps) {
  const { getHasStorageItemFoodList } = useGetFoodList();

  const foodListByExpiredSoonFood = getHasStorageItemFoodList(focusedItem).slice(0, 8);

  const { label } = getTrackedItemData(focusedItem);

  return (
    <View className="-z-10 -mx-[48px] -mt-1 h-[170px] border border-indigo-1 bg-indigo-1 py-4 pl-[24px]">
      <View className={`mb-1 ml-2 mr-[24px] flex-row items-center gap-x-1`}>
        <FilterTag
          name={label}
          color="red"
          isActive
          className="!px-1.5 !py-1.5"
          textClassName="!text-[13px]"
        />
        <Text className="font-extrabold">
          {josa(label, '을/를').slice(-1)} 활용한 메뉴
        </Text>

        <Text className="ml-auto font-extrabold !text-[13px]">
          총 {foodListByExpiredSoonFood.length}개
        </Text>
      </View>

      {foodListByExpiredSoonFood.length !== 0 ? (
        <CarouselContainer
          data={foodListByExpiredSoonFood}
          itemWidth={0.6}
          requiredMinimum={1}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => <FoodHorizontalCard key={item.id} food={item} />}
        />
      ) : (
        <Card className="mr-[24px] flex-1 items-center justify-center border">
          <Text className="text-inactive-text">식재료를 이용한 메뉴 데이터가 없어요</Text>
        </Card>
      )}
    </View>
  );
}
