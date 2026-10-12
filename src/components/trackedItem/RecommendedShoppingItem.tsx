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
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FoodImage from '@/components/common/FoodImage';
import SelectBtn from '@/components/common/SelectBtn';

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
        props: {
          bgColor: 'red',
        },
      });
    }

    if (result.type === 'success') {
      showToast({
        type: 'normal',
        text1: `✅ ${josa(label, '을/를')} 장보기 목록에 추가했어요.`,
      });
    }
  };

  const foodLabels = item.foodList
    .slice(0, 2)
    .map((item) => item.label)
    .join(', ');

  const dataObj = {
    food: {
      filterName: '마지막재료',
      color: 'blue',
      description: `만 있으면 -<${item.foodList.length > 2 ? `${foodLabels} 등 ${item.foodList.length - 2}개` : foodLabels}>- 가능`,
      textColor: 'text-blue-5',
    },
    myPick: {
      filterName: '나의픽',
      color: 'red',
      description: `나의픽 ${item.selectableItem.kind === 'ingredient' ? '식재료가' : '메뉴가'}-보관함에 없어요`,
      textColor: 'text-red-5',
    },
  } as const;

  return (
    <Card
      className={`min-h-[120px] justify-between !px-3 !py-3 ${!!isInShoppingListItem ? 'opacity-90' : ''}`}
    >
      {/* <FilterTag
        name={dataObj[item.type].filterName}
        color={dataObj[item.type].color}
        className="mr-auto !rounded-md !px-2 !py-2"
        textClassName="!text-[10px] !font-extrabold"
        isActive
      /> */}

      <View className="flex-row items-center gap-x-1.5">
        <Card className="border-0 !bg-neutral-1 !px-1 !py-1">
          <FoodImage selectableItem={item.selectableItem} imageSize={50} />
        </Card>

        <View className="flex-1 flex-row flex-wrap items-center gap-y-1.5">
          <Text className="font-extrabold text-sm">
            {getSelectableItemLabelAndCategory(item.selectableItem).label}
          </Text>

          {dataObj[item.type].description.split('-').map((text, index) =>
            text.includes('<') ? (
              <View key={text} className="flex-row flex-wrap gap-1">
                {text
                  .slice(1, -1)
                  .split(',')
                  .map((item) => (
                    <FilterTag
                      key={item}
                      name={item}
                      className="!rounded-md !px-1.5 !py-1.5"
                      isActive
                      textClassName="!text-[10px] font-extrabold"
                      color="orange"
                    />
                  ))}
              </View>
            ) : (
              <Text
                key={text}
                className={`${index === 1 && item.type === 'food' ? 'font-extrabold text-sm text-text' : 'text-sm text-neutral-7'}`}
              >
                {text}
              </Text>
            ),
          )}
        </View>
      </View>

      <SelectBtn
        name={`장보기 ${!!isInShoppingListItem ? '담김' : '담기'}`}
        className="!rounded-md !bg-transparent !py-2"
        textClassName="text-sm"
        color={
          !!isInShoppingListItem ? 'lightGreen' : item.type === 'food' ? 'blue' : 'red'
        }
        iconName={!!isInShoppingListItem ? 'CheckCircle2' : 'ShoppingBasket'}
        iconSize={13}
        disabled={!!isInShoppingListItem}
        onPress={onAddShoppingItemPress}
      />
    </Card>
  );
}
