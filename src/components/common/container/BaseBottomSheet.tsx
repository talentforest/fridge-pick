import { iosShadowStyle } from '@/constants/shadowStyle';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { forwardRef, ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BaseBottomSheetProps = {
  children?: ReactNode;
  onChange?: (index: number) => void;
};

function BaseBottomSheet(
  { children, onChange }: BaseBottomSheetProps,
  ref: React.Ref<BottomSheet>,
) {
  const insets = useSafeAreaInsets();

  return (
    <BottomSheet
      ref={ref}
      onChange={onChange}
      index={-1}
      enablePanDownToClose
      enableDynamicSizing
      snapPoints={['40%']}
      maxDynamicContentSize={700}
      style={iosShadowStyle}
      backgroundStyle={{
        backgroundColor: '#ffffff',
        borderRadius: 30,
      }}
      handleIndicatorStyle={{
        backgroundColor: '#000000',
        width: 60,
        height: 7,
      }}
    >
      <BottomSheetScrollView>
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 16,
            paddingBottom: 24 + insets.bottom,
          }}
        >
          {children}
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export default forwardRef(BaseBottomSheet);
