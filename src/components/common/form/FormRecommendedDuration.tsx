import IconWithText from '@/components/common/IconWithText';
import SelectBtn from '@/components/common/SelectBtn';
import RecommendedDurationInput from '@/components/common/form/RecommendedDurationInput';
import Text from '@/components/common/ui/Text';
import { DEFAULT_EXPIRATION_DAYS, storageObj } from '@/constants';
import { View } from 'react-native';
import { Food, Ingredient, SelectableItem } from '@/types/selectableItem';
import { josa } from 'es-hangul';
import { StorageTypeId } from '@/types/storage';

type FormRecommendedDurationProps = {
  newSelectableItem: SelectableItem;
  onSelectableItemChange: (
    newData: Partial<Ingredient> | Partial<Food>,
    deleteKeys?: (keyof Ingredient | keyof Food)[],
  ) => void;
};

export default function FormRecommendedDuration({
  newSelectableItem,
  onSelectableItemChange,
}: FormRecommendedDurationProps) {
  if (!newSelectableItem.expiration || !newSelectableItem.defaultStorage) return null;

  const { label, expiration, defaultStorage } = newSelectableItem;

  const storageTypeList: StorageTypeId[] = [
    defaultStorage,
    // 나머지 필수 아닌 항목 재정렬
    ...(Object.keys(storageObj) as StorageTypeId[])
      .filter((id) => id !== defaultStorage)
      .sort(
        (a, b) =>
          Number(b in (expiration.recommendedDurations ?? {})) -
          Number(a in (expiration.recommendedDurations ?? {})),
      ),
  ];

  return (
    <View className="gap-y-8">
      <View className="gap-y-4">
        <Text className="ml-1 font-extrabold !text-[15px] text-yellow-7">
          3. 주로 어디에 보관하나요?
        </Text>

        <View className="mb-2 flex-row flex-wrap gap-2">
          {Object.values(storageObj).map((item) => (
            <SelectBtn
              key={item.id}
              iconName={item.icon}
              iconSize={14}
              name={item.label}
              color={item.id === defaultStorage ? 'black' : 'neutral'}
              className="!px-3 !py-3.5"
              onPress={() =>
                onSelectableItemChange({
                  defaultStorage: item.id,
                  expiration: {
                    mode: 'recommended',
                    recommendedDurations: {
                      [item.id]: {
                        value: DEFAULT_EXPIRATION_DAYS,
                        unit: 'day',
                      },
                    },
                  },
                })
              }
            />
          ))}
        </View>
      </View>

      {expiration.mode === 'recommended' ? (
        <View className="gap-y-4">
          <View className="ml-1 gap-y-2">
            <Text className="font-extrabold !text-[15px] text-yellow-7">
              4. 위치별 보관기관을 작성해주세요
            </Text>

            <IconWithText
              icon="Info"
              iconSize={13}
              className="mt-1"
              textClassName="text-neutral-7 !text-[13px]"
              iconColor="neutral"
              text={`앞으로 ${josa(label, '을/를')} 추가할 때 사용할 기본값이에요`}
            />
          </View>

          <View className="gap-y-2">
            {storageTypeList.map((storageType) => (
              <RecommendedDurationInput
                key={storageType}
                storageType={storageType}
                newSelectableItem={newSelectableItem}
                onSelectableItemChange={onSelectableItemChange}
              />
            ))}
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
