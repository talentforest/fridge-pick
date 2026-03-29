import { atom } from 'jotai';
import { ReactNode } from 'react';
import { BottomSheetProps } from '@gorhom/bottom-sheet';
import { ModalProps } from 'react-native';

/** BottomSheet Type*/
export type SheetParams = Omit<BottomSheetProps, 'children'> & {
  hasDim?: boolean;
  render: () => ReactNode;
};

/** Modal Type */
export type ModalParams = ModalProps & {
  modalType?: 'modal' | 'alert' | 'confirm' | 'toast';
  hasDim?: boolean;
  children?: ReactNode;
};

export type DatePickerParams = {
  render: () => ReactNode;
  hasDim?: boolean;
};

/** State Type */
export const sheetAtom = atom<SheetParams | null>(null);
export const modalAtom = atom<ModalParams | null>(null);
export const datePickerAtom = atom<DatePickerParams | null>(null);

/** Actions */
export const openSheetAtom = atom(null, (_get, set, props: SheetParams) => {
  set(sheetAtom, props);
});

export const closeSheetAtom = atom(null, (_get, set) => {
  set(sheetAtom, null);
});

export const openModalAtom = atom(null, (_get, set, props: ModalParams) => {
  set(modalAtom, {
    ...props,
    modalType: props.modalType ?? 'modal',
  });
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
