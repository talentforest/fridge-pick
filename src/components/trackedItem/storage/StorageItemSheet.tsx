import { changeStorageItemAtom, deleteStorageItemListAtom } from '@/atom/storageItemAtom';
import { currMealList, storageObj } from '@/constants';
import { useOverlay } from '@/hooks/common/useOverlay';
import { useAtomValue, useSetAtom } from 'jotai';
import { createTrackedItemKey } from '@/utils';
import {
  addFavoriteItemAtom,
  deleteFavoriteItemAtom,
  findFavoriteItemAtom,
} from '@/atom/favoritesAtom';
import { View } from 'react-native';
import { nanoid } from 'nanoid/non-secure';
import { initialCustomIngredient } from '@/constants/initialItem';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SquareBtn from '@/components/common/SquareBtn';
import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FormDateInput from '@/components/common/form/FormDateInput';
import Icon from '@/components/common/ui/Icon';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import { CustomIngredient } from '@/types/ingredient';
import { EnrichStorageItem } from '@/types/storage';
import StorageModal from '@/components/trackedItem/storage/StorageModal';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';

interface StorageItemSheetProps {
  storageItem: EnrichStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const { closeModal, openModal, closeSheet, alert, confirm } = useOverlay();

  const deleteItems = useSetAtom(deleteStorageItemListAtom);
  const onItemChange = useSetAtom(changeStorageItemAtom);

  const addFavoriteItem = useSetAtom(addFavoriteItemAtom);
  const deleteFavoriteItem = useSetAtom(deleteFavoriteItemAtom);

  const key = createTrackedItemKey(storageItem);
  const favoriteItem = useAtomValue(findFavoriteItemAtom(key));

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
              message: `식재료를 ${storageObj[newData.storage.type].label}으로 옮겼습니다.`,
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

  if (!storageItem) return;

  const { id, storage } = storageItem;

  return (
    <View className="my-2 w-full flex-1 gap-y-1.5">
      <View className="flex-row items-start justify-between">
        <TrackedItemImageLabel
          item={storageItem}
          imageSize={85}
          hasCategory
          textClassName="text-base"
          isHorizontal
        />

        <Icon
          name="Heart"
          size={25}
          hasFill={!!favoriteItem}
          color={!!favoriteItem ? 'red' : 'inactive'}
          className="p-3"
          onPress={() => {
            if (!favoriteItem) {
              if (storageItem.type === 'ingredient') {
                return addFavoriteItem(storageItem.ingredient);
              }

              if (storageItem.type === 'meal') {
                return addFavoriteItem(storageItem.meal);
              }

              if (storageItem.type === 'custom') {
                const customIngredient: CustomIngredient = {
                  ...initialCustomIngredient,
                  id: nanoid(),
                  label: storageItem.customLabel,
                  defaultStorage: storage.type,
                  expirationDays: { [storage.type]: storageItem.expiresAt },
                };
                return addFavoriteItem(customIngredient);
              }
            } else {
              if (storageItem.type === 'ingredient') {
                return deleteFavoriteItem(storageItem.ingredient.id);
              }

              if (storageItem.type === 'meal') {
                return deleteFavoriteItem(storageItem.meal.id);
              }

              deleteFavoriteItem(favoriteItem.id);
            }
          }}
        />
      </View>

      {storageItem && (
        <View className="gap-y-3">
          {/* 소비기한 */}
          <FormDateInput
            currDate={storageItem.expiresAt}
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
          title={`활용 요리`}
        />
      </View>

      <FullBleedSection>
        <CarouselContainer
          data={currMealList.slice(0, 6)}
          initialIndex={currMealList.slice(0, 6).length}
          itemWidth={0.6}
          hasNavigation
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
        />
      </FullBleedSection>
    </View>
  );
}
