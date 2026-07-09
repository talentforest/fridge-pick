import { deleteStorageItemListAtom } from '@/atom/storageAtom';
import { image_empty_plate } from '@/constants';
import { useOverlay, useGetMenuList } from '@/hooks';
import { useSetAtom } from 'jotai';
import { getTrackedItemLabelAndCategory } from '@/utils';
import { EnrichedStorageItem } from '@/types/storage';
import { Image, View } from 'react-native';

import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';
import Text from '@/components/common/ui/Text';
import Card from '@/components/common/ui/Card';
import MenuCompactCard from '@/components/selectableItem/consumableFood/MenuCompactCard';
import StorageItemDetailCard from '@/components/trackedItem/storage/StorageItemDetailCard';
import SelectBtn from '@/components/common/SelectBtn';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import ModalHeader from '@/components/common/header/ModalHeader';

interface StorageItemSheetProps {
  storageItem: EnrichedStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const { closeSheet, confirm } = useOverlay();

  const { id } = storageItem;

  const { getHasStorageItemFoodList } = useGetMenuList();

  const menuListHasStorageItem = getHasStorageItemFoodList(storageItem);

  const deleteItems = useSetAtom(deleteStorageItemListAtom);

  const onDeletePress = async () => {
    const ok = await confirm({
      title: '삭제 알림',
      message: `정말로 냉장고에서 식재료를 삭제하시겠습니까?`,
    });

    if (!ok) return;

    deleteItems([id]);
    closeSheet();
  };

  if (!storageItem) return;

  const label = getTrackedItemLabelAndCategory(storageItem).label;

  return (
    <View className="my-2 w-full">
      <ModalHeader title="식재료 정보" />
      <View className="my-2 flex-row items-center justify-between gap-x-4">
        <TrackedItemImageLabel
          item={storageItem}
          imageSize={68}
          hasCategory
          textClassName="text-base font-extrabold"
          isHorizontal
          hasImageBox
        />

        <FavoriteBtn
          storageItem={storageItem}
          size={20}
          className="absolute right-5 top-5"
        />
      </View>

      {storageItem && (
        <Card className="gap-y-1.5">
          <StorageItemDetailCard type="storage" storageItem={storageItem} />
          <View className="border-b border-border" />
          <StorageItemDetailCard type="expiredAt" storageItem={storageItem} />
          {storageItem.memo && (
            <>
              <View className="border-b border-border" />
              <StorageItemDetailCard type="memo" storageItem={storageItem} />
            </>
          )}
        </Card>
      )}

      <SelectBtn
        name="식재료 삭제하기"
        iconName="Trash2"
        onPress={onDeletePress}
        color="red"
        className="mt-5 !py-[16px]"
      />

      <View className="my-16 gap-y-3">
        <SectionTitle
          icon="HandPlatter"
          color="yellow"
          className="items-center !pl-0"
          highlight={label}
          type="sub"
          title={`${label} 활용 메뉴`}
        />

        {menuListHasStorageItem.length > 0 ? (
          <View className={menuListHasStorageItem.length > 2 ? 'px-[24px]' : ''}>
            <CarouselContainer
              data={menuListHasStorageItem}
              initialIndex={menuListHasStorageItem.length}
              itemWidth={0.35}
              hasNavigation
              hasPagination
              spacing={12}
              keyExtractor={(_, index) => `${index}`}
              renderItem={({ item }) => <MenuCompactCard key={item.id} food={item} />}
            />
          </View>
        ) : (
          <Card className="h-56 items-center justify-center gap-y-2">
            <Image source={image_empty_plate} className="aspect-square h-[90px]" />
            <Text className="pb-4 text-neutral-7">활용한 메뉴가 없어요</Text>
          </Card>
        )}
      </View>
    </View>
  );
}
