import { RootStackParamList, StackNavProp } from '@/types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

export const useHandleNavigate = () => {
  const navigation = useNavigation<StackNavProp>();

  const goNavigate = (
    stack: keyof RootStackParamList,
    props?: RootStackParamList[keyof RootStackParamList],
  ) => {
    navigation.navigate(stack, props);
  };

  const goBack = () => navigation.goBack();

  const replaceNavigate = (
    stack: keyof RootStackParamList,
    props?: RootStackParamList[keyof RootStackParamList],
  ) => {
    navigation.replace(stack, props);
  };

  return {
    goNavigate,
    goBack,
    replaceNavigate,
  };
};
