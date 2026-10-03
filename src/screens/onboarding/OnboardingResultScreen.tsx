import { allStorageItemListAtom } from '@/atom/storageAtom';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import FoodImage from '@/components/common/FoodImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { image_onboarding_check } from '@/constants';
import { useHandleNavigate } from '@/hooks';
import { getCurrentlyCompletableFoodList } from '@/utils';
import { useAtomValue } from 'jotai';
import { Image, View } from 'react-native';

export default function OnboardingResultScreen() {
  const allStorageItemList = useAtomValue(allStorageItemListAtom);

  const { goNavigate } = useHandleNavigate();

  const onPress = () => {
    goNavigate('Main');
  };

  const currentlyCompletableFoodList =
    getCurrentlyCompletableFoodList(allStorageItemList);

  const MAX_LENGTH = 4;

  return (
    <SafeAreaViewContainer>
      <ViewContentContainer>
        <View className="flex-1 items-center justify-center gap-y-5 pt-[15%]">
          <Image source={image_onboarding_check} className="size-52" />

          <Text className="font-extrabold text-2xl">냉장고 준비가 끝났어요</Text>

          <View className="items-center gap-y-2">
            {currentlyCompletableFoodList.length > 5 ? (
              <>
                <Text>선택한 식재료들로</Text>
                <Text>이런 메뉴들을 만들 수 있어요!</Text>
              </>
            ) : (
              <>
                <Text>식재료를 더 등록하면</Text>
                <Text>다양한 메뉴를 추천받을 수 있어요!</Text>
              </>
            )}
          </View>

          {currentlyCompletableFoodList.length >= 4 ? (
            <View className="w-full gap-y-2">
              <Card className="gap-y-4 !rounded-3xl px-5 !pb-5 !pt-6">
                <View className="flex-row justify-between gap-x-3 px-2">
                  <Text className="font-extrabold !text-[13px]">
                    🍳 지금 만들 수 있는 메뉴
                  </Text>
                  <Text className="pr-1 font-heavy text-lg text-indigo-5">
                    {currentlyCompletableFoodList.length}개
                  </Text>
                </View>

                <View className="w-full flex-row flex-wrap gap-x-2">
                  {currentlyCompletableFoodList.slice(0, MAX_LENGTH).map((item) => (
                    <FoodImage
                      key={item.id}
                      selectableItem={item}
                      imageSize={55}
                      className="aspect-square w-[18%] items-center justify-center rounded-full bg-neutral-1"
                    />
                  ))}
                  {currentlyCompletableFoodList.length > MAX_LENGTH ? (
                    <View className="aspect-square w-[18%] items-center justify-center rounded-full bg-blue-1">
                      <Text className="font-heavy !text-[13px] text-blue-7">
                        + {currentlyCompletableFoodList.length - MAX_LENGTH}개
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </Card>
            </View>
          ) : (
            <></>
          )}
        </View>

        <Text className="mb-3 mt-10 text-center font-extrabold text-base">
          그럼, 이제 시작해볼까요?
        </Text>
        <SquareBtn
          name="프리지픽 시작하기"
          className="mb-10"
          tailIconName="ChevronRight"
          onPress={onPress}
        />
      </ViewContentContainer>
    </SafeAreaViewContainer>
  );
}
