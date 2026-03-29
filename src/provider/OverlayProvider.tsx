import { iosShadowStyle } from '@/constants/shadowStyle';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Modal, ModalProps, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/** BottomSheet */
export type SheetParams = BottomSheetProps & { hasDim?: boolean };
export type OpenSheetOverlayVoid = (options: SheetParams) => void;

/** Modal */
export type ModalParams = ModalProps & { hasDim?: boolean };
export type OpenOverlayVoid = (options: ModalParams) => void;

/** DatePicker */
export type DatePickerParams = { children: ReactNode; hasDim?: boolean };
export type OpenDatePickerOverlayVoid = (options: DatePickerParams) => void;

type OverlayContextType = {
  openModal: OpenOverlayVoid;
  closeModal: () => void;

  openDatePicker: OpenDatePickerOverlayVoid;
  closeDatePicker: () => void;

  openSheet: OpenSheetOverlayVoid;
  closeSheet: () => void;
};

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: ReactNode }) {
  const insets = useSafeAreaInsets();

  const transitionIdRef = useRef(0);
  const [pendingOpenId, setPendingOpenId] = useState<number | null>(null);

  /* -------------------------------------------------------------------------- */
  /*                                BottomSheet                                 */
  /* -------------------------------------------------------------------------- */
  const sheetRef = useRef<BottomSheetModal>(null);

  const [sheetProps, setSheetProps] = useState<SheetParams | null>(null);

  const openSheet = async (props: SheetParams) => {
    const id = ++transitionIdRef.current;

    setSheetProps(props);
    setPendingOpenId(id);
  };

  const closeSheet = async () => {
    ++transitionIdRef.current;
    setPendingOpenId(null);
    sheetRef.current?.dismiss();
  };

  useEffect(() => {
    if (!pendingOpenId) return;
    if (transitionIdRef.current !== pendingOpenId) return;
    if (!sheetProps) return;

    sheetRef.current?.present();

    setPendingOpenId(null);
  }, [pendingOpenId, sheetProps]);

  useEffect(() => {
    if (!sheetProps) {
      sheetRef.current?.dismiss();
    }
  }, [sheetProps]);

  /* -------------------------------------------------------------------------- */
  /*                                   Modal                                    */
  /* -------------------------------------------------------------------------- */
  const [modalProps, setModalProps] = useState<ModalParams | null>(null);

  const openModal = async (props: ModalParams) => {
    setModalProps(props);
  };

  const closeModal = async () => {
    setModalProps(null);
  };

  /* -------------------------------------------------------------------------- */
  /*                                DatePicker                                  */
  /* -------------------------------------------------------------------------- */
  const datePickerRef = useRef<BottomSheetModal>(null);

  const [datePickerProps, setDatePickerProps] = useState<DatePickerParams | null>(null);

  const openDatePicker = (props: DatePickerParams) => {
    setDatePickerProps(props);
    requestAnimationFrame(() => {
      datePickerRef.current?.present();
    });
  };

  const closeDatePicker = async () => {
    setDatePickerProps(null);
  };

  return (
    <OverlayContext.Provider
      value={{
        openModal,
        closeModal,
        openSheet,
        closeSheet,
        openDatePicker,
        closeDatePicker,
      }}
    >
      {children}

      {/* BottomSheet */}
      <BottomSheetModal
        ref={sheetRef}
        enablePanDownToClose
        enableContentPanningGesture={true}
        maxDynamicContentSize={700}
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
        {...sheetProps}
        snapPoints={sheetProps?.snapPoints ?? ['48%']}
        onChange={(index, position, type) => {
          if (index === 0 && !sheetProps) {
            sheetRef.current?.dismiss();
            return;
          }
          if (index === -1) {
            setSheetProps(null);

            if (sheetProps?.onChange) {
              sheetProps.onChange(index, position, type);
            }
          }
        }}
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
          {sheetProps?.children && (
            <View
              className="flex-1"
              style={{
                paddingHorizontal: 24,
                paddingTop: 0,
                paddingBottom: insets.bottom,
              }}
            >
              {sheetProps?.children}
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
              <View className="max-h-[85%] w-[85%] rounded-3xl bg-white p-6">
                {modalProps.children}
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* DatePicker */}
      <Modal transparent visible={!!datePickerProps?.children} animationType="fade">
        <View className="flex-1 justify-end">
          {datePickerProps?.hasDim && (
            <Pressable
              className="absolute h-full w-full bg-black/30"
              onPress={closeDatePicker}
            />
          )}

          {datePickerProps?.children && (
            <View className="rounded-t-3xl bg-gray-200 pt-8">
              <View className="mx-auto" style={{ paddingBottom: insets.bottom }}>
                {datePickerProps.children}
              </View>
            </View>
          )}
        </View>
      </Modal>
    </OverlayContext.Provider>
  );
}

export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('useOverlay must be used within OverlayProvider');
  }

  return context;
};
