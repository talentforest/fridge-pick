import SelectBtn from '@/components/common/SelectBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MenuItemCard from '@/components/selectableItem/consumableFood/MenuItemCard';
import { HEX_OPACITY } from '@/constants';
import { useGetMenuList } from '@/hooks';
import { colorTokens } from '@/theme/color';
import { EnrichedStorageItem } from '@/types/storage';
import { getTrackedItemData } from '@/utils';
import { josa } from 'es-hangul';
import { useState } from 'react';
import { useColorScheme, View } from 'react-native';

type AvailableMenuAccordionProps = {
  storageItem: EnrichedStorageItem;
};

export default function AvailableMenuAccordion({
  storageItem,
}: AvailableMenuAccordionProps) {
  const [isExpended, setIsExpended] = useState(false);

  const colorScheme = useColorScheme() ?? 'light';

  const { getHasStorageItemFoodList } = useGetMenuList();

  const { label } = getTrackedItemData(storageItem);

  const menuListHasStorageItem = getHasStorageItemFoodList(storageItem);

  return menuListHasStorageItem.length > 0 ? (
    <Card
      style={{
        backgroundColor: `${colorTokens[colorScheme].orange[3]}${HEX_OPACITY[20]}`,
      }}
      className={`mt-3 !border-0 !p-0`}
    >
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
            <MenuItemCard key={menu.id} menu={menu} />
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
  );
}
