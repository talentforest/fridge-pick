import LabelContainer from '@/components/common/container/LabelContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import FormMemo from '@/components/common/form/FormMemo';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';
import MealConvenienceCard from '@/components/selectableItem/meal/MealConvenienceCard';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import ConvenienceVariantListSheet from '@/components/trackedItem/storage/ConvenienceVariantListSheet';
import { addStorageItemAtom } from '@/atom/storageItemAtom';
import { useErrorHandler, useOverlay } from '@/hooks';
import { Ingredient } from '@/types/selectableItem';
import { EditableStorageItem, EnrichedStorageItem, StorageItem } from '@/types/storage';
import { useSetAtom } from 'jotai';
import { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { storageObj } from '@/constants';

type SearchedStorageItemFormProps = {
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  setCurrStorageItem: React.Dispatch<React.SetStateAction<EnrichedStorageItem | null>>;
  currStorageItem: EnrichedStorageItem;
  currStorageType: 'freezer' | 'fridge' | 'pantry';
};

export default function SearchedStorageItemForm({
  setSearchKeyword,
  setCurrStorageItem,
  currStorageItem,
  currStorageType,
}: SearchedStorageItemFormProps) {
  const scrollRef = useRef<ScrollView>(null);

  const { alert, openSheet } = useOverlay();

  const { error, setError, clearError } = useErrorHandler<StorageItem | Ingredient>();

  const addToStorage = useSetAtom(addStorageItemAtom);

  const initializeStorageItem = () => {
    setSearchKeyword('');
    setCurrStorageItem(null);
    clearError();
  };

  const { label } = storageObj[currStorageType];

  const onPress = () => {
    const result = addToStorage({
      ...currStorageItem,
      storage: { type: currStorageType },
    });

    if (result.type === 'duplicate') {
      return setError(result);
    }

    if (result.type === 'success') {
      initializeStorageItem();
      alert({ message: `${label}에 성공적으로 추가되었습니다!` });
    }
  };

  const onOpenConvenienceVariantsPress = () => {
    if (currStorageItem.type !== 'meal') return;

    if (!currStorageItem?.foodSource) return;

    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 750,
      hasDim: true,
      render: () => (
        <ConvenienceVariantListSheet
          currConvenienceVariant={currStorageItem.foodSource!}
          onItemChange={onItemChange}
          availableConvenienceVariants={currStorageItem.meal.availableFoodSources}
        />
      ),
    });
  };

  const onItemChange = (newData: Partial<EditableStorageItem>) => {
    setCurrStorageItem((prev): EnrichedStorageItem | null => {
      if (!prev) return null;

      const { customLabel, ...commonData } = newData;

      if (prev.type === 'custom') {
        return {
          ...prev,
          ...commonData,
          ...(customLabel !== undefined
            ? { customLabel }
            : { customLabel: prev.customLabel }),
        };
      }

      if (prev.type === 'meal') {
        return {
          ...prev,
          ...commonData,
        };
      }

      // ingredient
      return { ...prev, ...commonData };
    });
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        contentContainerClassName="gap-y-5 pt-5"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 선택한 식재료 정보 */}
        <LabelContainer
          label={`선택한 식재료 ${currStorageItem.type === 'custom' ? '이름' : '정보'}`}
        >
          <View>
            {currStorageItem.type === 'custom' ? (
              <TextInput
                value={currStorageItem.customLabel}
                onChangeText={(text) => onItemChange({ customLabel: text })}
                placeholder="식재료 이름을 작성해주세요."
                className="border pr-12"
              />
            ) : (
              <Card className="flex-row items-center !py-0">
                <TrackedItemImageLabel
                  item={currStorageItem}
                  isHorizontal
                  imageSize={90}
                  hasCategory
                  textClassName="text-base"
                />
              </Card>
            )}
            {/* 초기화버튼 */}
            <Icon
              name="RotateCcw"
              size={18}
              className={`absolute right-4 top-4 rounded-xl bg-neutral-3 p-2`}
              color="text"
              onPress={initializeStorageItem}
            />
          </View>
        </LabelContainer>

        {/* 간편식 유형 */}
        {currStorageItem.type === 'meal' && currStorageItem.foodSource && (
          <LabelContainer label="간편식 유형">
            <TouchableOpacity onPress={onOpenConvenienceVariantsPress}>
              <MealConvenienceCard
                type={currStorageItem.foodSource}
                isSelected
                className="!h-28"
              >
                <Icon
                  name="ChevronRight"
                  size={18}
                  color="blue"
                  className="rounded-full bg-blue-1 p-2"
                />
              </MealConvenienceCard>
            </TouchableOpacity>
          </LabelContainer>
        )}

        <FormDateInput
          hasLabel
          currDate={currStorageItem.expiresAt}
          onItemChange={onItemChange}
        />

        <FormMemo
          hasLabel
          currMemo={currStorageItem.memo || ''}
          onItemChange={onItemChange}
          onFocus={() => scrollRef.current?.scrollToEnd()}
        />
      </ScrollView>

      {error && <Text className="text-red-5">{error?.message}</Text>}

      <SquareBtn
        iconName="Plus"
        className="py-5"
        textClassName="text-base"
        bgColor="green"
        name={`${label}에 추가하기`}
        onPress={onPress}
      />
    </>
  );
}
