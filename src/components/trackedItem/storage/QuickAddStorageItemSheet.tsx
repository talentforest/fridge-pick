import { expirationStatusObj, storageObj } from '@/constants';
import { EditableStorageItem, EnrichedStorageItem, StorageTypeId } from '@/types/storage';
import {
  formatDateString,
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils';
import { useState } from 'react';
import { View } from 'react-native';
import { addDays } from 'date-fns';
import { useSetAtom } from 'jotai';
import { addStorageItemAtom } from '@/atom/storageAtom';
import { useErrorHandler, useOverlay } from '@/hooks';
import ModalHeader from '@/components/common/header/ModalHeader';
import IconWithText from '@/components/common/IconWithText';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import SearchAddStorageItem from '@/components/trackedItem/storage/SearchAddStorageItem';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import SelectBtn from '@/components/common/SelectBtn';

export default function QuickAddStorageItemSheet() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const [currStorageItem, setCurrStorageItem] = useState<EnrichedStorageItem | null>(
    null,
  );

  const remainingDays = getRemainingDays(currStorageItem?.expiresAt || '2023-02-01');

  const status = getExpirationStatus(remainingDays);

  const { clearError } = useErrorHandler();

  const { showToast, closeSheet } = useOverlay();

  const initializeStorageItem = () => {
    setSearchKeyword('');
    setCurrStorageItem(null);
    clearError();
  };

  const addStorageItem = useSetAtom(addStorageItemAtom);

  const onItemChange = (newData: EditableStorageItem) => {
    setCurrStorageItem((prev) => {
      if (prev === null) return prev;

      if (prev.type === 'custom') {
        return { ...prev, ...newData };
      }

      const { customLabel: _, ...rest } = newData;

      return { ...prev, ...rest };
    });
  };

  const storageBtnList = [
    {
      id: 'fridge',
      label: '냉장실',
      onPress: () => {
        onItemChange({ storage: { type: 'fridge' } });
      },
    },
    {
      id: 'freezer',
      label: '냉동실',
      onPress: () => {
        onItemChange({ storage: { type: 'freezer' } });
      },
    },
    {
      id: 'pantry',
      label: '실온',
      onPress: () => {
        onItemChange({ storage: { type: 'pantry' } });
      },
    },
  ];

  const propertyList = currStorageItem
    ? ([
        {
          label: '현재 보관위치',
          icon: 'MapPinned',
          color: 'blue',
          currData: currStorageItem.storage.type || 'fridge',
          quickBtnList: storageBtnList.filter(
            ({ id }) => id !== currStorageItem.storage.type,
          ),
        },
        {
          label: '현재 소비기한',
          icon: 'CalendarDays',
          color: 'yellow',
          currData: formatDateString(new Date(currStorageItem.expiresAt), 'yy년 M월 d일'),
          quickBtnList: [
            {
              id: '1일',
              label: '+1일',
              onPress: () => {
                const date = addDays(currStorageItem.expiresAt, 1);
                const expiresAt = formatDateString(date, 'yyyy-MM-dd');
                onItemChange({ expiresAt });
              },
            },
            {
              id: '7일',
              label: '+7일',
              onPress: () => {
                const date = addDays(currStorageItem.expiresAt, 7);
                const expiresAt = formatDateString(date, 'yyyy-MM-dd');
                onItemChange({ expiresAt });
              },
            },
            {
              id: '31일',
              label: '+31일',
              onPress: () => {
                const date = addDays(currStorageItem.expiresAt, 31);
                const expiresAt = formatDateString(date, 'yyyy-MM-dd');
                onItemChange({ expiresAt });
              },
            },
          ],
        },
      ] as const)
    : [];

  return (
    <View>
      <ModalHeader title="빠른 식재료 추가" />

      <Text className="my-2 ml-1 text-sm text-neutral-7">
        식재료 기본 정보로 빠르게 추가해요!
      </Text>

      <View className="gap-y-3">
        {currStorageItem === null ? (
          <SearchAddStorageItem
            isSheetInput
            currStorageType="fridge"
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            setCurrStorageItem={setCurrStorageItem}
            maxLength={8}
          />
        ) : (
          <View className="flex-1">
            <View className="flex-row items-center justify-between">
              <TrackedItemImageLabel
                item={currStorageItem}
                imageSize={95}
                hasCategory
                isHorizontal
                textClassName="text-lg"
              />
              {/* 초기화버튼 */}
              <View className="items-center justify-center gap-y-2">
                <Icon
                  name="RotateCcw"
                  size={18}
                  className="h-10 w-10 items-center justify-center rounded-xl bg-neutral-3"
                  color="text"
                  onPress={initializeStorageItem}
                />
                <Text className="!text-[11px] text-neutral-9">다시선택</Text>
              </View>
            </View>

            <View className="gap-y-3">
              <View className="flex-1 flex-row justify-between gap-x-0">
                {propertyList.map((item) => (
                  <Card
                    key={item.label}
                    className="w-[48.5%] gap-y-5 overflow-hidden !px-0 !pb-0"
                  >
                    <View className="flex-row items-center gap-x-2 px-3">
                      <Text className={`ml-1 text-sm text-neutral-9`}>{item.label}</Text>
                    </View>

                    <View className="flex-row items-center gap-x-2 px-4">
                      <Icon
                        name={item.icon}
                        color="neutral"
                        hasBgColor
                        size={16}
                        className="!rounded-full p-3.5"
                      />
                      <View className="justify-center gap-y-3">
                        {item.label === '현재 보관위치' ? (
                          <View className="gap-y-2">
                            <View className="flex-row items-center gap-x-0.5">
                              <Icon
                                name={storageObj[item.currData].icon}
                                color={storageObj[item.currData].color}
                                size={16}
                              />
                              <Text
                                className={`${storageObj[item.currData].textColor} font-extrabold text-base`}
                              >
                                {storageObj[item.currData].label}
                              </Text>
                            </View>

                            <Text className="text-sm text-neutral-5">기본 보관위치</Text>
                          </View>
                        ) : (
                          <View className="gap-y-2">
                            <Text
                              className={`font-extrabold text-base ${expirationStatusObj[status].textColor}`}
                            >
                              {formatRemainingDays(
                                getRemainingDays(currStorageItem.expiresAt),
                              )}
                            </Text>
                            <Text className="font-extrabold text-sm text-neutral-7">
                              {item.currData}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>

                    <View className="mt-1 gap-y-2 bg-neutral-1 px-2.5 pb-3 pt-4">
                      <IconWithText
                        text="빠른변경"
                        icon="Zap"
                        iconColor="neutral"
                        textClassName="!text-[11px] text-neutral-7"
                        iconSize={11}
                      />
                      <View className="flex-row gap-x-1.5">
                        {item.quickBtnList.map((btn) => (
                          <SelectBtn
                            key={btn.id}
                            onPress={btn.onPress}
                            name={
                              item.label === '현재 보관위치'
                                ? storageObj[btn.id as StorageTypeId].label
                                : btn.label
                            }
                            color="neutral"
                            iconName={
                              item.label === '현재 보관위치'
                                ? 'ArrowRightLeft'
                                : undefined
                            }
                            iconSize={11}
                            textClassName="!text-[11px] font-extrabold"
                            className="!px-2.5 !py-3"
                          />
                        ))}
                      </View>
                    </View>
                  </Card>
                ))}
              </View>

              <SquareBtn
                iconName="Plus"
                name={`${storageObj[currStorageItem.storage.type].label}에 추가하기`}
                className="mt-6"
                onPress={() => {
                  const result = addStorageItem(currStorageItem);

                  if (result.type === 'success') {
                    closeSheet();
                    showToast({
                      type: 'normal',
                      text1: `${storageObj[currStorageItem.storage.type].label}에 추가되었습니다!`,
                      visibilityTime: 2000,
                      position: 'bottom',
                    });
                  }
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
