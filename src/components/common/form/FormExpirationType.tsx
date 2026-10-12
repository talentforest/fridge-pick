import { View } from 'react-native';
import { Food, Ingredient, SelectableItem } from '@/types/selectableItem';
import { DEFAULT_EXPIRATION_DURATION } from '@/constants';
import GridContainer from '@/components/common/container/GridContainer';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import Text from '@/components/common/ui/Text';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';

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
      id: 'packaged',
      label: '있어요',
      icon: 'CalendarCheck',
      color: 'green',
      description: '제품에 날짜가, 표시되어 있어요',
    },
    {
      id: 'recommended',
      label: '없어요',
      icon: 'CalendarX',
      color: 'red',
      description: '원물이거나, 직접 만든 음식이에요',
    },
  ] as const;

  if (!newSelectableItem) return null;

  const currForm = Object.keys(newSelectableItem.recommendedDurations || {})[0];

  // NOTE: 여기서 로직을 잘 짜야할 듯, 소비기한을 이용해주세요라면

  return (
    <View className="gap-y-4">
      <Text className="ml-1 font-extrabold !text-[15px] text-yellow-7">
        2. 포장에{' '}
        <Text className="font-heavy !text-[15px] text-yellow-9">특정 소비기한</Text>이
        적혀있나요?
      </Text>

      <View className="gap-y-3">
        <GridContainer gap={10} columns={2} horizontalInset={20}>
          {checkExpirationInfoList.map(({ id, label, icon, color, description }) => (
            <TouchableOpacity
              key={icon}
              onPress={() => {
                const duration = {
                  fridge: DEFAULT_EXPIRATION_DURATION,
                };

                if (id === 'packaged') {
                  const addData = {
                    recommendedDurations: {
                      packaged: duration,
                    },
                  } as const;

                  return onSelectableItemChange(addData);
                }

                // NOTE: '있어요'로 선택하지 않고, '없어요'를 한 경우 Ingredient면 raw로, Food면 homemade
                const recommendedDurations =
                  newSelectableItem.kind === 'food'
                    ? { homemade: duration }
                    : { raw: duration };

                const addData = { recommendedDurations };

                onSelectableItemChange(addData);
              }}
            >
              <Card
                className={`items-center justify-center gap-y-3 !py-5 ${currForm === id || (id === 'recommended' && (currForm === 'raw' || currForm === 'homemade')) ? 'border border-yellow-5 bg-yellow-0' : ''}`}
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

        <Card className="flex-row items-center gap-x-3 !bg-inactive-bg px-7 py-5">
          <Icon name="Info" size={16} color="neutral" />
          <View className="flex-1 gap-y-1.5">
            <Text className="font-extrabold">
              {currForm === 'packaged'
                ? '제품에 표시된 소비기한을 이용해주세요'
                : '권장 보관기간 정보로 적용됩니다'}
            </Text>
          </View>
        </Card>
      </View>
    </View>
  );
}
