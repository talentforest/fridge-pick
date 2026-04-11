import { iosShadowStyle } from '@/constants/shadowStyle';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useAtomValue, useSetAtom } from 'jotai';
import { Appearance, Modal, Pressable, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  sheetAtom,
  modalAtom,
  closeSheetAtom,
  closeModalAtom,
  datePickerAtom,
  closeDatePickerAtom,
  sheetRefAtom,
} from '@/atom/overlayAtom';
import Text from '@/components/common/ui/Text';
import { colorTokens } from '@/theme/color';

export function OverlayContainer({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetModal>(null);

  const sheetProps = useAtomValue(sheetAtom);
  const modalProps = useAtomValue(modalAtom);
  const datePickerProps = useAtomValue(datePickerAtom);

  const closeSheet = useSetAtom(closeSheetAtom);
  const closeModal = useSetAtom(closeModalAtom);
  const closeDatePicker = useSetAtom(closeDatePickerAtom);

  const colorScheme = Appearance.getColorScheme() ?? 'light';

  const setSheetRef = useSetAtom(sheetRefAtom);

  useEffect(() => {
    setSheetRef(sheetRef);
  }, [setSheetRef]);

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
        keyboardBehavior="fillParent"
        keyboardBlurBehavior="restore"
        enableDynamicSizing={sheetProps?.enableDynamicSizing ?? true}
        ref={sheetRef}
        enablePanDownToClose
        style={iosShadowStyle}
        backgroundStyle={{
          backgroundColor: colorTokens[colorScheme].bg,
          borderRadius: 30,
        }}
        maxDynamicContentSize={750}
        handleIndicatorStyle={{
          backgroundColor: colorTokens[colorScheme].neutral[3],
          width: 80,
          height: 10,
        }}
        snapPoints={sheetProps?.snapPoints}
        onDismiss={closeSheet}
        backdropComponent={
          sheetProps?.hasDim
            ? (props) => (
                <BottomSheetBackdrop
                  {...props}
                  appearsOnIndex={0}
                  disappearsOnIndex={-1}
                  opacity={0.3}
                  style={{ backgroundColor: colorTokens[colorScheme].neutral[5] }}
                />
              )
            : undefined
        }
      >
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: insets.bottom,
            paddingHorizontal: 24,
          }}
        >
          {sheetProps && sheetProps.render()}
        </BottomSheetScrollView>
      </BottomSheetModal>

      {/* DatePicker */}
      <Modal transparent visible={!!datePickerProps} animationType="fade">
        <View className="flex-1 justify-end">
          {datePickerProps?.hasDim && (
            <Pressable
              style={{ backgroundColor: colorTokens[colorScheme].neutral[5] }}
              className="absolute h-full w-full opacity-30"
              onPress={closeDatePicker}
            />
          )}

          {datePickerProps?.render && (
            <View
              style={{ backgroundColor: colorTokens[colorScheme].bg }}
              className="rounded-t-3xl pt-6"
            >
              <View className="mx-auto" style={{ paddingBottom: insets.bottom }}>
                {datePickerProps.render()}
              </View>
            </View>
          )}
        </View>
      </Modal>

      {/* Modal */}
      {modalProps?.type === 'modal' && (
        <Modal transparent visible={!!modalProps} animationType="fade">
          <View className="flex-1">
            {modalProps?.hasDim && (
              <Pressable
                style={{ backgroundColor: colorTokens[colorScheme].neutral[5] }}
                className="flex-1 opacity-60"
                onPress={closeModal}
              />
            )}

            <View className="absolute h-full w-full items-center justify-center">
              {modalProps?.children && (
                <View
                  style={{ backgroundColor: colorTokens[colorScheme].bg }}
                  className={`max-h-[85%] w-[85%] rounded-3xl p-6`}
                >
                  {modalProps.children}
                </View>
              )}
            </View>
          </View>
        </Modal>
      )}

      {/* Alert */}
      {(modalProps?.type === 'alert' || modalProps?.type === 'confirm') && (
        <Modal transparent visible={!!modalProps}>
          <View className="flex-1">
            {modalProps?.hasDim && (
              <Pressable
                style={{ backgroundColor: colorTokens[colorScheme].neutral[5] }}
                className="flex-1 opacity-30"
                onPress={closeModal}
              />
            )}

            <View className="absolute h-full w-full items-center justify-center">
              <View
                className={`max-h-[85%] w-[70%] rounded-3xl bg-yellow-5 p-2`}
                style={{
                  ...iosShadowStyle,
                  shadowOffset: { width: 0, height: 4 },
                  shadowRadius: 15,
                }}
              >
                <View className="px-6 pt-6">
                  {modalProps.title && (
                    <Text className="mb-5 font-bold text-lg !text-neutral-900">
                      {modalProps.title}
                    </Text>
                  )}

                  {modalProps.message && (
                    <Text className="text-base leading-7 !text-neutral-900">
                      {modalProps.message}
                    </Text>
                  )}
                </View>

                <View className="mt-3 flex-row justify-end p-2">
                  {modalProps.type === 'confirm' && (
                    <Pressable
                      onPress={() => {
                        modalProps.resolve(false);
                        closeModal();
                      }}
                      className="p-4"
                    >
                      <Text className="font-extrabold text-base !text-gray-500">
                        취소
                      </Text>
                    </Pressable>
                  )}

                  <Pressable
                    onPress={() => {
                      modalProps.resolve(true);
                      closeModal();
                    }}
                    className="p-4"
                  >
                    <Text className="font-extrabold text-base !text-blue-700">확인</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
