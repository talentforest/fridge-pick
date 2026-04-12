import { searchKeywordAtom } from '@/atom/storageItemAtom';
import { storageObj } from '@/constants';
import { useOverlay } from '@/hooks/common/useOverlay';
import { RootStackParamList } from '@/types/RootStackParamList';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtom } from 'jotai';
import { View } from 'react-native';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ScreenHeader from '@/components/common/ScreenHeader';
import SectionTitle from '@/components/common/SectionTitle';
import CautionIngredientList from '@/components/storage/CautionIngredientList';
import SearchItemSheet from '@/components/storage/SearchItemSheet';
import Storage from '@/components/storage/Storage';
import { useEffect } from 'react';
import StorageItemSheet from '@/components/storage/StorageItemSheet';
import Icon from '@/components/common/ui/Icon';

type DetailRouteProp = RouteProp<RootStackParamList, 'StorageDetailScreen'>;
type StackNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function StorageDetailScreen() {
  const {
    params: { id: storageType },
  } = useRoute<DetailRouteProp>();

  const { label: storageLabel } = storageObj[storageType];

  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const { openSheet, closeSheet } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const isFocused = useIsFocused();

  const onSearchPress = () => {
    openSheet({
      render: () => <SearchItemSheet storageLabel={storageLabel} />,
    });
  };

  const onItemPress = (storageItemId: string) => {
    openSheet({
      enableDynamicSizing: false,
      keyboardBehavior: 'extend',
      snapPoints: [450, 670],
      hasDim: true,
      render: () => <StorageItemSheet storageItemId={storageItemId} />,
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
  }, [isFocused]);

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScreenHeader title={storageLabel} onLeftPress={headerLeftPress} />

      <ScrollViewContainer contentContainerClassName="gap-y-20 pt-4">
        {/* 소비기한 임박 */}
        <View className="gap-y-3">
          <SectionTitle title="소비기한 주의 식재료" icon="ClockAlert" />
          <CautionIngredientList storageType={storageType} openItemPress={onItemPress} />
        </View>

        {/* 나의 공간 */}
        <View className="gap-y-1">
          <SectionTitle title="나의 식재료" icon="Refrigerator">
            <View className="flex-row items-center">
              <Icon
                name="Search"
                className="h-12 w-12 items-center justify-center"
                size={22}
                onPress={onSearchPress}
                color={searchKeyword === '' ? 'text' : 'blue'}
              />
              <Icon
                name="Plus"
                className="h-12 w-12 items-center justify-center"
                size={27}
                color="text"
                onPress={() =>
                  navigation.navigate('AddStorageItemScreen', { id: storageType })
                }
              />
            </View>
          </SectionTitle>

          <Storage storageType={storageType} openItemPress={onItemPress} />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
