import { expirationStatusObj, storageObj } from '@/constants';
import {
  EditableStorageItem,
  EnrichedStorageItem,
  StorageItem,
  StorageTypeId,
} from '@/types/storage';
import {
  formatDateString,
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils';
import { useState } from 'react';
import { View } from 'react-native';
import { addDays, subDays } from 'date-fns';
import { useSetAtom } from 'jotai';
import { addStorageItemAtom } from '@/atom/storageAtom';
import { useErrorHandler, useOverlay } from '@/hooks';
import ModalHeader from '@/components/common/header/ModalHeader';
import IconWithText from '@/components/common/IconWithText';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import SearchAddStorageItem from '@/components/trackedItem/storage/SearchAddStorageItem';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import SelectBtn from '@/components/common/SelectBtn';
import DateTimePicker from '@react-native-community/datetimepicker';
import ConvenienceFoodTag from '@/components/common/ConvenienceFoodTag';

export default function QuickAddStorageItemSheet() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const [currStorageItem, setCurrStorageItem] = useState<EnrichedStorageItem | null>(
    null,
  );

  const addStorageItem = useSetAtom(addStorageItemAtom);

  const remainingDays = getRemainingDays(currStorageItem?.expiresAt || '2023-02-01');

  const status = getExpirationStatus(remainingDays);

  const { clearError } = useErrorHandler();

  const { showToast, closeSheet, openDatePicker } = useOverlay();

  const initializeStorageItem = () => {
    setSearchKeyword('');
    setCurrStorageItem(null);
    clearError();
  };

  const onItemChange = (newData: EditableStorageItem) => {
    setCurrStorageItem((prev) => {
      if (prev === null) return prev;
      return { ...prev, ...newData };
    });
  };

  const storageBtnList = [
    {
      id: 'fridge',
      label: '냉장실',
      color: 'blue',
      onPress: () => {
        onItemChange({ storage: { type: 'fridge' } });
      },
    },
    {
      id: 'freezer',
      label: '냉동실',
      color: 'ice',
      onPress: () => {
        onItemChange({ storage: { type: 'freezer' } });
      },
    },
    {
      id: 'pantry',
      label: '실온',
      color: 'yellow',
      onPress: () => {
        onItemChange({ storage: { type: 'pantry' } });
      },
    },
  ] as const;

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
          color: 'red',
          currData: formatDateString(new Date(currStorageItem.expiresAt), 'yy년 M월 d일'),
          quickBtnList: [
            {
              id: '-1일',
              label: '-1일',
              color: 'red',
              onPress: () => {
                const date = subDays(currStorageItem.expiresAt, 1);
                const expiresAt = formatDateString(date, 'yyyy-MM-dd');
                onItemChange({ expiresAt });
              },
            },
            {
              id: '1일',
              label: '+1일',
              color: 'green',
              onPress: () => {
                const date = addDays(currStorageItem.expiresAt, 1);
                const expiresAt = formatDateString(date, 'yyyy-MM-dd');
                onItemChange({ expiresAt });
              },
            },
            {
              id: '7일',
              label: '+7일',
              color: 'green',
              onPress: () => {
                const date = addDays(currStorageItem.expiresAt, 7);
                const expiresAt = formatDateString(date, 'yyyy-MM-dd');
                onItemChange({ expiresAt });
              },
            },
          ],
        },
      ] as const)
    : [];

  const defaultStorage = 'fridge';
  // currStorageItem?.type === 'ingredient'
  //   ? currStorageItem.ingredient.defaultStorage
  //   : 'fridge';

  const onEditDatePickerPress = () => {
    if (!currStorageItem) return null;

    const onChange = (_: any, selectedDate?: Date) => {
      if (selectedDate) {
        setCurrStorageItem((prev) => {
          if (prev === null) return null;
          return {
            ...prev,
            expiresAt: formatDateString(selectedDate, 'yyyy-MM-dd'),
          };
        });
      }
    };

    openDatePicker({
      render: () => (
        <View>
          <ModalHeader title="소비기한 직접 변경" isDatePicker hasX />

          <View className="mx-auto mt-3">
            <DateTimePicker
              minimumDate={new Date()}
              value={new Date(currStorageItem.expiresAt)}
              mode="date"
              display="spinner"
              onChange={onChange}
              locale="ko-KR"
            />
          </View>
        </View>
      ),
    });
  };

  return (
    <View className="">
      <ModalHeader title="빠른 식재료 추가" />

      <Text className="my-2 text-sm text-neutral-7">
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
          <View className="mt-3 gap-y-3">
            <View className="flex-row items-start justify-between">
              <View className="flex-1 flex-row items-center gap-x-3">
                <Card className="items-center justify-center !bg-border !p-1">
                  {/* <FoodImage trackedItem={currStorageItem} imageSize={80} /> */}
                </Card>

                <View className="flex-1 items-start gap-y-2.5 py-1">
                  {currStorageItem.type !== 'ingredient' ? <ConvenienceFoodTag /> : <></>}

                  {/* <Text className={`line-clamp-1 font-extrabold text-lg`}>
                    {getTrackedItemData(currStorageItem).label}
                  </Text>

                  <Text className="text-neutral-5">
                    {getTrackedItemData(currStorageItem).categoryLabel}
                  </Text> */}
                </View>
              </View>

              {/* 초기화버튼 */}
              <Icon
                name="RotateCcw"
                size={16}
                className="m-1 h-10 w-10 items-center justify-center rounded-xl bg-neutral-3"
                color="text"
                onPress={initializeStorageItem}
              />
            </View>

            <View className="gap-y-3 border">
              <View className="flex-1 flex-row justify-between gap-x-0">
                {propertyList.map((item) => (
                  <Card
                    key={item.label}
                    className="w-[48.5%] gap-y-5 overflow-hidden !px-0 !pb-0"
                  >
                    <View className="flex-row items-center gap-x-2 px-3">
                      <Text className={`ml-1 text-sm text-neutral-7`}>{item.label}</Text>
                      {item.label === '현재 소비기한' && (
                        <Icon
                          name="Edit3"
                          size={12}
                          className="absolute right-0 mr-1.5 p-2.5"
                          onPress={onEditDatePickerPress}
                        />
                      )}
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

                            <Text className="text-sm text-neutral-7">
                              {item.currData === defaultStorage ? '권장' : '변경된'}{' '}
                              보관위치
                            </Text>
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
                            <Text className="text-sm text-neutral-7">
                              {item.currData}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>

                    <View className="mt-1 flex-1 gap-y-2.5 bg-border px-3 pb-5 pt-5">
                      <IconWithText
                        text="빠른변경"
                        icon="Zap"
                        iconColor="yellow"
                        textClassName="!text-[11px] text-yellow-7"
                        iconSize={11}
                      />
                      <View className="flex-row flex-wrap gap-1">
                        {item.quickBtnList.map((btn) => (
                          <SelectBtn
                            key={btn.id}
                            onPress={btn.onPress}
                            name={
                              item.label === '현재 보관위치'
                                ? storageObj[btn.id as StorageTypeId].label
                                : btn.label
                            }
                            color={btn.color}
                            iconName={
                              item.label === '현재 보관위치'
                                ? 'ArrowRightLeft'
                                : undefined
                            }
                            iconSize={11}
                            textClassName="!text-[11px] font-extrabold"
                            className="!bg-neutral-0 !px-3 !py-2.5"
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

                  if (result.type === 'duplicate') {
                    showToast({
                      type: 'normal',
                      text1: `⚠️ ${storageObj[(result.item as StorageItem).storage.type].label}에 이미 보유하고 있습니다.`,
                      props: {
                        bgColor: 'red',
                      },
                    });
                  }

                  if (result.type === 'success') {
                    closeSheet();
                    showToast({
                      type: 'normal',
                      text1: `${storageObj[currStorageItem.storage.type].label}에 추가되었습니다!`,
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
