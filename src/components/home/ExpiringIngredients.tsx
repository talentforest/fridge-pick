import { allStorageItemListAtom } from '@/atom/storageItemAtom';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import SectionTitle from '@/components/common/SectionTitle';
import CautionStorageItem from '@/components/storage/CautionStorageItem';
import { getExpiredStorageItemList } from '@/utils';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { View } from 'react-native';

export default function ExpiringIngredients() {
  const allStorageItemList = useAtomValue(allStorageItemListAtom);

  const expiredStorageItemList = useMemo(() => {
    return getExpiredStorageItemList(allStorageItemList);
  }, [allStorageItemList]);

  return (
    <View className="gap-y-3">
      <SectionTitle title="지금 써야할 재료" icon="ClockAlert" />

      <FullBleedSection>
        <CarouselContainer
          data={expiredStorageItemList}
          initialIndex={expiredStorageItemList.length}
          itemWidth={0.31}
          hasNavigation
          centerFocus
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index, isCurrIndex }) => (
            <CautionStorageItem item={item} index={index} isCurrIndex={isCurrIndex} />
          )}
        />
      </FullBleedSection>
    </View>
  );
}
