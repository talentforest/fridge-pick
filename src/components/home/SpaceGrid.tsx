import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { Image, View } from 'react-native';

export default function SpaceGrid() {
  return (
    <View className="gap-y-3">
      <View className="flex-row gap-x-3">
        <Card className="h-60 items-center gap-y-3">
          <Text className="text-neutral-700">나의 냉장고 정보</Text>
          <View className="w-full flex-1 items-center justify-center p-3">
            <View className="bg-red-500 ml-12 size-2.5 rounded-xl" />
            <Image
              source={require('../../../assets/images/fridge.png')}
              className="h-full w-full"
            />
          </View>
        </Card>

        <View className="h-60 flex-1 gap-y-3">
          {[
            { label: '냉동실', total: 22 },
            { label: '냉장실', total: 15 },
          ].map(({ label, total }) => (
            <Card key={label} className="flex-1">
              <View className="flex-row justify-between">
                <Text className="text-neutral-700 mt-0.5">{label}</Text>
                <Text className="!text-2xl font-extrabold">{total}</Text>
              </View>
            </Card>
          ))}
        </View>
      </View>

      <View className="flex-row gap-x-3">
        {[
          { label: '실온보관', total: 40 },
          { label: '장보기 목록', total: '08' },
        ].map(({ label, total }) => (
          <Card key={label} className="h-28 flex-1">
            <View className="flex-row justify-between">
              <Text className="text-neutral-700 mt-0.5">{label}</Text>
              <Text className="!text-2xl font-extrabold">{total}</Text>
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
}
