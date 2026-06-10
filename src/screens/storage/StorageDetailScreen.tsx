import { searchKeywordAtom } from '@/atom/storageItemAtom';
import { storageObj } from '@/constants';
import { useOverlay } from '@/hooks';
import { RootStackParamList, StackNavProp } from '@/types/RootStackParamList';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useSetAtom } from 'jotai';
import { View } from 'react-native';
import { useEffect } from 'react';
import { EnrichStorageItem } from '@/types/storage';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import SectionTitle from '@/components/common/header/SectionTitle';
import Icon from '@/components/common/ui/Icon';
import StorageItemSheet from '@/components/trackedItem/storage/StorageItemSheet';
import Storage from '@/components/trackedItem/storage/Storage';
import CautionIngredientList from '@/components/home/CautionIngredientList';

type DetailRouteProp = RouteProp<RootStackParamList, 'StorageDetailScreen'>;

export default function StorageDetailScreen() {
  const {
    params: { id: storageType },
  } = useRoute<DetailRouteProp>();

  const { label: storageLabel } = storageObj[storageType];

  const setSearchKeyword = useSetAtom(searchKeywordAtom);

  const { openSheet, closeSheet } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const isFocused = useIsFocused();

  const onItemPress = (item: EnrichStorageItem) => {
    openSheet({
      enableDynamicSizing: false,
      keyboardBehavior: 'extend',
      snapPoints: [450, 700],
      hasDim: true,
      render: () => <StorageItemSheet storageItem={item} />,
    });
  };

  const headerLeftPress = () => {
    setSearchKeyword('');
    navigation.goBack();
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

      <ScrollViewContainer contentContainerClassName="gap-y-20 pt-4">
        {/* 소비기한 임박 */}
        <CautionIngredientList
          title="소비기한 주의 식재료"
          isGridType
          storageType={storageType}
          onItemPress={onItemPress}
        />

        {/* 나의 공간 */}
        <View className="gap-y-1">
          <SectionTitle
            title={`나의 ${storageLabel} 식재료`}
            icon={storageLabel === '실온보관' ? 'ShelvingUnit' : 'Refrigerator'}
          >
            <View className="flex-row items-center gap-x-2">
              <Icon
                name="Plus"
                className="h-10 w-10 items-center justify-center"
                size={24}
                color="text"
                onPress={() =>
                  navigation.navigate('AddStorageItemScreen', { id: storageType })
                }
              />
            </View>
          </SectionTitle>

          {/* 스토리지 박스 */}
          <Storage storageType={storageType} openItemPress={onItemPress} />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
