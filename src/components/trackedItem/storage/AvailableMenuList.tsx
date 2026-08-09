import CarouselContainer from '@/components/common/container/CarouselContainer';
import SelectBtn from '@/components/common/SelectBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MenuHorizontalCard from '@/components/selectableItem/consumableFood/MenuHorizontalCard';
import { useGetMenuList } from '@/hooks';
import { EnrichedStorageItem } from '@/types/storage';
import { getTrackedItemData } from '@/utils';
import { josa } from 'es-hangul';
import { useState } from 'react';
import { View } from 'react-native';

type AvailableMenuListProps = {
  storageItem: EnrichedStorageItem;
  type: 'accordion' | 'carousel';
};

export default function AvailableMenuList({
  storageItem,
  type = 'accordion',
}: AvailableMenuListProps) {
  const [isExpended, setIsExpended] = useState(false);

  const { getHasStorageItemFoodList } = useGetMenuList();

  const { label } = getTrackedItemData(storageItem);

  const menuListHasStorageItem = getHasStorageItemFoodList(storageItem);

  const list = getHasStorageItemFoodList(storageItem);

  return (
    <>
      {menuListHasStorageItem.length > 0 ? (
        <>
          {type === 'accordion' ? (
            <Card className={`!border-0 !bg-red-1 !p-0`}>
              <TouchableOpacity
                className="flex-row items-center gap-x-3 px-5 py-7"
                onPress={() => setIsExpended((prev) => !prev)}
              >
                <Icon name="ChefHat" color="orange" size={35} />

                <View className="flex-1 gap-y-2.5">
                  <Text className="font-extrabold !text-[15px]">
                    {josa(label, '으로/로')} 뭐 해먹을까?
                  </Text>
                  <Text className="text-sm text-neutral-7">
                    이 식재료로 만들 수 있는 메뉴를 알려드릴게요!
                  </Text>
                </View>

                <Icon name="ChevronDown" size={22} color="neutral" />
              </TouchableOpacity>

              {isExpended && (
                <View className="gap-y-2 border-orange-3 px-4 pb-4">
                  {/* TODO: 필터 */}

                  {/* 메뉴 리스트 */}
                  {menuListHasStorageItem.slice(0, 4).map((menu) => (
                    <MenuHorizontalCard key={menu.id} menu={menu} />
                  ))}

                  {menuListHasStorageItem.length > 4 ? (
                    <SelectBtn
                      name={`${label} 활용 메뉴 ${menuListHasStorageItem.length}개 모두 보기`}
                      className="mt-4 "
                      color="neutral"
                      tailIconName="ChevronRight"
                    />
                  ) : (
                    <></>
                  )}
                </View>
              )}
            </Card>
          ) : (
            <></>
          )}

          {type === 'carousel' ? (
            <View className="gap-y-3">
              <Text className="font-extrabold text-base">
                {josa(label, '으로/로')} 뭐 해먹을까?
              </Text>
              <CarouselContainer
                data={list}
                initialIndex={list.length}
                itemWidth={0.8}
                // hasNavigation
                spacing={5}
                centerFocus
                hasPagination
                requiredMinimum={1}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item }) => <MenuHorizontalCard menu={item} />}
              />
            </View>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
