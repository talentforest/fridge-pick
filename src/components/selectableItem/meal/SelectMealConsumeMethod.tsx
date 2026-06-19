import ModalHeader from '@/components/common/header/ModalHeader';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

type SelectMealConsumeMethodProps = {
  onAddTodayMealPress: () => void;
};

export default function SelectMealConsumeMethod({
  onAddTodayMealPress,
}: SelectMealConsumeMethodProps) {
  return (
    <View className="pt-3">
      <ModalHeader title={`메뉴를 어떤 방식으로 드시나요?`} hasX={false} />

      <View className="mt-4 gap-y-3">
        {/* <View className="flex-row justify-between gap-x-3"> */}
        <TouchableOpacity className="gap-y-3 rounded-2xl bg-green-3 p-3.5">
          <Text className="text-lg text-green-9">🥡 간편식</Text>
          <Text className="pb-1 pl-1 leading-5 text-green-7">
            밀키트·냉동·즉석식품으로 간편하게 조리해서 먹어요
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="gap-y-3 rounded-2xl bg-indigo-3 p-3.5">
          <Text className="text-lg text-indigo-5">🛵 배달·포장했어요</Text>
          <Text className="pb-1 pl-1">주문하거나 포장한 음식으로 먹어요</Text>
        </TouchableOpacity>
        {/* </View> */}

        <TouchableOpacity
          className="gap-y-2 rounded-2xl bg-blue-3 p-3.5"
          onPress={onAddTodayMealPress}
        >
          <Text className="text-lg text-blue-9">🍳 직접 요리해요</Text>
          <Text className="pb-1 pl-1 text-blue-7">재료를 확인하고 직접 만들어요</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="gap-y-2 rounded-2xl bg-yellow-3 p-3.5"
          onPress={onAddTodayMealPress}
        >
          <Text className="text-lg text-blue-9">🍳 완제품이에요</Text>
          <Text className="pb-1 pl-1 text-blue-7">재료를 확인하고 직접 만들어요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
