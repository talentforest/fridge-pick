import { expiredItemListByStorageAtom } from '@/atom/storageItemAtom';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import SectionTitle from '@/components/common/SectionTitle';
import CautionStorageItem from '@/components/storage/CautionStorageItem';
import { useAtomValue } from 'jotai';
import { View } from 'react-native';

export default function ExpiringIngredients() {
  const expiredStorageItemList = useAtomValue(expiredItemListByStorageAtom);

  return (
    <View className="gap-y-3">
      <SectionTitle title="지금 써야할 재료" icon="ClockAlert" />

      <FullBleedSection>
        <CarouselContainer
          data={expiredStorageItemList}
          initialIndex={expiredStorageItemList.length}
          itemWidth={0.27}
          hasNavigation
          spacing={6}
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
