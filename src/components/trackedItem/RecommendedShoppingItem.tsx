import { addShoppingItemAtom, findShoppingItem } from '@/atom/shoppingListAtom';
import { useOverlay } from '@/hooks';
import {
  createSelectableItemKey,
  getSelectableItemLabelAndCategory,
  ShoppingInsightResult,
} from '@/utils';
import { josa } from 'es-hangul';
import { useAtomValue, useSetAtom } from 'jotai';
import { View } from 'react-native';
import FilterTag from '@/components/common/FilterTag';
import SelectBtn from '@/components/common/SelectBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FoodImage from '@/components/common/FoodImage';

type RecommendedShoppingItemProps = {
  item: ShoppingInsightResult;
};

export default function RecommendedShoppingItem({ item }: RecommendedShoppingItemProps) {
  const addShoppingItem = useSetAtom(addShoppingItemAtom);

  const key = createSelectableItemKey(item.selectableItem);

  const isInShoppingListItem = useAtomValue(findShoppingItem(key));

  const { showToast } = useOverlay();

  const onAddShoppingItemPress = () => {
    const label = getSelectableItemLabelAndCategory(item.selectableItem).label;
    const result = addShoppingItem(label);

    if (result.type === 'duplicate') {
      showToast({
        type: 'normal',
        text1: `⚠️ ${josa(label, '이/가')} 이미 장보기 목록에 있어요.`,
        visibilityTime: 2000,
        position: 'bottom',
        props: {
          bgColor: 'bg-red-7',
        },
      });
    }

    if (result.type === 'success') {
      showToast({
        type: 'normal',
        text1: `✅ ${josa(label, '을/를')} 장보기 목록에 추가했어요.`,
        visibilityTime: 2000,
        position: 'bottom',
      });
    }
  };

  const dataObj = {
    menu: {
      filterName: '메뉴완성',
      color: 'blue',
      description: `이것만 장보면-${item.menuList.length > 2 ? `${item.menuList.slice(0, 2).map((item) => item.label)} 등 ${item.menuList.length - 2}개` : item.menuList.slice(0, 2).map((item) => item.label)} 가능`,
      textColor: 'text-blue-5',
    },
    myPick: {
      filterName: '나의픽',
      color: 'red',
      description: `나의픽 식재료가-보관함에 없어요`,
      textColor: 'text-red-5',
    },
  } as const;

  return (
    <Card className={`mt-3 !p-2 ${!!isInShoppingListItem ? 'opacity-60' : ''}`}>
      <FilterTag
        name={dataObj[item.type].filterName}
        color={dataObj[item.type].color}
        className="mr-auto !rounded !px-2 !py-1.5"
        textClassName="!text-[10px] !font-extrabold"
        isActive
      />

      <View className="-mt-4 !p-1">
        <View className="items-center gap-y-1">
          <FoodImage selectableItem={item.selectableItem} imageSize={50} />

          <View className="gap-y-2">
            <Text className={`line-clamp-1`}>
              {getSelectableItemLabelAndCategory(item.selectableItem).label}
            </Text>
          </View>
        </View>

        <View className="my-3 mt-3.5 items-center gap-y-1">
          <Text className="text-sm text-neutral-7">
            {dataObj[item.type].description.split('-')[0]}
          </Text>

          <Text
            className={`h-10 text-center font-extrabold !text-sm leading-[16px] text-blue-7 ${dataObj[item.type].textColor}`}
          >
            {dataObj[item.type].description.split('-')[1]}
          </Text>
        </View>

        <SelectBtn
          name="담기"
          className="!gap-x-0 !rounded-md !bg-transparent !py-2"
          textClassName="text-sm"
          color={
            !!isInShoppingListItem ? 'inActive' : item.type === 'menu' ? 'blue' : 'red'
          }
          iconName="Plus"
          iconSize={14}
          disabled={!!isInShoppingListItem}
          onPress={onAddShoppingItemPress}
        />
      </View>
    </Card>
  );
}
