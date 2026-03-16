import { iosShadowStyle } from '@/constants/shadowStyle';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {
  createContext,
  forwardRef,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';
import { Modal, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type OverlayContentType = {
  element: ReactNode;
  hasDim?: boolean;
};

type OverlayContextType = {
  isOpenOverlay: boolean;

  openModal: ({ element, hasDim }: OverlayContentType) => void;
  closeModal: () => void;

  openSheet: ({ element, hasDim }: OverlayContentType) => void;
  closeSheet: () => void;

  openDatePicker: ({ element, hasDim }: OverlayContentType) => void;
  closeDatePicker: () => void;
};

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: ReactNode }) {
  const sheetRef = useRef<BottomSheetModal>(null);
  const datePickerRef = useRef<BottomSheetModal>(null);

  const [dim, setDim] = useState<boolean>(false);

  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [sheetContent, setSheetContent] = useState<ReactNode>(null);
  const [datePickerContent, setDatePickerContent] = useState<ReactNode>(null);

  const [modalVisible, setModalVisible] = useState(false);

  /** modal */
  const openModal = ({ element, hasDim = false }: OverlayContentType) => {
    setDim(hasDim);
    setModalContent(element);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  /** sheet */
  const openSheet = ({ element, hasDim = false }: OverlayContentType) => {
    setDim(hasDim);
    setSheetContent(element);
    requestAnimationFrame(() => {
      sheetRef.current?.present();
    });
  };

  const closeSheet = () => {
    sheetRef.current?.dismiss();
  };

  /** datepicker */
  const openDatePicker = ({ element, hasDim = false }: OverlayContentType) => {
    setDim(hasDim);
    setDatePickerContent(element);
    requestAnimationFrame(() => {
      datePickerRef.current?.present();
    });
  };

  const closeDatePicker = () => {
    datePickerRef.current?.dismiss();
  };

  const isOpenOverlay =
    modalVisible || sheetContent !== null || datePickerContent !== null;

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

      {/* modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View className="flex-1">
          {/* 모달 Dim */}
          {dim ? (
            <Pressable className="flex-1 bg-black/30" onPress={closeModal} />
          ) : (
            <></>
          )}
          <View className="absolute h-full w-full items-center justify-center">
            <View className="max-h-[85%] rounded-3xl bg-white">
              {modalContent}
            </View>
          </View>
        </View>
      </Modal>

      {/* sheet */}
      <BottomSheetContainer
        ref={sheetRef}
        onChange={(index) => {
          if (index === -1) setSheetContent(null);
        }}
        hasDim={dim}
        snapPoints={['40%']}
        enableContentPanningGesture={true}
      >
        {sheetContent}
      </BottomSheetContainer>

      {/* date picker */}
      <BottomSheetContainer
        ref={datePickerRef}
        onChange={(index) => {
          if (index === -1) setDatePickerContent(null);
        }}
        hasDim={dim}
        enableContentPanningGesture={false}
      >
        {datePickerContent}
      </BottomSheetContainer>
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

const BottomSheetContainer = forwardRef<
  BottomSheetModal,
  {
    children: ReactNode;
    onChange: BottomSheetModalProps['onChange'];
    hasDim?: boolean;
    snapPoints?: string[];
    enableContentPanningGesture: boolean;
  }
>(function BottomSheetContainer(
  { children, onChange, hasDim, snapPoints, enableContentPanningGesture },
  ref,
) {
  const insets = useSafeAreaInsets();

  return (
    <BottomSheetModal
      ref={ref}
      onChange={onChange}
      backdropComponent={
        hasDim
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
      enableContentPanningGesture={enableContentPanningGesture}
      snapPoints={snapPoints}
      maxDynamicContentSize={700}
      style={iosShadowStyle}
      backgroundStyle={{
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
      }}
      handleIndicatorStyle={{
        backgroundColor: '#b5b5b5',
        width: 60,
        height: 7,
      }}
    >
      <BottomSheetScrollView>
        <View
          className="mx-auto"
          style={{
            paddingHorizontal: 24,
            paddingTop: 0,
            paddingBottom: insets.bottom,
          }}
        >
          {children}
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});
