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
} from '@/atom/overlayAtom';

export function useOverlay() {
  const openSheet = useSetAtom(openSheetAtom);
  const closeSheet = useSetAtom(closeSheetAtom);

  const openModal = useSetAtom(openModalAtom);
  const closeModal = useSetAtom(closeModalAtom);

  const openDatePicker = useSetAtom(openDatePickerAtom);
  const closeDatePicker = useSetAtom(closeDatePickerAtom);

  const alert = useSetAtom(alertAtom);
  const confirm = useSetAtom(confirmAtom);

  return {
    openSheet,
    closeSheet,

    openModal,
    closeModal,

    openDatePicker,
    closeDatePicker,

    alert,
    confirm,
  };
}
