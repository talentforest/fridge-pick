import { EnrichedFoodWithFilter, useGetFoodDetail } from '@/hooks';
import { checkHasStorageItem } from '@/utils';
import { Image, View } from 'react-native';
import { image_instant } from '@/constants';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import FoodImage from '@/components/common/FoodImage';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FoodStructureItemCard from '@/components/selectableItem/FoodStructureItemCard';
import FoodFilter from '@/components/selectableItem/FoodFilter';

type FoodCookTabDetailProps = {
  food: EnrichedFoodWithFilter;
};

export default function FoodCookTabDetail({ food }: FoodCookTabDetailProps) {
  const {
    expiredSoonList,
    requiredCount,
    requiredPossessionPercent,
    requiredPossessedList,
    possessedList,
    foodStructure: _,
    filterList: _filterList,
    ...rest
  } = food;

  const { getIngredientStructureList, possesionStatus, styleByPossesionStatus } =
    useGetFoodDetail(food);

  const allIngredientStructureList = getIngredientStructureList();

  return (
    <View>
      {/* 메뉴 속성 필터 목록 */}
      {allIngredientStructureList.length > 0 && (
        <>
          <View className="flex-row items-center gap-x-2">
            <View className="items-center rounded-xl bg-neutral-1 p-1">
              <FoodImage food={food} imageSize={95} />
            </View>

            <View className="flex-1 flex-row items-start justify-between gap-y-3">
              <View className="gap-y-2">
                <FoodFilter food={food} type="category" />
                <Text className="line-clamp-2 pl-0.5 font-extrabold text-lg">
                  {food?.label}
                </Text>
              </View>

              <FavoriteBtn selectableItem={rest} className="p-1" />
            </View>
          </View>

          <Card className="mb-2 flex-row items-center gap-x-2 !bg-neutral-3">
            <Image source={image_instant} style={{ width: 55, height: 55 }} />

            <View className="my-3 flex-1 flex-row items-end justify-between gap-x-3 gap-y-2">
              <View className="gap-y-2">
                <Text className="font-extrabold">간편식으로 먹을 수 있어요</Text>
                <Text className="text-sm text-neutral-7">
                  밀키트 ・ 레토르트 ・ 냉동식품 등
                </Text>
              </View>

              <IconWithText
                text="장보기 담기"
                icon="ShoppingBasket"
                iconSize={14}
                iconColor="orange"
                textClassName="text-sm text-orange-7 font-extrabold"
                className="-mb-1.5 rounded-lg bg-neutral-1 px-2 py-2.5"
              />
            </View>
          </Card>

          <Card className={`border`}>
            <ProgressBar
              label="필수재료 보유율"
              percentage={requiredPossessionPercent}
              possessedCount={requiredPossessedList.length}
              requiredCount={requiredCount}
              // type="circular"
              color={styleByPossesionStatus.icon}
            />

            <View className="gap-y-2.5 py-1.5">
              <Text className="font-extrabold">
                필수 재료 {requiredPossessedList.length} / {requiredCount} 보유
              </Text>

              {requiredCount > 0 && (
                <IconWithText
                  text={possesionStatus.label}
                  icon={possesionStatus.icon}
                  iconSize={13}
                  iconColor={possesionStatus.iconColor}
                  textClassName={`!text-[13px] ${styleByPossesionStatus.text}`}
                />
              )}
            </View>
          </Card>

          {/* 재료 */}
          {allIngredientStructureList
            .filter(({ itemList }) => itemList.length > 0)
            .map(({ label, itemList, possessedListByType }) => (
              <Card key={label} className="gap-y-4 overflow-hidden !px-3.5 !py-4">
                <View
                  className={`w-full flex-row items-center justify-between gap-x-1 py-1`}
                >
                  <View className="flex-row items-center gap-x-2">
                    <View className="size-1.5 rounded-sm bg-neutral-7" />
                    <Text className="font-extrabold !text-[13px] text-neutral-7">
                      {label}
                    </Text>
                    <Text className="!text-sm text-neutral-7">
                      {possessedListByType.length}개 / {itemList.length}개 보유
                    </Text>
                  </View>
                  <Text className="!text-sm text-red-5">
                    부족 {itemList.length - possessedListByType.length}개
                  </Text>
                </View>

                <View className="flex-row flex-wrap justify-between gap-x-1 gap-y-2">
                  {itemList.map((item) => (
                    <FoodStructureItemCard
                      key={item.id}
                      item={item}
                      imageSize={25}
                      className={`w-[49%] items-center justify-between rounded-lg border-0 !p-2 ${
                        label !== '있으면 좋은 재료' &&
                        !possessedList.find(({ storageItem }) =>
                          checkHasStorageItem(storageItem, item.id),
                        )
                          ? 'bg-red-0'
                          : ''
                      }`}
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
