import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FoodStructureItemCard from '@/components/selectableItem/consumableFood/FoodStructureItemCard';
import MenuFilter from '@/components/selectableItem/consumableFood/MenuFilter';
import { EnrichedConsumableFoodWithFilter, useGetMenuDetail } from '@/hooks';
import { checkHasStorageItem, getPossessionStatus, styleByPercentageObj } from '@/utils';
import { View } from 'react-native';

type MenuCookTabDetailProps = {
  consumableFood: EnrichedConsumableFoodWithFilter;
};

export default function MenuCookTabDetail({ consumableFood }: MenuCookTabDetailProps) {
  const {
    expiredSoonList,
    requiredCount,
    requiredPossessionPercent,
    requiredPossessedList,
    possessedList,
  } = consumableFood;

  const { getIngredientStructureList, possesionStatus, styleByPossesionStatus } =
    useGetMenuDetail(consumableFood);

  const allIngredientStructureList = getIngredientStructureList();

  const status = getPossessionStatus(consumableFood.requiredPossessionPercent);
  const colorObj = styleByPercentageObj[status];

  return (
    <View className="gap-y-4">
      {/* 메뉴 속성 필터 목록 */}
      <View className="flex-row items-center gap-x-2">
        {(['category', 'difficulty', 'servingTemperature'] as const).map((type) => (
          <MenuFilter key={type} food={consumableFood} type={type} />
        ))}
      </View>

      {allIngredientStructureList.length > 0 && (
        <>
          {/* 진행률 */}
          <Card className={`gap-y-2 !px-4 !pb-3 !pt-5 ${colorObj.border}`}>
            <ProgressBar
              label="필수재료 보유율"
              percentage={requiredPossessionPercent}
              possessedCount={requiredPossessedList.length}
              requiredCount={requiredCount}
            />

            {requiredCount > 0 && (
              <View>
                <IconWithText
                  text={possesionStatus.label}
                  icon={possesionStatus.icon}
                  iconSize={14}
                  iconColor={possesionStatus.iconColor}
                  className="mt-2 !h-6"
                  textClassName={styleByPossesionStatus.text}
                />
              </View>
            )}
          </Card>

          {/* 재료 */}
          {allIngredientStructureList
            .filter(({ itemList }) => itemList.length > 0)
            .map(({ label, itemList }) => (
              <Card key={label} className="overflow-hidden !p-0">
                <View
                  className={`w-full flex-row items-center gap-x-1 self-start bg-neutral-3 p-4`}
                >
                  <Text className="text-neutral-7">{label}</Text>
                </View>

                <View className="my-3 gap-y-3 px-2">
                  {itemList.map((item) => (
                    <FoodStructureItemCard
                      key={item.id}
                      item={item}
                      imageSize={25}
                      className="items-center border-0 !py-0 !pl-2.5 !pr-2"
                      isStorageItem={
                        !!possessedList.find(({ storageItem }) =>
                          checkHasStorageItem(storageItem, item.id),
                        )
                      }
                      isExpiredSoon={
                        !!expiredSoonList.find(({ storageItem }) =>
                          checkHasStorageItem(storageItem, item.id),
                        )
                      }
                    />
                  ))}
                </View>
              </Card>
            ))}
        </>
      )}
    </View>
  );
}
