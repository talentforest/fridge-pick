import {
  CustomFoodId,
  CustomIngredientId,
  Food,
  Ingredient,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedStorageItem, StorageTypeId } from '@/types/storage';
import {
  convertIngredientToStorageItem,
  convertFoodToStorageItem,
  createSelectableItemKey,
  findSelectableItemWithSearchKeyword,
  findTrackedItemWithKey,
  searchSelectableItem,
  formatDateString,
  calculateExpiresAt,
} from '@/utils';
import { Keyboard, View } from 'react-native';
import { useMemo } from 'react';
import { useAtomValue } from 'jotai';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import { useOverlay } from '@/hooks';
import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import { nanoid } from 'nanoid/non-secure';
import GridContainer from '@/components/common/container/GridContainer';
import IconWithText from '@/components/common/IconWithText';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import TextInput from '@/components/common/ui/TextInput';
import LabelContainer from '@/components/common/container/LabelContainer';
import SelectSelectableTypeSheet from '@/components/trackedItem/storage/SelectSelectableTypeSheet';
import { suggestItemCategory } from '@/utils/suggestItemCategory';
import { customSelectableItemListAtom } from '@/atom/customSelectableItemAtom';

interface SearchAddStorageItemProps {
  currStorageType: StorageTypeId;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  setCurrStorageItem: React.Dispatch<React.SetStateAction<EnrichedStorageItem | null>>;
  isSheetInput?: boolean;
  maxLength?: number;
}

export default function SearchAddStorageItem({
  currStorageType,
  searchKeyword,
  setSearchKeyword,
  setCurrStorageItem,
  isSheetInput = false,
  maxLength = 12,
}: SearchAddStorageItemProps) {
  const allStorageItemList = useAtomValue(allStorageItemListAtom);

  const customItemList = useAtomValue(customSelectableItemListAtom);

  const recommendedKeywordList = searchSelectableItem(
    searchKeyword || '',
    customItemList,
    maxLength,
  );

  const masterSelectableItem = findSelectableItemWithSearchKeyword(
    searchKeyword,
    customItemList,
  );

  const { showToast, openSheet, confirm } = useOverlay();

  const list = useMemo(() => {
    return recommendedKeywordList.filter((item) => {
      const key = createSelectableItemKey(item);

      return !allStorageItemList.find((storageItem) =>
        findTrackedItemWithKey(storageItem, key),
      );
    });
  }, [allStorageItemList, recommendedKeywordList]);

  // 검색결과인 마스터 아이템을 선택
  const selectMasterSelectableItemPress = (item: SelectableItem) => {
    if (item.kind === 'ingredient') {
      const storageItem = convertIngredientToStorageItem(item, currStorageType);
      setCurrStorageItem(storageItem);
    }

    if (item.kind === 'food') {
      const storageItem = convertFoodToStorageItem(item, currStorageType);
      setCurrStorageItem(storageItem);
    }
  };

  // 새로운 커스텀 아이템을 직접 등록
  const registerNewCustomSelectableItemPress = () => {
    if (masterSelectableItem) {
      return showToast({
        type: 'normal',
        text1: '⚠️ 이미 보유하고 있습니다.',
        props: {
          bgColor: 'red',
        },
      });
    }

    const suggestion = suggestItemCategory(searchKeyword);

    const now = new Date();

    const commonSelectableData = {
      recommendLevel: 'general',
      isActive: true,
      label: searchKeyword,
      defaultStorage: 'fridge',
      expiration: {
        mode: 'recommended',
        recommendedDurations: { fridge: { value: 3, unit: 'day' } },
      },
      defaultUnitLabel: '개',
    } as const;

    const commonStorageData = {
      id: nanoid(),
      storedAt: formatDateString(now, 'yyyy-MM-dd'),
      storage: {
        type: currStorageType,
      },
      expiresAt: calculateExpiresAt(now, DEFAULT_EXPIRATION_DAYS),
    } as const;

    let initialCustomStorageItem: EnrichedStorageItem;

    if (suggestion?.kind === 'food') {
      const foodId: CustomFoodId = `custom:food:${nanoid()}`;

      const customFood: Food = {
        ...commonSelectableData,
        kind: 'food',
        id: foodId,
        category: suggestion.category,
      };

      initialCustomStorageItem = {
        ...commonStorageData,
        type: 'food',
        foodId,
        food: customFood,
      };
    } else {
      const ingredientId: CustomIngredientId = `custom:ingredient:${nanoid()}`;

      const customIngredient: Ingredient = {
        ...commonSelectableData,
        kind: 'ingredient',
        id: ingredientId,
        category: suggestion?.category ?? 'vegetable',
      };

      initialCustomStorageItem = {
        ...commonStorageData,
        type: 'ingredient',
        ingredientId,
        ingredient: customIngredient,
      };
    }

    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
    }

    confirm({
      message: `먼저 "${searchKeyword}"에 대한 정보를 등록할게요!`,
      onConfirmPress: () => {
        openSheet({
          keyboardBehavior: 'interactive',
          render: () => (
            <SelectSelectableTypeSheet
              storageItem={initialCustomStorageItem}
              setCurrStorageItem={setCurrStorageItem}
            />
          ),
        });
      },
    });
  };

  return (
    <View className="mt-5">
      <LabelContainer label="식재료 검색">
        <TextInput
          isSheetInput={isSheetInput}
          value={searchKeyword}
          onChangeText={setSearchKeyword}
          placeholder="식재료를 검색해주세요."
          icon="Search"
        />
      </LabelContainer>

      {/* 추천 식재료 */}
      {list.length ? (
        <GridContainer columns={3} gap={10} horizontalInset={21} className="mt-3">
          {list.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => selectMasterSelectableItemPress(item)}
            >
              <SelectableItemCard
                item={item}
                className={`h-[100px] ${item.label === searchKeyword ? '!border-blue-3' : ''}`}
                textClassName="!text-[13px]"
                imageSize={63}
              />
            </TouchableOpacity>
          ))}
        </GridContainer>
      ) : (
        <></>
      )}

      {!masterSelectableItem && searchKeyword !== '' ? (
        <IconWithText
          icon="PlusCircle"
          iconSize={14}
          text={`"${searchKeyword}" 정보 직접 등록하기`}
          iconColor="blue"
          className="mt-1 px-3 py-5"
          textClassName="text-blue-7"
          onPress={registerNewCustomSelectableItemPress}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
