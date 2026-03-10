import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/ScreenHeader';
import SectionTitle from '@/components/common/SectionTitle';
import TextInput from '@/components/common/ui/TextInput';
import CautionIngredientList from '@/components/storage/CautionIngredientList';
import Storage from '@/components/storage/Storage';
import { storageObj } from '@/constants';
import { useSheet } from '@/provider/SheetProvider';
import { RootStackParamList } from '@/types/RootStackParamList';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

type DetailRouteProp = RouteProp<RootStackParamList, 'StorageDetail'>;

export default function StorageDetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const { id: storageType } = route.params;

  const currStorage = storageObj[storageType];
  const { label } = currStorage;

  const { closeSheet, isOpen } = useSheet();

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScreenHeader
        title={label}
        onLeftPress={isOpen ? closeSheet : undefined}
      />

      <ScrollView
        contentContainerClassName="gap-y-20 pt-6 pb-32"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* 소비기한 임박 */}
        <View className="gap-y-3">
          <SectionTitle
            title="소비기한 주의 식재료"
            className="!px-8 !text-lg"
            icon="ClockAlert"
          />
          <CautionIngredientList storageType={storageType} />
        </View>

        {/* 나의 공간 */}
        <View className="gap-y-3 px-6">
          <SectionTitle
            title={`나의 식재료`}
            className="!text-lg"
            icon="Refrigerator"
          />

          <View className="gap-y-1">
            <TextInput
              className={`rounded-xl border border-border bg-white`}
              placeholder="찾으시는 식료품을 작성해주세요."
            />
            {/* <View className="mb-1 flex-row gap-x-2">
              <StorageItemInfo ingredient="apple_mango" type="favorite" />
              <StorageItemInfo ingredient="asparagus" type="empty" />
              <StorageItemInfo ingredient="almond" type="recently" />
            </View> */}
          </View>

          <Storage storageType={storageType} />
        </View>
      </ScrollView>
    </SafeAreaViewContainer>
  );
}
