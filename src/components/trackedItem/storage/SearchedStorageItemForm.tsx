import { addStorageItemAtom } from '@/atom/storageAtom';
import { useErrorHandler, useOverlay } from '@/hooks';
import { Ingredient } from '@/types/selectableItem';
import { EditableStorageItem, EnrichedStorageItem, StorageItem } from '@/types/storage';
import { useSetAtom } from 'jotai';
import { useRef } from 'react';
import { ScrollView } from 'react-native';
import { storageObj } from '@/constants';
import LabelContainer from '@/components/common/container/LabelContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import FormMemo from '@/components/common/form/FormMemo';
import SquareBtn from '@/components/common/SquareBtn';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import FormStorage from '@/components/common/form/FormStorage';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';

type SearchedStorageItemFormProps = {
  initialize: () => void;
  onItemChange: (newData: EditableStorageItem) => void;
  currStorageItem: EnrichedStorageItem;
  currStorageType?: 'freezer' | 'fridge' | 'pantry';
};

export default function SearchedStorageItemForm({
  initialize,
  onItemChange,
  currStorageItem,
  currStorageType,
}: SearchedStorageItemFormProps) {
  const scrollRef = useRef<ScrollView>(null);

  const addToStorage = useSetAtom(addStorageItemAtom);

  const { alert } = useOverlay();

  const { error, setError } = useErrorHandler<StorageItem | Ingredient>();

  const { label } = storageObj[currStorageType || 'fridge'];

  const onSubmitPress = () => {
    if (!currStorageType) return;

    const result = addToStorage({
      ...currStorageItem,
      storage: { type: currStorageType },
    });

    if (result.type === 'duplicate') {
      return setError(result);
    }

    if (result.type === 'success') {
      initialize();
      alert({ message: `${label}에 추가되었습니다!` });
    }
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        contentContainerClassName="gap-y-8 pt-5"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 선택한 식재료 정보 */}
        <LabelContainer label="선택한 식재료 정보" labelColor="neutral">
          <TrackedItemImageLabel item={currStorageItem} />

          {/* 초기화버튼 */}
          <Icon
            name="RotateCcw"
            size={16}
            className={`absolute right-3 top-8 rounded-lg bg-neutral-3 p-2.5`}
            color="text"
            onPress={initialize}
          />
        </LabelContainer>

        {/* 보관 위치 */}
        {!currStorageType && (
          <FormStorage
            label="보관위치"
            currStorageType={currStorageItem.storage.type}
            onItemChange={onItemChange}
          />
        )}

        {/* 소비기한 */}
        <FormDateInput
          hasLabel
          onItemChange={onItemChange}
          initialDate={currStorageItem.expiresAt}
        />

        {/* 메모 (선택) */}
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
        bgColor="green"
        name={`${label}에 추가하기`}
        onPress={onSubmitPress}
      />
    </>
  );
}
