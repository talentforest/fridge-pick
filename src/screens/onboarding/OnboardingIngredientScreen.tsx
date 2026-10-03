import { View } from 'react-native';
import { useMemo, useRef, useState } from 'react';
import {
  allIngredientList,
  ingredientCategoryObj,
  ingredientObj,
  iosShadowStyle,
} from '@/constants';
import { IngredientCategoryKey } from '@/types/category';
import { useHandleNavigate, useOverlay } from '@/hooks';
import { Ingredient, IngredientKey } from '@/types/selectableItem';
import { searchSelectableItem } from '@/utils';
import { ingredientInStockAtom } from '@/atom/onboardingIngredientInStockAtom';
import { useAtom } from 'jotai';
import Text from '@/components/common/ui/Text';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import TextInput from '@/components/common/ui/TextInput';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import FilterList from '@/components/common/FilterList';
import GridContainer from '@/components/common/container/GridContainer';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import Icon from '@/components/common/ui/Icon';
import AddIngredientInStockSheet from '@/components/onBoarding/AddIngredientInStockSheet';
import SquareBtn from '@/components/common/SquareBtn';
import { ScrollView } from 'react-native-gesture-handler';

type Filter = IngredientCategoryKey | 'recommended';

export default function OnboardingIngredientScreen() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const [activeFilter, setActiveFilter] = useState<Filter>('recommended');

  const [pickedItemList, setPickedItemList] = useAtom(ingredientInStockAtom);

  const { openSheet } = useOverlay();

  const { replaceNavigate } = useHandleNavigate();

  const scrollRef = useRef<ScrollView>(null);

  const changeActiveFilter = (filter: Filter) => {
    setActiveFilter(filter);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false,
    });
  };

  const categoryList = Object.values(ingredientCategoryObj).map((item) => ({
    name: item.id,
    label: item.label,
    color: item.color,
    icon: item.icon,
  }));

  const filterList = [
    {
      name: 'recommended',
      label: '추천',
      icon: 'ThumbsUp',
      color: 'red', //
    } as const,
    ...categoryList,
  ];

  const ingredientListByCategory = useMemo(() => {
    if (searchKeyword !== '')
      return searchSelectableItem(searchKeyword, allIngredientList) as Ingredient[];

    return activeFilter === 'recommended'
      ? allIngredientList
          .filter((item) => item.onboardingPriority !== undefined)
          .sort(
            (a, b) =>
              (a.onboardingPriority ?? Infinity) - (b.onboardingPriority ?? Infinity),
          )
      : Object.values(ingredientObj[activeFilter]);
  }, [activeFilter, searchKeyword]);

  const checkHasItem = (ingredientId: IngredientKey) => {
    return pickedItemList.some(({ id }) => id === ingredientId);
  };

  const handlePickedItemList = (ingredient: Ingredient) => {
    if (checkHasItem(ingredient.id)) {
      setPickedItemList((prev) => prev.filter(({ id }) => id !== ingredient.id));
    } else {
      setPickedItemList((prev) => [...prev, ingredient]);
    }
  };

  const onPress = () => {
    openSheet({
      keyboardBehavior: 'extend',
      render: () => (
        <AddIngredientInStockSheet
          navi={() => replaceNavigate('OnboardingResultScreen')}
        />
      ),
    });
  };

  return (
    <SafeAreaViewContainer>
      <ViewContentContainer className="gap-y-6 py-6">
        <View className="gap-y-2">
          <Text className="font-extrabold text-2xl">집에 있는 식재료를</Text>
          <Text className="font-extrabold text-2xl">골라주세요</Text>
        </View>

        <View className="flex-1 gap-y-3">
          <TextInput
            value={searchKeyword}
            onChangeText={setSearchKeyword}
            placeholder="식재료를 검색해주세요."
            icon="Search"
          />

          <FilterList
            filterList={filterList}
            activeFilter={activeFilter}
            changeActiveFilter={changeActiveFilter}
            isScrollHorizontal
          />

          <View className="mt-2 flex-1 gap-y-3">
            <View className="flex-row items-center gap-x-2">
              <Text className="font-extrabold">
                {activeFilter === 'recommended'
                  ? '자주 사용하는 식재료'
                  : ingredientCategoryObj[activeFilter].label}
              </Text>
              <Text className="font-extrabold">{ingredientListByCategory.length}개</Text>
            </View>

            <ScrollViewContainer
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              className="flex-1"
              contentContainerClassName="!pb-40 !px-0"
            >
              <GridContainer columns={4} gap={8} horizontalInset={20}>
                {ingredientListByCategory.map((ingredient) => (
                  <TouchableOpacity
                    key={ingredient.id}
                    onPress={() => handlePickedItemList(ingredient)}
                    className={`h-[110px] rounded-2xl`}
                  >
                    <SelectableItemCard
                      item={ingredient}
                      key={ingredient.id}
                      className={`h-full gap-y-2 !px-2 !pb-1 !pt-0 ${checkHasItem(ingredient.id) ? '!bg-yellow-3' : 'border-neutral-1'}`}
                      textClassName="!text-[13px]"
                    />
                    {checkHasItem(ingredient.id) && (
                      <Icon
                        name="CheckCircle2"
                        className="absolute left-1.5 top-1.5"
                        color="yellow"
                        size={18}
                      />
                    )}
                  </TouchableOpacity>
                ))}
              </GridContainer>
            </ScrollViewContainer>
          </View>
        </View>
      </ViewContentContainer>

      {pickedItemList.length > 0 ? (
        <View
          style={{
            ...iosShadowStyle,
            shadowOffset: { width: 0, height: -10 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowColor: '#333',
          }}
          className="absolute bottom-0 right-0 w-full gap-y-4 rounded-t-3xl bg-white px-5 pb-12 pt-6"
        >
          <Text className="ml-1 font-extrabold text-base">
            <Text className="font-heavy text-base text-orange-7">
              {pickedItemList.length}개
            </Text>
            를 선택했어요
          </Text>

          <SquareBtn
            name="선택 완료하기"
            className="py-6"
            onPress={onPress}
            textClassName="!text-[15px]"
          />
        </View>
      ) : (
        <></>
      )}
    </SafeAreaViewContainer>
  );
}
