import { useSetAtom } from 'jotai';
import {
  openSheetAtom,
  closeSheetAtom,
  openModalAtom,
  closeModalAtom,
  openDatePickerAtom,
  closeDatePickerAtom,
  alertAtom,
  confirmAtom,
  expandSheetAtom,
  shrinkSheetAtom,
} from '@/atom/overlayAtom';
import Toast from 'react-native-toast-message';

export const useOverlay = () => {
  const openSheet = useSetAtom(openSheetAtom);
  const closeSheet = useSetAtom(closeSheetAtom);

  const openModal = useSetAtom(openModalAtom);
  const closeModal = useSetAtom(closeModalAtom);

  const openDatePicker = useSetAtom(openDatePickerAtom);
  const closeDatePicker = useSetAtom(closeDatePickerAtom);

  const alert = useSetAtom(alertAtom);
  const confirm = useSetAtom(confirmAtom);

  const expandSheet = useSetAtom(expandSheetAtom);
  const shrinkSheet = useSetAtom(shrinkSheetAtom);

  const showToast = Toast.show;

  return {
    showToast,

    openSheet,
    closeSheet,

    openModal,
    closeModal,

    openDatePicker,
    closeDatePicker,

    expandSheet,
    shrinkSheet,

    alert,
    confirm,
  };
};
