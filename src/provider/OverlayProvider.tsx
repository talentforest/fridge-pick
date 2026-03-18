import { iosShadowStyle } from '@/constants/shadowStyle';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Modal, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SheetOptions = {
  snapPoints?: string[];
  enableContentPanningGesture?: boolean;
};

type OpenSheetParams = {
  element: ReactNode;
  hasDim?: boolean;
  options?: SheetOptions;
};

type OverlayContextType = {
  isOpenOverlay: boolean;

  openModal: ({ element, hasDim }: OpenSheetParams) => void;
  closeModal: () => void;

  openSheet: ({ element, hasDim, options }: OpenSheetParams) => void;
  closeSheet: () => void;

  openDatePicker: ({ element, hasDim }: OpenSheetParams) => void;
  closeDatePicker: () => void;
};

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: ReactNode }) {
  const sheetRef = useRef<BottomSheetModal>(null);
  const datePickerRef = useRef<BottomSheetModal>(null);

  const [dim, setDim] = useState<boolean>(false);
  const [sheetOptions, setSheetOptions] = useState<SheetOptions>({});
  const [isOpen, setIsOpen] = useState(false);

  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [sheetContent, setSheetContent] = useState<ReactNode>(null);
  const [datePickerContent, setDatePickerContent] = useState<ReactNode>(null);

  const [modalVisible, setModalVisible] = useState(false);

  /** modal */
  const openModal = ({ element, hasDim = false }: OpenSheetParams) => {
    setDim(hasDim);
    setModalContent(element);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  /** sheet */
  const openSheet = ({ element, hasDim = false, options }: OpenSheetParams) => {
    setDim(hasDim);
    setSheetContent(element);
    setSheetOptions(options ?? {});
    setIsOpen(true);
  };

  const closeSheet = () => {
    sheetRef.current?.dismiss();
  };

  /** datepicker */
  const openDatePicker = ({ element, hasDim = false }: OpenSheetParams) => {
    setDim(hasDim);
    setDatePickerContent(element);
    requestAnimationFrame(() => {
      datePickerRef.current?.present();
    });
  };

  const closeDatePicker = () => {
    setModalVisible(false);
    setDatePickerContent(null);
  };

  const isOpenOverlay =
    modalVisible || sheetContent !== null || datePickerContent !== null;

  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (isOpen) {
      sheetRef.current?.present();
      setIsOpen(false);
    }
  }, [isOpen, sheetOptions]);

  return (
    <OverlayContext.Provider
      value={{
        isOpenOverlay,
        openModal,
        closeModal,
        openSheet,
        closeSheet,
        openDatePicker,
        closeDatePicker,
      }}
    >
      {children}

      {/* bottomSheet */}
      <BottomSheetModal
        ref={sheetRef}
        onChange={(index) => {
          if (index === -1) setSheetContent(null);
        }}
        key={JSON.stringify(sheetOptions.snapPoints)}
        snapPoints={sheetOptions.snapPoints ?? ['44%']}
        backdropComponent={
          dim
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
      >
        <BottomSheetScrollView>
          <View
            className="flex-1"
            style={{
              paddingHorizontal: 24,
              paddingTop: 0,
              paddingBottom: insets.bottom,
            }}
          >
            {sheetContent}
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>

      {/* modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View className="flex-1">
          {/* 모달 Dim */}
          {dim && (
            <Pressable className="flex-1 bg-black/30" onPress={closeModal} />
          )}

          <View className="absolute h-full w-full items-center justify-center">
            <View className="max-h-[85%] rounded-3xl bg-white">
              {modalContent}
            </View>
          </View>
        </View>
      </Modal>

      {/* date picker */}
      <Modal transparent visible={!!datePickerContent} animationType="fade">
        <View className="flex-1 justify-end">
          {dim && (
            <Pressable
              className="absolute h-full w-full bg-black/30"
              onPress={closeDatePicker}
            />
          )}

          <View className="rounded-t-3xl bg-gray-200 pt-8">
            <View
              className="mx-auto"
              style={{
                paddingBottom: insets.bottom,
              }}
            >
              {datePickerContent}
            </View>
          </View>
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
