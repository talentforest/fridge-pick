import { storageObj } from '@/constants';
import { useOverlay, useHandleNavigate } from '@/hooks';
import { RootStackParamList } from '@/types/RootStackParamList';
import { RouteProp, useIsFocused, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { EnrichedStorageItem } from '@/types/storage';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import SectionTitle from '@/components/common/header/SectionTitle';
import Icon from '@/components/common/ui/Icon';
import StorageItemSheet from '@/components/trackedItem/storage/StorageItemSheet';
import Storage from '@/components/trackedItem/storage/Storage';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import SectionContainer from '@/components/common/container/SectionContainer';

type DetailRouteProp = RouteProp<RootStackParamList, 'StorageDetailScreen'>;

export default function StorageDetailScreen() {
  const {
    params: { id: storageType },
  } = useRoute<DetailRouteProp>();

  const { label: storageLabel } = storageObj[storageType];

  const { openSheet, closeSheet } = useOverlay();

  const { goBack, goNavigate } = useHandleNavigate();

  const isFocused = useIsFocused();

  const onItemPress = (item: EnrichedStorageItem) => {
    openSheet({
      keyboardBehavior: 'extend',
      render: () => <StorageItemSheet storageItem={item} />,
    });
  };

  const headerLeftPress = () => {
    goBack();
  };

  useEffect(() => {
    if (!isFocused) {
      closeSheet();
    }
    return () => {
      closeSheet();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <SafeAreaViewContainer>
      <ScreenHeader title={storageLabel} onLeftPress={headerLeftPress} />

      <ScrollViewContainer contentContainerClassName="pt-4">
        {/* 소비기한 임박 */}
        <SectionContainer>
          <SectionTitle icon="ClockAlert" title="가장 먼저 관리해야해요" color="red" />
          <CautionStorageItemList isGridType storageType={storageType} type="caution" />
        </SectionContainer>

        {/* 나의 공간 */}
        <SectionContainer>
          <SectionTitle title={`나의 ${storageLabel} 식재료`}>
            <Icon
              name="Plus"
              color="blue"
              size={24}
              onPress={() => goNavigate('AddStorageItemScreen', { id: storageType })}
            />
          </SectionTitle>

          {/* 스토리지 박스 */}
          <Storage storageType={storageType} openItemPress={onItemPress} />
        </SectionContainer>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
