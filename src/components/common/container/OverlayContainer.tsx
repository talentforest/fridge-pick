import { iosShadowStyle } from '@/constants/shadowStyle';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useAtomValue, useSetAtom } from 'jotai';
import { Modal, Pressable, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  sheetAtom,
  modalAtom,
  closeSheetAtom,
  closeModalAtom,
  datePickerAtom,
  closeDatePickerAtom,
} from '@/atom/overlayAtom';

export function OverlayContainer({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetModal>(null);

  const sheetProps = useAtomValue(sheetAtom);
  const modalProps = useAtomValue(modalAtom);
  const datePickerProps = useAtomValue(datePickerAtom);

  const closeSheet = useSetAtom(closeSheetAtom);
  const closeModal = useSetAtom(closeModalAtom);
  const closeDatePicker = useSetAtom(closeDatePickerAtom);

  /* ---------------- BottomSheet open/close ---------------- */

  useEffect(() => {
    if (sheetProps) {
      sheetRef.current?.present();
    } else {
      sheetRef.current?.dismiss();
    }
  }, [sheetProps]);

  return (
    <>
      {children}

      {/* BottomSheet */}
      <BottomSheetModal
        ref={sheetRef}
        enablePanDownToClose
        style={iosShadowStyle}
        backgroundStyle={{
          backgroundColor: '#f5f5f5',
          borderRadius: 30,
        }}
        handleIndicatorStyle={{
          backgroundColor: '#c3c3c3',
          width: 80,
          height: 10,
        }}
        snapPoints={sheetProps?.snapPoints ?? ['48%']}
        onDismiss={closeSheet}
        backdropComponent={
          sheetProps?.hasDim
            ? (props) => (
                <BottomSheetBackdrop
                  {...props}
                  appearsOnIndex={0}
                  disappearsOnIndex={-1}
                  opacity={0.3}
                />
              )
            : undefined
        }
      >
        <BottomSheetScrollView>
          {sheetProps?.render && (
            <View
              className="flex-1"
              style={{
                paddingHorizontal: 24,
                paddingBottom: insets.bottom,
              }}
            >
              {sheetProps.render()}
            </View>
          )}
        </BottomSheetScrollView>
      </BottomSheetModal>

      {/* Modal */}
      <Modal transparent visible={!!modalProps} animationType="fade">
        <View className="flex-1">
          {modalProps?.hasDim && (
            <Pressable className="flex-1 bg-black/30" onPress={closeModal} />
          )}

          <View className="absolute h-full w-full items-center justify-center">
            {modalProps?.children && (
              <View
                className={`max-h-[85%] rounded-3xl bg-white ${
                  modalProps.modalType === 'modal' ? 'w-[85%] p-6' : 'w-[70%]'
                }`}
              >
                {modalProps.children}
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* DatePicker */}
      <Modal transparent visible={!!datePickerProps} animationType="fade">
        <View className="flex-1 justify-end">
          {datePickerProps?.hasDim && (
            <Pressable
              className="absolute h-full w-full bg-black/30"
              onPress={closeDatePicker}
            />
          )}

          {datePickerProps?.render && (
            <View className="rounded-t-3xl bg-gray-200 pt-6">
              <View className="mx-auto" style={{ paddingBottom: insets.bottom }}>
                {datePickerProps.render()}
              </View>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
}
