import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { RootStackParamList, StackNavProp } from '@/types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

interface NavigateBtnProps {
  navigateTo: keyof RootStackParamList;
}

export default function NavigateBtn({ navigateTo }: NavigateBtnProps) {
  const navigation = useNavigation<StackNavProp>();

  return (
    <TouchableOpacity
      className="mt-2 flex-row items-center self-end px-2 py-3"
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    >
      <Text className="!text-[15px] text-blue-7">더 많은 메뉴 보러가기</Text>
      <Icon name="ChevronRight" size={20} color="blue" />
    </TouchableOpacity>
  );
}
