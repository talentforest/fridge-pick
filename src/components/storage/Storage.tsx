import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import Card from '@/components/common/ui/Card';
import CategoryLabel from '@/components/storage/CategoryLabel';
import StorageItem from '@/components/storage/StorageItem';
import StorageItemSheet from '@/components/storage/StorageItemSheet';
import { storageObj } from '@/constants';
import { useStorageItemList } from '@/hooks';
import { useSheet } from '@/provider/SheetProvider';
import { StorageSideId, StorageTypeId } from '@/types/storage';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

interface StorageProps {
  storageType: StorageTypeId;
}

const SETTING_SIDE = false;

export default function Storage({ storageType }: StorageProps) {
  const [currSide, setCurrSide] = useState<StorageSideId>('inner');

  const storage = useMemo(() => {
    return {
      type: storageType,
      side: currSide,
      section: '1' as const,
    };
  }, [storageType, currSide]);

  const { openSheet } = useSheet();

  const {
    sideList,
    itemCountBySide,
    groupedItemsByCategory, //
  } = useStorageItemList({ storage });

  const { label, color } = storageObj[storageType];

  return (
    <Card
      className={`min-h-[50vh] flex-1 gap-y-6 rounded-2xl !border-0 !bg-transparent !p-0`}
    >
      {SETTING_SIDE && (
        <View className="h-14 flex-row gap-x-3">
          {sideList.map(({ id, label: sideLabel }) => {
            return (
              <PressableSquareBtn
                key={id}
                text={`${label} ${sideLabel}  ${itemCountBySide[id] ?? 0}개`}
                onPress={() => setCurrSide(id)}
                isInActive={!(id === currSide)}
              />
            );
          })}
        </View>
      )}

      <ScrollView
        nestedScrollEnabled
        className="flex-1"
        contentContainerClassName="flex-1"
      >
        <View className="flex-1 gap-y-3">
          {groupedItemsByCategory.map(({ category, items }, index) => (
            <View
              key={category.id}
              className={`flex-1 gap-y-3 border border-border bg-white p-4 ${index === 0 ? 'rounded-t-2xl' : ''} ${index === groupedItemsByCategory.length - 1 ? 'rounded-b-2xl' : ''}`}
            >
              <CategoryLabel category={category} color={color} />

              <View
                className={`flex-1 flex-row flex-wrap items-center justify-between gap-2`}
              >
                {/* 식재료 리스트 */}
                {items.map((item, index) => (
                  <Pressable
                    key={item.id}
                    onPress={() =>
                      openSheet(() => <StorageItemSheet storageItem={item} />)
                    }
                    className={`${items.length === index + 1 ? 'mr-auto ' : ''}`}
                  >
                    <StorageItem item={item} />
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Card>
  );
}
