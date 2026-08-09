import { useOverlay } from '@/hooks';
import { StackNavProp } from '@/types/RootStackParamList';
import { StorageItemWithExpiration } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import Icon from '@/components/common/ui/Icon';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import HomeHeader from '@/components/home/HomeHeader';
import RecommendedMenu from '@/components/home/RecommendedMenu';
import TodayMenu from '@/components/home/TodayMenu';
import CautionStorageItemSheet from '@/components/trackedItem/storage/CautionStorageItemSheet';
import QuickAddStorageItemSheet from '@/components/trackedItem/storage/QuickAddStorageItemSheet';
import MyPickList from '@/components/home/MyPickList';
import SpaceGrid from '@/components/home/SpaceGrid';

// ① 나의 보관함 — 전체 상태
// ② 관리가 필요한 식재료 — 지금 처리할 것
// ③ 오늘의 현황 — 오늘 먹을 메뉴 + 장보기
// ④ 나의 픽 현황 — 내 선호 식재료/메뉴가 현재 얼마나 충족돼 있는지
// ⑤ 이번 달 기록 — 소비/폐기/식사 + 의미 있는 변화 한 줄

export default function HomeScreen() {
  const { openSheet, closeSheet } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const onCautionStorageItemPress = (storageItem: StorageItemWithExpiration) => {
    const id = storageItem.storageItem.storage.type;

    openSheet({
      render: () => (
        <CautionStorageItemSheet
          storageItemId={storageItem.storageItem.id}
          onNavigatePress={() => {
            closeSheet();
            navigation.navigate('StorageDetailScreen', { id });
          }}
        />
      ),
    });
  };

  const onPlusPress = () => {
    openSheet({
      enableDynamicSizing: false,
      snapPoints: [520],
      keyboardBehavior: 'extend',
      render: () => <QuickAddStorageItemSheet />,
    });
  };

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScrollViewContainer>
        <View>
          <HomeHeader />
          {/* TODO: 현재 상태 자체가 아니라 데이터를 해석해서 얻은 정보 */}
          <SpaceGrid />
        </View>

        <CautionStorageItemList
          type="expiredSoon"
          onItemPress={onCautionStorageItemPress}
        />

        <MyPickList />

        {/* TODO: 오늘 먹을 메뉴 "요약" 정말 간단하게 요약된걸로 */}
        <TodayMenu hasHeader />

        <RecommendedMenu />
      </ScrollViewContainer>

      <Icon
        name="Plus"
        hasBgColor
        strokeWidth={2.8}
        color="lightestGray"
        onPress={onPlusPress}
        size={28}
        className="absolute bottom-6 right-6 !rounded-full !bg-blue-7 p-4"
      />
    </SafeAreaViewContainer>
  );
}
