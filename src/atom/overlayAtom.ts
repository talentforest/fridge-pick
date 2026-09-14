import { atom } from 'jotai';
import { ReactNode } from 'react';
import { BottomSheetModal, BottomSheetProps } from '@gorhom/bottom-sheet';

/** BottomSheet Type*/
export type SheetParams = Omit<BottomSheetProps, 'children'> & {
  hasDim?: boolean;
  render: () => ReactNode;
};

/** 일반 modal */
type CustomModal = {
  type?: 'modal';
  hasDim?: boolean;
  children: ReactNode;
};

/** alert */
type AlertModalState = {
  type: 'alert';
  title?: string;
  message?: string;
  resolve: (value: boolean) => void;
  hasDim?: boolean;
  onConfirmPress?: () => void;
};

/** confirm (확장용) */
type ConfirmModalState = {
  type: 'confirm';
  title?: string;
  message?: string;
  resolve: (value: boolean) => void;
  hasDim?: boolean;
  onConfirmPress?: () => void;
};

/** 전체 */
export type ModalState = CustomModal | AlertModalState | ConfirmModalState;

export type DatePickerParams = {
  render: () => ReactNode;
  hasDim?: boolean;
};

/** State Type */
export const sheetAtom = atom<SheetParams | null>(null);
export const modalAtom = atom<ModalState | null>(null);
export const datePickerAtom = atom<DatePickerParams | null>(null);
export const sheetRefAtom = atom<React.RefObject<BottomSheetModal | null> | null>(null);

/** Actions */
export const expandSheetAtom = atom(null, (get) => {
  const ref = get(sheetRefAtom);
  ref?.current?.snapToIndex(1);
});

export const shrinkSheetAtom = atom(null, (get) => {
  const ref = get(sheetRefAtom);
  ref?.current?.snapToIndex(0);
});

export const openSheetAtom = atom(null, (_get, set, props: SheetParams) => {
  set(sheetAtom, props);
});

export const closeSheetAtom = atom(null, (_get, set) => {
  set(sheetAtom, null);
});

export const openModalAtom = atom(null, (_get, set, props: CustomModal) => {
  set(modalAtom, { ...props, type: 'modal' });
});

export const closeModalAtom = atom(null, (_get, set) => {
  set(modalAtom, null);
});

export const openDatePickerAtom = atom(null, (_get, set, props: DatePickerParams) => {
  set(datePickerAtom, props);
});

export const closeDatePickerAtom = atom(null, (_get, set) => {
  set(datePickerAtom, null);
});

type AlertParams = {
  title?: string;
  message?: string;
  onConfirmPress?: () => void;
};

export const alertAtom = atom(
  null,
  async (_get, set, { title, message, onConfirmPress }: AlertParams) => {
    return await new Promise<boolean>((resolve) => {
      set(modalAtom, {
        type: 'alert',
        title,
        message,
        onConfirmPress,
        resolve,
      });
    });
  },
);

export const confirmAtom = atom(
  null,
  async (_get, set, { title, message, onConfirmPress }: AlertParams) => {
    return await new Promise<boolean>((resolve) => {
      set(modalAtom, {
        type: 'confirm',
        title,
        message,
        onConfirmPress,
        resolve,
      });
    });
  },
);
