import { useHandleNavigate } from '@/hooks';
import { View } from 'react-native';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import HomeHeader from '@/components/home/HomeHeader';
import MyPickList from '@/components/home/MyPickList';
import SpaceGrid from '@/components/home/SpaceGrid';
import SectionTitle from '@/components/common/header/SectionTitle';
import ThisMonthRecord from '@/components/home/ThisMonthRecord';
import InsightCard from '@/components/home/InsightCard';
import SectionContainer from '@/components/common/container/SectionContainer';
import QuickAddFoodBtn from '@/components/home/QuickAddFoodBtn';
import { useAtomValue } from 'jotai';
import { storageItemListByExpirationStatusAtom } from '@/atom/storageAtom';
import TodayFood from '@/components/home/TodayFood';
import Text from '@/components/common/ui/Text';

// ① 나의 보관함 — 전체 상태
// ② 관리가 필요한 식재료 — 지금 처리할 것
// ③ 오늘의 현황 — 오늘 먹을 메뉴 + 장보기
// ④ 나의 픽 현황 — 내 선호 식재료/메뉴가 현재 얼마나 충족돼 있는지
// ⑤ 이번 달 기록 — 소비/폐기/식사 + 의미 있는 변화 한 줄

export default function HomeScreen() {
  const { goNavigate } = useHandleNavigate();

  const storageItemListByStatus = useAtomValue(
    storageItemListByExpirationStatusAtom('expiredSoon'),
  );

  const goMyPickScreen = () => goNavigate('MyPickScreen', { type: 'ingredient' });

  return (
    <SafeAreaViewContainer>
      <ScrollViewContainer className="">
        <View>
          <HomeHeader />
          {/* 이번주 소비 추천 섹션 추가 */}
          <View className="mb-4 mt-2 gap-y-1.5 pl-2">
            <Text className="font-extrabold text-lg">안녕하세요, 엘리님 👋</Text>
            <Text className="font-extrabold text-primary">
              오늘도 든든히 챙겨먹는 하루되세요!
            </Text>
          </View>

          <SpaceGrid />
        </View>

        <SectionContainer>
          <TodayFood type="dashboard" hasHeader />
        </SectionContainer>

        {storageItemListByStatus.length > 0 ? (
          <CautionStorageItemList title="소비기한이 임박했어요!" type="expiredSoon" />
        ) : (
          <></>
        )}

        <InsightCard />

        <SectionContainer>
          <SectionTitle
            title="나의픽"
            icon="Heart"
            hasShowAllBtn
            onShowAllPress={goMyPickScreen}
          />
          <MyPickList />
        </SectionContainer>

        <SectionContainer>
          <SectionTitle title="이번달 기록" icon="ChartColumnBig" />
          <ThisMonthRecord />
        </SectionContainer>
      </ScrollViewContainer>

      <QuickAddFoodBtn />
    </SafeAreaViewContainer>
  );
}
