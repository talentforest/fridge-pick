import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { useHandleNavigate } from '@/hooks';
import { RootStackParamList } from '@/types/RootStackParamList';

interface NavigateBtnProps {
  navigateTo: keyof RootStackParamList;
}

export default function NavigateBtn({ navigateTo }: NavigateBtnProps) {
  const { goNavigate } = useHandleNavigate();

  return (
    <TouchableOpacity
      className="mt-2 flex-row items-center self-end px-2 py-3"
      onPress={() => goNavigate(navigateTo)}
    >
      <Text className="!text-[15px] text-neutral-7">더 많은 메뉴 보러가기</Text>
      <Icon name="ChevronRight" size={18} color="neutral" />
    </TouchableOpacity>
  );
}
