import { useSetAtom } from 'jotai';
import {
  openSheetAtom,
  closeSheetAtom,
  openModalAtom,
  closeModalAtom,
  openDatePickerAtom,
  closeDatePickerAtom,
} from '@/atom/overlayAtom';

export function useOverlay() {
  const openSheet = useSetAtom(openSheetAtom);
  const closeSheet = useSetAtom(closeSheetAtom);

  const openModal = useSetAtom(openModalAtom);
  const closeModal = useSetAtom(closeModalAtom);

  const openDatePicker = useSetAtom(openDatePickerAtom);
  const closeDatePicker = useSetAtom(closeDatePickerAtom);

  return {
    openSheet,
    closeSheet,

    openModal,
    closeModal,

    openDatePicker,
    closeDatePicker,
  };
}
