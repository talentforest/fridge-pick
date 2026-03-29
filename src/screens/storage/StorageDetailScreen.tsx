import { searchKeywordAtom } from '@/atom/storageItemAtom';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import PressableIcon from '@/components/common/PressableIcon';
import ScreenHeader from '@/components/common/ScreenHeader';
import SectionTitle from '@/components/common/SectionTitle';
import CautionIngredientList from '@/components/storage/CautionIngredientList';
import SearchItemSheet from '@/components/storage/SearchItemSheet';
import Storage from '@/components/storage/Storage';
import { storageObj } from '@/constants';
import { useOverlay } from '@/provider/OverlayProvider';
import { RootStackParamList } from '@/types/RootStackParamList';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtom } from 'jotai';
import { View } from 'react-native';

type DetailRouteProp = RouteProp<RootStackParamList, 'StorageDetail'>;
type StackNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function StorageDetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const { id: storageType } = route.params;

  const currStorage = storageObj[storageType];
  const { label } = currStorage;

  const { openSheet } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const openSearchPress = () => {
    openSheet({
      children: <SearchItemSheet storageLabel={currStorage.label} />,
    });
  };

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScreenHeader
        title={label}
        onLeftPress={() => {
          setSearchKeyword('');
          navigation.goBack();
        }}
      />

      <ScrollViewContainer contentContainerClassName="gap-y-20 pt-4">
        {/* 소비기한 임박 */}
        <View className="gap-y-3">
          <SectionTitle title="소비기한 주의 식재료" icon="ClockAlert" />
          <CautionIngredientList storageType={storageType} />
        </View>

        {/* 나의 공간 */}
        <View className="gap-y-1">
          <SectionTitle title="나의 식재료" icon="Refrigerator">
            <View className="flex-row items-center">
              <PressableIcon
                className="h-12 px-2 py-1"
                icon={'Search'}
                iconSize={25}
                onPress={openSearchPress}
                iconColor={searchKeyword === '' ? undefined : 'indigo'}
              />

              <PressableIcon
                className="h-12 px-2 py-1"
                icon="Plus"
                iconSize={30}
                onPress={() => navigation.navigate('AddStorageItem', { id: storageType })}
              />
            </View>
          </SectionTitle>

          <Storage storageType={storageType} />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
