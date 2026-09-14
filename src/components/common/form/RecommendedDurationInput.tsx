import FilterTag from '@/components/common/FilterTag';
import IconWithText from '@/components/common/IconWithText';
import SelectBtn from '@/components/common/SelectBtn';
import SquareBtn from '@/components/common/SquareBtn';
import Icon from '@/components/common/ui/Icon';
import { storageObj } from '@/constants';
import { DurationUnit, Food, Ingredient, SelectableItem } from '@/types/selectableItem';
import { StorageTypeId } from '@/types/storage';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useState } from 'react';
import { View } from 'react-native';

type RecommendedDurationInputProps = {
  storageType: StorageTypeId;
  newSelectableItem: SelectableItem;
  onSelectableItemChange: (
    newData: Partial<Ingredient> | Partial<Food>,
    deleteKeys?: (keyof Ingredient | keyof Food)[],
  ) => void;
};

export default function RecommendedDurationInput({
  storageType,
  newSelectableItem,
  onSelectableItemChange,
}: RecommendedDurationInputProps) {
  const [showSelectDurationBtn, setShowSelectDurationBtn] = useState<boolean>(false);

  const [showFastDayList, setShowFastDayList] = useState({
    show: false,
    storage: storageType,
  });

  const durationUnitObj = {
    day: '일',
    week: '주',
    month: '개월',
    year: '년',
  } as const;

  type Duration = {
    value: number;
    unit: DurationUnit;
  };

  const fastDayList: Duration[] = [
    { unit: 'day', value: 7 },
    { unit: 'month', value: 1 },
    { unit: 'month', value: 3 },
    { unit: 'month', value: 6 },
    { unit: 'year', value: 1 },
  ];

  const onChangeRecommendedDuration = (newDuration: Partial<Duration>) => {
    if (!newSelectableItem.expiration) return;

    const {
      expiration: { mode, recommendedDurations },
    } = newSelectableItem;

    const expiration = {
      mode,
      recommendedDurations: {
        ...recommendedDurations,
        [storageType]: { ...recommendedDurations![storageType], ...newDuration },
      },
    };

    onSelectableItemChange({ expiration });
  };

  if (!newSelectableItem.expiration || !newSelectableItem.expiration.recommendedDurations)
    return null;

  const recommendedDurationsByStorageType =
    newSelectableItem.expiration.recommendedDurations[storageType];

  return !recommendedDurationsByStorageType ? (
    <IconWithText
      text={`${storageObj[storageType].label} 보관기간 추가`}
      icon="Plus"
      textClassName="font-extrabold text-neutral-7"
      className="ml-2 mr-auto h-9 py-1"
      iconSize={14}
      onPress={() => onChangeRecommendedDuration({ value: 1, unit: 'day' })}
    />
  ) : (
    <>
      <View className="gap-y-1.5">
        <View className="flex-row items-center gap-x-3.5">
          <View className="flex-1 flex-row items-center gap-x-2.5 rounded-xl border border-neutral-7 bg-neutral-1 pl-3.5 pr-2">
            <IconWithText
              icon={storageObj[storageType].icon}
              text={storageObj[storageType].label}
              iconSize={14}
              iconColor={storageObj[storageType].color}
              textClassName="font-extrabold"
              className="ml-1 w-[65px] "
            />

            <View className="h-6 w-1 border-l border-neutral-5" />

            <View className="flex-1 flex-row items-center justify-end gap-x-1">
              <BottomSheetTextInput
                keyboardType="numeric"
                value={`${recommendedDurationsByStorageType.value}`}
                className="h-14 flex-1 px-2 font-heavy text-neutral-9"
                placeholder="필수입력"
                onFocus={() => setShowFastDayList((prev) => ({ ...prev, show: true }))}
                onBlur={() => setShowFastDayList((prev) => ({ ...prev, show: false }))}
                onChangeText={(text) =>
                  onChangeRecommendedDuration({
                    value: +text,
                    unit: recommendedDurationsByStorageType.unit,
                  })
                }
              />

              {/* unit 선택 */}
              <SelectBtn
                name={durationUnitObj[recommendedDurationsByStorageType.unit]}
                className="w-[60px] !gap-x-2 !border-0 !bg-border !px-3.5 !py-2.5"
                tailIconName={showSelectDurationBtn ? 'ChevronUp' : 'ChevronDown'}
                iconSize={14}
                onPress={() => setShowSelectDurationBtn((prev) => !prev)}
              />

              {showSelectDurationBtn ? (
                <View className="absolute -right-2.5 top-[54px] z-20 gap-y-1 rounded-xl !bg-neutral-9 p-2">
                  {(Object.keys(durationUnitObj) as ('day' | 'month' | 'year')[]).map(
                    (durationUnit) => (
                      <SquareBtn
                        key={durationUnit}
                        name={durationUnitObj[durationUnit]}
                        className={`w-[60px] !rounded-md !border-0 !bg-transparent !px-3.5 !py-2 ${recommendedDurationsByStorageType.unit === durationUnit ? '!bg-neutral-7' : ''}`}
                        iconName={
                          recommendedDurationsByStorageType.unit === durationUnit
                            ? 'CheckCircle2'
                            : undefined
                        }
                        iconSize={14}
                        textClassName="!text-neutral-1"
                        onPress={() =>
                          onChangeRecommendedDuration({
                            value: recommendedDurationsByStorageType.value,
                            unit: durationUnit,
                          })
                        }
                      />
                    ),
                  )}
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>

          <View className="w-12">
            {storageType !== newSelectableItem.defaultStorage ? (
              <Icon
                name="X"
                hasBgColor
                color="black"
                size={14}
                strokeWidth={2.8}
                className="aspect-square !rounded-full !bg-neutral-3"
                onPress={() => {
                  delete newSelectableItem.expiration?.recommendedDurations![storageType];

                  onSelectableItemChange({
                    expiration: newSelectableItem.expiration,
                  });
                }}
              />
            ) : (
              <FilterTag
                name="필수"
                isActive
                color="orange"
                className="aspect-square items-center justify-center !rounded-full !bg-orange-3 !px-0 !py-0"
                textClassName="text-sm font-heavy"
              />
            )}
          </View>
        </View>

        {showFastDayList.show && showFastDayList.storage === storageType ? (
          <View className="mb-1 flex-row flex-wrap gap-x-2">
            {fastDayList.map(({ value, unit }) => (
              <SelectBtn
                key={`${value}${durationUnitObj[unit]}`}
                name={`${value}${durationUnitObj[unit]}`}
                textClassName="text-sm"
                className="h-8 !px-2 !py-1"
                onPress={() => onChangeRecommendedDuration({ value, unit })}
              />
            ))}
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
}
