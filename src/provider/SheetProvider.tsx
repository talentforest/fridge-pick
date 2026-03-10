import BaseBottomSheet from '@/components/common/container/BaseBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { createContext, ReactNode, useContext, useRef, useState } from 'react';

type SheetContextType = {
  openSheet: (render: () => ReactNode) => void;
  closeSheet: () => void;
  isOpen: boolean;
};

const SheetContext = createContext<SheetContextType | null>(null);

interface SheetProviderProps {
  children: ReactNode;
}

export function SheetProvider({ children }: SheetProviderProps) {
  const sheetRef = useRef<BottomSheet>(null);

  const [isOpen, setIsOpen] = useState(false);

  const [content, setContent] = useState<ReactNode>(null);

  const openSheet = (render: () => ReactNode) => {
    setContent(render());
    sheetRef.current?.snapToIndex(0);
  };

  const closeSheet = () => {
    sheetRef.current?.close();
    setContent(null);
  };

  return (
    <SheetContext.Provider value={{ openSheet, closeSheet, isOpen }}>
      {children}

      <BaseBottomSheet
        ref={sheetRef}
        onChange={(index) => {
          setIsOpen(index >= 0);
        }}
      >
        {content}
      </BaseBottomSheet>
    </SheetContext.Provider>
  );
}

export const useSheet = () => {
  const context = useContext(SheetContext);

  if (!context) {
    throw new Error('useSheet must be used within SheetProvider');
  }

  return context;
};
