import {
  changeStorageItemAtom,
  deleteStorageItemListAtom,
  findItemByStorageAtom,
} from '@/atom/storageItemAtom';
import { mealList, storageObj } from '@/constants';
import { useOverlay } from '@/hooks/common/useOverlay';
import { useAtomValue, useSetAtom } from 'jotai';
import { findIngredient } from '@/utils';
import {
  addFavoriteItemAtom,
  deleteFavoriteItemAtom,
  findFavoriteItemAtom,
} from '@/atom/favoritesAtom';
import { View } from 'react-native';
import MealCompactCard from '@/components/common/MealCompactCard';
import SquareBtn from '@/components/common/SquareBtn';
import SectionTitle from '@/components/common/SectionTitle';
import StorageModal from '@/components/storage/StorageModal';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import Icon from '@/components/common/ui/Icon';
import IngredientImageLabel from '@/components/storage/IngredientImageLabel';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import { CustomIngredient } from '@/types/ingredient';
import { nanoid } from 'nanoid/non-secure';
import { initialCustomIngredient } from '@/constants/initialItem';

interface StorageItemSheetProps {
  storageItemId: string;
}

export default function StorageItemSheet({ storageItemId }: StorageItemSheetProps) {
  const currItem = useAtomValue(findItemByStorageAtom(storageItemId));

  const { closeModal, openModal, closeSheet, alert, confirm } = useOverlay();

  const deleteItems = useSetAtom(deleteStorageItemListAtom);
  const onItemChange = useSetAtom(changeStorageItemAtom);

  const key = `${currItem?.ingredientId || ''}|${currItem?.customLabel || ''}`;
  const favoriteItem = useAtomValue(findFavoriteItemAtom(key));
  const addFavoriteItem = useSetAtom(addFavoriteItemAtom);
  const deleteFavoriteItem = useSetAtom(deleteFavoriteItemAtom);

  if (!currItem) return;

  const { ingredientId, customLabel, id, storage } = currItem;

  const ingredient = findIngredient(ingredientId);

  const onEditStoragePress = () => {
    openModal({
      hasDim: true,
      children: (
        <StorageModal
          currentValue={storage.type}
          onItemChange={async (newData) => {
            onItemChange({ id, newData });
            closeModal();
            closeSheet();
            alert({
              title: '보관위치 변경 알림',
              message: `[${ingredient?.label}] 식재료를 ${storageObj[newData.storage.type].label}으로 옮겼습니다.`,
            });
          }}
        />
      ),
    });
  };

  const onDeletePress = async () => {
    const ok = await confirm({
      title: '삭제 알림',
      message: `정말로 냉장고에서 삭제하시겠습니까?`,
    });

    if (!ok) return;

    deleteItems([id]);
    closeSheet();
  };

  return (
    <View className="my-2 w-full flex-1 gap-y-1.5">
      <View className="flex-row items-start justify-between">
        <IngredientImageLabel ingredient={ingredient} customLabel={customLabel} />

        <Icon
          name="Heart"
          size={25}
          hasFill={!!favoriteItem}
          color={!!favoriteItem ? 'red' : 'inactive'}
          className="p-3"
          onPress={() => {
            if (!favoriteItem) {
              const ingredientItem =
                ingredient ||
                ({
                  ...initialCustomIngredient,
                  id: nanoid(),
                  label: customLabel,
                  defaultStorage: storage.type,
                  expirationDays: { [storage.type]: currItem.expiresAt },
                } as CustomIngredient);

              addFavoriteItem(ingredientItem);
            } else {
              deleteFavoriteItem(ingredient?.id || favoriteItem.id);
            }
          }}
        />
      </View>

      {currItem && (
        <View className="gap-y-3">
          {/* 소비기한 */}
          <FormDateInput
            currDate={currItem.expiresAt}
            onItemChange={(newData) => onItemChange({ id, newData })}
          />

          {/* 메모사항 */}
          {/* {isMemoEditing ? (
            <FormMemo
              autoFocus={true}
              currMemo={currItem?.memo || ''}
              onItemChange={(newData) => onItemChange({ id, newData })}
              onSubmit={() => {
                setIsMemoEditing((prev) => !prev);
                shrinkSheet();
              }}
              isSheetInput={true}
            />
          ) : (
            <Pressable
              onPress={() => setIsMemoEditing((prev) => !prev)}
              className="flex-row items-start justify-between rounded-2xl border border-border bg-card px-4 py-3"
            >
              {memo && memo !== '' ? (
                <Text className="mt-1 flex-1 text-base leading-[22px]">{memo}</Text>
              ) : (
                <Text className="mt-2 text-base text-inactive-text">
                  메모사항이 없습니다.
                </Text>
              )}
              <Icon name="Edit" color="darkGray" size={20} className="p-1.5" />
            </Pressable>
          )} */}

          <View className="mt-3 flex-row gap-x-3">
            {/* 보관위치 */}
            <SquareBtn
              iconName="Edit"
              name="보관위치 변경"
              className="flex-1 !py-4"
              color="indigo"
              onPress={onEditStoragePress}
            />
            <SquareBtn
              iconName="Trash2"
              name="냉장고에서 제거"
              className="flex-1 !py-4"
              color="yellow"
              onPress={onDeletePress}
            />
          </View>
        </View>
      )}

      <View className="mb-2 mt-8 flex-row items-center gap-x-2">
        <SectionTitle
          icon="HandPlatter"
          iconColor="yellow"
          className="items-center !pl-0"
          title={`${customLabel || ingredient?.label} 활용 요리`}
        />
      </View>

      <FullBleedSection>
        <CarouselContainer
          data={mealList}
          initialIndex={mealList.length}
          itemWidth={0.6}
          hasNavigation
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => <MealCompactCard key={item.mealId} meal={item} />}
        />
      </FullBleedSection>
    </View>
  );
}
