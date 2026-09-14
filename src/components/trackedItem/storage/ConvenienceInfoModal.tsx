import ModalHeader from '@/components/common/header/ModalHeader';
import Text from '@/components/common/ui/Text';
import {
  image_frozen,
  image_instant,
  image_mealkit,
  image_ready_to_eat,
} from '@/constants';
import { Image, View } from 'react-native';

export default function ConvenienceInfoModal() {
  return (
    <View className="gap-y-3">
      <ModalHeader title="간편식품이란?" hasX />
      <View className="gap-y-2">
        <View className="mb-3 mt-2 gap-y-2">
          <Text className="text-neutral-7">
            <Text className="font-extrabold">
              완성되거나 간편하게 조리할 수 있는 형태
            </Text>
          </Text>
          <Text className="text-neutral-7">로 구매한 식품이에요.</Text>
        </View>

        <View className="w-full flex-row items-center gap-x-3">
          <View className="flex-1 border-t border-neutral-3" />
          <Text className="font-extrabold !text-[13px] text-neutral-5">예시</Text>
          <View className="flex-1 border-t border-neutral-3" />
        </View>

        <View className="w-full flex-row items-center justify-center gap-2">
          <View className="aspect-square w-[23%] items-center justify-center gap-y-1 rounded-full bg-card p-3">
            <Image source={image_mealkit} className="size-12" />
            <Text className="!text-[10px] text-neutral-7">밀키트</Text>
          </View>

          <View className="aspect-square w-[23%] items-center justify-center gap-y-1 rounded-full bg-card p-3">
            <Image source={image_frozen} className="size-12" />
            <Text className="!text-[10px] text-neutral-7">레토르트</Text>
          </View>

          <View className="aspect-square w-[23%] items-center justify-center gap-y-1 rounded-full bg-card p-3">
            <Image source={image_instant} className="size-12" />
            <Text className="!text-[10px] text-neutral-7">냉동식품</Text>
          </View>

          <View className="aspect-square w-[23%] items-center justify-center gap-y-1 rounded-full bg-card p-3">
            <Image source={image_ready_to_eat} className="size-12" />
            <Text className="!text-[10px] text-neutral-7">즉석식품</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
