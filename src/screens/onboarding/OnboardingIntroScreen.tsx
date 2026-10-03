import { Image, ImageSourcePropType, View } from 'react-native';
import Text from '@/components/common/ui/Text';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import { image_onboarding1, image_onboarding2, image_onboarding3 } from '@/constants';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import SelectBtn from '@/components/common/SelectBtn';
import { useHandleNavigate } from '@/hooks';
import SquareBtn from '@/components/common/SquareBtn';

export default function OnboardingIntroScreen() {
  const dataList: {
    step: number;
    label: string;
    description: string;
    imageName: ImageSourcePropType;
  }[] = [
    {
      step: 1,
      label: '우리집 식재료를, 한눈에 확인해요',
      description:
        '냉동 ・ 냉장 ・ 실온 식재료를, 한곳에서 관리하고 바로 확인할 수 있어요.',
      imageName: image_onboarding1,
    },
    {
      step: 2,
      label: '잊고 있던 식재료도, 놓치지 않게',
      description: '소비기한이 가까워지면 먼저 알려드려요.',
      imageName: image_onboarding2,
    },
    {
      step: 3,
      label: '지금 있는 재료로, 오늘 뭐 먹을지 찾아봐요',
      description: '보유한 식재료를 기준으로, 만들 수 있는 메뉴를 추천해드려요.',
      imageName: image_onboarding3,
    },
  ];

  const { replaceNavigate } = useHandleNavigate();

  const replaceNextScreen = () => replaceNavigate('OnboardingIngredientScreen');

  return (
    <SafeAreaViewContainer>
      <ViewContentContainer className="!px-0 !py-0">
        <SelectBtn
          name="건너뛰기"
          className="ml-auto mt-5 border-0 !py-2 px-8"
          textClassName="!text-neutral-7 font-heavy"
          onPress={replaceNextScreen}
        />

        <View className="mb-10 flex-1 items-center justify-between">
          <View className="flex-1">
            <CarouselContainer
              data={dataList}
              itemWidth={1}
              spacing={0}
              hasPagination
              infinite={false}
              requiredMinimum={2}
              paginationDotSize="md"
              paginationDotColor="indigo"
              keyExtractor={(item, index) => `${item.step}:${index}`}
              renderItem={({ item: { imageName, step, label, description } }) => (
                <View key={step} className="items-center justify-center pb-10 pt-3">
                  <Image source={imageName} className="aspect-square h-[45vh]" />

                  <View className="items-center justify-center gap-y-2">
                    {label.split(',').map((text) => (
                      <Text key={text} className="text-center font-extrabold text-2xl">
                        {text}
                      </Text>
                    ))}
                  </View>
                  <View className="mt-6 items-center justify-center gap-y-1">
                    {description.split(', ').map((text) => (
                      <Text
                        key={text}
                        className="text-center font-extrabold !text-[15px] text-neutral-7"
                      >
                        {text}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
              navigationBtnChildren={(handleDirection, currentIndex) => (
                <SquareBtn
                  name={currentIndex === 2 ? '다음 단계로 넘어가기' : '다음'}
                  className="mx-6 mt-[10%] !py-6"
                  tailIconName="ChevronRight"
                  textClassName="!text-[15px]"
                  onPress={() => {
                    if (currentIndex === 2) {
                      return replaceNextScreen();
                    }
                    handleDirection('next');
                  }}
                />
              )}
            />
          </View>
        </View>
      </ViewContentContainer>
    </SafeAreaViewContainer>
  );
}
