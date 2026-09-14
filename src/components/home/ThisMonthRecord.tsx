import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

type ThisMonthRecordProps = {};

export default function ThisMonthRecord({}: ThisMonthRecordProps) {
  const dataObj = {
    eat: {
      label: '소비한 식재료',
      icon: 'Refrigerator',
      total: 10,
      data: 4,
      color: 'blue',
    },
    trash: {
      label: '폐기한 식재료',
      icon: 'Trash2',
      total: 0,
      data: -4,
      color: 'red',
    },
  } as const;

  return (
    <Card className="!px-0 !py-8">
      <GridContainer columns={2} gap={0} horizontalInset={25}>
        {Object.values(dataObj).map((item) => (
          <View
            key={item.label}
            className={`gap-y-6 px-4 ${item.label === '소비한 식재료' ? 'border-r border-neutral-3' : ''}`}
          >
            <View className="flex-row gap-x-3">
              <Icon
                name={item.icon}
                className="!rounded-full p-3"
                size={22}
                hasBgColor
                color={item.color}
              />

              <View className="gap-y-2.5">
                <Text className="font-extrabold text-sm">{item.label}</Text>
                <Text className="font-heavy text-xl">
                  {item.total}
                  <Text className="text-sm">개</Text>
                </Text>
              </View>
            </View>

            <View className={`flex-row items-center justify-center gap-x-2`}>
              <Text className="font-extrabold text-sm text-neutral-7 ">지난달 대비</Text>
              <Text
                className={`${item.data > 0 ? 'text-red-5' : 'text-green-5'} text-center font-extrabold text-sm`}
              >
                {item.data > 0 ? `${item.data}개 증가` : `${item.data}개`}
              </Text>
            </View>
          </View>
        ))}
      </GridContainer>
    </Card>
  );
}
