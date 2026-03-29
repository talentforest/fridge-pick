import Text from '@/components/common/ui/Text';
import { Pressable, View } from 'react-native';

export default function AlertModal({
  title,
  message,
  onConfirm,
  onCancel,
}: {
  title: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <View>
      <View className="px-6 pt-6">
        <Text className="mb-4 font-bold text-lg">{title}</Text>

        {message && <Text className="leading-7 text-gray-600">{message}</Text>}
      </View>

      <View className="flex-row justify-end p-2">
        <Pressable onPress={onCancel} className="p-4">
          <Text className="text-gray-500">취소</Text>
        </Pressable>

        <Pressable onPress={onConfirm} className="p-4">
          <Text className="text-blue-600">확인</Text>
        </Pressable>
      </View>
    </View>
  );
}
