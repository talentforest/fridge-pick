import GridContainer from '@/components/common/container/GridContainer';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';
import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import { Food, Ingredient, SelectableItem } from '@/types/selectableItem';

type FormExpirationTypeProps = {
  newSelectableItem: SelectableItem;
  onSelectableItemChange: (
    newData: Partial<Ingredient> | Partial<Food>,
    deleteKeys?: (keyof Ingredient | keyof Food)[],
  ) => void;
};

export default function FormExpirationType({
  newSelectableItem,
  onSelectableItemChange,
}: FormExpirationTypeProps) {
  const checkExpirationInfoList = [
    {
      id: 'recommended',
      label: '없어요',
      icon: 'CalendarX',
      color: 'neutral',
      description: '원물이거나, 직접 만든 음식이에요',
    },
    {
      id: 'printed',
      label: '있어요',
      icon: 'CalendarCheck',
      color: 'green',
      description: '제품에 날짜가, 표시되어 있어요',
    },
  ] as const;

  if (!newSelectableItem.expiration) return null;

  return (
    <View className="gap-y-4">
      <Text className="ml-1 font-extrabold !text-[15px] text-yellow-7">
        2. 포장에{' '}
        <Text className="font-heavy !text-[15px] text-yellow-9">특정 소비기한</Text>이
        적힌 식품인가요?
      </Text>

      <View className="gap-y-3">
        <GridContainer gap={10} columns={2} horizontalInset={20}>
          {checkExpirationInfoList.map(({ id, label, icon, color, description }) => (
            <TouchableOpacity
              key={icon}
              onPress={() => {
                if (id === 'printed') {
                  const addData = {
                    expiration: { mode: 'printed' },
                  } as const;

                  return onSelectableItemChange(addData, ['expiration']);
                }

                const data = {
                  expiration: {
                    mode: 'recommended',
                    recommendedDurations: {
                      fridge: {
                        value: DEFAULT_EXPIRATION_DAYS,
                        unit: 'day',
                      },
                    },
                  },
                } as const;

                onSelectableItemChange(data);
              }}
            >
              <Card
                className={`items-center justify-center gap-y-3 !py-5 ${newSelectableItem.expiration!.mode === id ? 'border-neutral-9' : ''}`}
              >
                <Icon name={icon} size={34} strokeWidth={2} color={color} />
                <Text className="font-extrabold">{label}</Text>
                <View className="gap-y-1">
                  {description.split(', ').map((item) => (
                    <Text key={item} className="text-center !text-[13px] text-neutral-7">
                      {item}
                    </Text>
                  ))}
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </GridContainer>

        {newSelectableItem.expiration.mode === 'printed' ? (
          <Card className="flex-row items-center gap-x-5 !bg-neutral-3 px-7 py-5">
            <Icon name="CalendarDays" size={30} color="neutral" />
            <View className="flex-1 gap-y-1.5">
              <Text className="font-extrabold">보관기간은 제품마다 달라요</Text>
              <Text className="!text-sm leading-[18px] text-neutral-7">
                표시된 소비기한을 이용해주세요
              </Text>
            </View>
          </Card>
        ) : (
          <></>
        )}

        {newSelectableItem.expiration.mode === 'recommended' ? (
          <Card className="flex-row items-center gap-x-5 !bg-neutral-3 px-7 py-5">
            <Icon name="CalendarDays" size={30} color="neutral" />
            <View className="flex-1 gap-y-1.5">
              <Text className="font-extrabold">추천 보관기간 정보가 필요해요</Text>
              <Text className="!text-sm leading-[18px] text-neutral-7">
                앞으로 사용할 기본값이에요
              </Text>
            </View>
          </Card>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
