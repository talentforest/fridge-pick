import SelectBtn from '@/components/common/SelectBtn';
import SquareBtn from '@/components/common/SquareBtn';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { ReactNode, useState } from 'react';
import { View } from 'react-native';

type StepContainterProps<T> = {
  children: (currStep: number) => ReactNode;
  stepList: T[];
  finalBtn: {
    label: string;
    onPress: () => void;
  };
};

export default function StepContainter<T>({
  stepList,
  children,
  finalBtn,
}: StepContainterProps<T>) {
  const [currStep, setCurrStep] = useState(1);

  return (
    <View>
      <View
        className={`absolute right-2 top-2 flex-row items-center justify-center gap-x-3`}
      >
        {/* 중간선 */}
        <View className="absolute h-0.5 w-full bg-neutral-3" />
        {[1, 2, 3].map((step) => (
          <View
            key={step}
            className={`size-7 items-center justify-center rounded-full ${currStep === step ? 'bg-neutral-9' : currStep < step ? 'bg-neutral-3' : 'bg-green-3'}`}
          >
            {currStep > step ? (
              <Icon name="Check" color="white" size={12} strokeWidth={4} />
            ) : (
              <Text className="font-heavy text-sm text-neutral-1">{step}</Text>
            )}
          </View>
        ))}
      </View>

      {children(currStep)}

      {/* 이전, 다음 버튼 */}
      <View className="mt-10 flex-row items-center gap-x-3">
        {currStep > 1 && currStep <= stepList.length ? (
          <SelectBtn
            name="이전"
            iconName="ChevronLeft"
            color="black"
            className="w-[30%] rounded-xl !py-[16px]"
            onPress={() => setCurrStep((prev) => prev - 1)}
          />
        ) : (
          <></>
        )}

        {stepList.length === currStep ? (
          <SquareBtn
            name={finalBtn.label}
            bgColor="green"
            className="flex-1"
            onPress={finalBtn.onPress}
          />
        ) : (
          <SquareBtn
            name="다음"
            tailIconName="ChevronRight"
            bgColor="black"
            className="flex-1"
            onPress={() => setCurrStep((prev) => prev + 1)}
          />
        )}
      </View>
    </View>
  );
}
