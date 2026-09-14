import { forwardRef } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

const ScrollViewContainer = forwardRef<ScrollView, ScrollViewProps>(
  ({ children, contentContainerClassName, ...props }, ref) => {
    return (
      <ScrollView
        ref={ref}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        automaticallyAdjustKeyboardInsets={false}
        {...props}
        contentContainerClassName={`px-[24px] pb-32 gap-y-14 ${contentContainerClassName ?? ''}`}
      >
        {children}
      </ScrollView>
    );
  },
);

ScrollViewContainer.displayName = 'ScrollViewContainer';

export default ScrollViewContainer;
