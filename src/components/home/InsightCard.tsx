import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { getInsightData, InsightDataProps } from '@/utils';
import { View } from 'react-native';

/** 
  🚨 긴급 관리
    - 소비기한이 지난 식재료가 있어요.

  🛒 장보기
  - 우유만 사면 메뉴 8개 증가
  - 우유+양파만 사면 메뉴 18개 증가
  - 나의 픽 메뉴 완성
  - 자주 만드는 메뉴 완성
  - 장보기 목록 구매 시 메뉴 증가

  🍽️ 메뉴 활용
  - 지금 만들 수 있는 메뉴
  - 임박 식재료 활용 메뉴

  📊 통계
  - 이번 달 소비
  - 지난달 대비 소비 증가
  - 폐기 감소
  - 가장 자주 먹는 식재료
  - 가장 많이 만든 메뉴
  - 연속 소비 기록
*/

export default function InsightCard(props: InsightDataProps) {
  const bgColorMap = {
    red: '!bg-red-1',
    green: '!bg-green-1',
    yellow: '!bg-orange-1',
    indigo: '!bg-indigo-1',
    blue: '!bg-blue-1',
  };

  const { icon, title, color, description } = getInsightData(props);

  return (
    <Card className={`flex-row items-center !px-5 !py-5 ${bgColorMap[color]}`}>
      <Icon name={icon} color={color} size={22} />

      <View className="ml-3.5 flex-1 gap-y-2">
        <Text className="font-extrabold">{title}</Text>
        <Text className="text-sm">{description}</Text>
      </View>

      <Icon name="ChevronRight" size={20} />
    </Card>
  );
}
