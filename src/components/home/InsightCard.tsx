import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { allFoodList } from '@/constants';
import { useStorageItemList } from '@/hooks';
import { getInsightData, getTopInsight } from '@/utils';
import { Image, useColorScheme, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colorTokens } from '@/theme/color';
import SquareBtn from '@/components/common/SquareBtn';

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

export default function InsightCard() {
  const { allStorageItemList, expiredStorageItemList } = useStorageItemList();

  const insightProps = getTopInsight({
    expiredCount: expiredStorageItemList.length,
    allFoodList,
    allStorageItemList,
  });

  const textColorMap = {
    red: '!text-red-7',
    green: '!text-green-7',
    yellow: '!text-orange-7',
    indigo: '!text-indigo-7',
    blue: '!text-blue-7',
    neutral: '!text-neutral-5',
  } as const;

  const { title, color, btn, description, image, isReverse } =
    getInsightData(insightProps);

  const colorScheme = useColorScheme();

  return (
    <LinearGradient
      colors={[
        colorTokens[colorScheme ?? 'light']['neutral'][3],
        colorTokens[colorScheme ?? 'light'][color][1],
      ]}
      start={{ x: 0, y: 0 }}
      style={{ borderRadius: 20 }}
      end={{ x: 1, y: 0 }}
    >
      <Card
        className={`items-center gap-x-1 !bg-transparent !py-6 ${isReverse ? 'flex-row-reverse !pr-7' : 'flex-row !pl-7'}`}
      >
        <View className="flex-1 items-start justify-center gap-y-3">
          <View className="gap-y-3">
            <View className="gap-y-1.5">
              {title.map(({ text, highlight }) => (
                <Text
                  key={text}
                  className={`!text-[17px] ${highlight ? `font-heavy ${textColorMap[color]}` : 'font-extrabold'}`}
                >
                  {text}{' '}
                </Text>
              ))}
            </View>

            <View className="flex-row flex-wrap gap-y-1.5">
              {description.map(({ text, highlight }) => (
                <Text
                  key={text}
                  className={`!text-[13px] leading-4 text-neutral-7 ${highlight ? 'font-extrabold' : ''}`}
                >
                  {text}{' '}
                </Text>
              ))}
            </View>
          </View>

          {btn?.name ? (
            <SquareBtn
              name={btn.name}
              tailIconName="ChevronRight"
              iconSize={16}
              bgColor={color}
              className="mt-2 !rounded-full !py-3"
              textClassName="!text-[13px] ml-1"
              onPress={() => {}}
            />
          ) : (
            <></>
          )}
        </View>

        <Image source={image} className="size-40" />
      </Card>
    </LinearGradient>
  );
}
