import { favoriteFoodListAtom, favoriteIngredientListAtom } from '@/atom/favoritesAtom';
import { useAtomValue } from 'jotai';
import { Image, View } from 'react-native';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import { image_mealkit, image_mypick } from '@/constants';
import { josa } from 'es-hangul';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import Icon from '@/components/common/ui/Icon';
import IconWithText from '@/components/common/IconWithText';
import { useHandleNavigate } from '@/hooks';

export default function MyPickList() {
  const storageItemList = useAtomValue(allStorageItemListAtom);
  const myPickIngredientList = useAtomValue(favoriteIngredientListAtom);
  const myPickFoodList = useAtomValue(favoriteFoodListAtom);

  const getMyPickList = ({
    type,
    isOwned,
  }: {
    type: 'ingredient' | 'food';
    isOwned: boolean;
  }) => {
    if (type === 'ingredient') {
      const ownedIdSet = new Set(
        storageItemList
          .filter((item) => item.type === 'ingredient')
          .map((item) => item.ingredientId),
      );

      return myPickIngredientList.filter(({ id }) => {
        if (isOwned) return ownedIdSet.has(id);
        return !ownedIdSet.has(id);
      });
    }

    if (type === 'food') {
      const ownedIdSet = new Set(
        storageItemList.filter((item) => item.type === 'food').map((item) => item.foodId),
      );

      return myPickFoodList.filter(({ id }) => {
        if (isOwned) return ownedIdSet.has(id);
        return !ownedIdSet.has(id);
      });
    }

    return [];
  };

  const ownedMyPickIngredientList = getMyPickList({ type: 'ingredient', isOwned: true });
  const notOwnedMyPickIngredientList = getMyPickList({
    type: 'ingredient',
    isOwned: false,
  });
  const ownedMyPickConsumaleFoodList = getMyPickList({
    type: 'food',
    isOwned: true,
  });

  type StatusPhrase = {
    text: string;
    highlight?: boolean;
  };

  type Status = {
    type: string;
    phrase: StatusPhrase[];
  };

  const ingredientStatus: Status =
    myPickIngredientList.length === 0
      ? {
          type: 'hasNotMyPick',
          phrase: [{ text: `💥 픽한 식재료가 없어요` }],
        }
      : notOwnedMyPickIngredientList.length > 0
        ? {
            type: 'notOwned',
            phrase: [
              {
                text: `💥 ${josa(notOwnedMyPickIngredientList[0]!.label, '이/가')} 없어요`,
              },
            ],
          }
        : {
            type: 'hasAll',
            phrase: [{ text: '❤️ 픽식재료가 전부 있어요!' }],
          };

  const foodStatus: Status =
    myPickFoodList.length === 0
      ? {
          type: 'hasNotMyPick',
          phrase: [{ text: `💥 자주먹는 메뉴를 픽해봐요` }],
        }
      : ownedMyPickConsumaleFoodList.length === 0
        ? {
            type: 'notOwned',
            phrase: [{ text: '💥 지금 먹을 수 있는 메뉴가' }, { text: '없어요' }],
          }
        : {
            type: 'hasAll',
            phrase: [
              {
                text: `❤️ ${josa(ownedMyPickConsumaleFoodList[0]!.label, '을/를').slice(0, -1)}`,
                highlight: true,
              },
              {
                text: `${josa(ownedMyPickConsumaleFoodList[0]!.label, '을/를').slice(-1)} 먹어볼까요?`,
              },
            ],
          };

  const dataObj = {
    ingredient: {
      id: 'ingredient',
      icon: 'LeafyGreen',
      label: '픽 식재료',
      data: `${ownedMyPickIngredientList.length}/${myPickIngredientList.length}`,
      unit: '보유',
      imageSource: image_mypick,
      status: ingredientStatus,
    },
    food: {
      icon: 'CookingPot',
      id: 'food',
      label: '픽 메뉴',
      data: `${ownedMyPickConsumaleFoodList.length}/${myPickFoodList.length}`,
      unit: '가능',
      imageSource: image_mealkit,
      status: foodStatus,
    },
  } as const;

  const { goNavigate } = useHandleNavigate();

  return (
    <>
      {myPickIngredientList.length > 0 ? (
        <View className="w-full flex-row gap-x-3 border-0 !p-0">
          {Object.values(dataObj).map((item) => (
            <TouchableOpacity
              key={item.label}
              className={`h-40 w-[48%] justify-between`}
              onPress={() => goNavigate('MyPickScreen', { type: item.id })}
            >
              <Card className="flex-1 !py-5">
                <View className="mb-4 flex-row justify-between">
                  <View className="gap-y-4 p-1">
                    <IconWithText
                      text={item.label}
                      icon={item.icon}
                      iconSize={12}
                      textClassName="text-sm font-extrabold"
                    />

                    <View className="flex-row items-center gap-x-1">
                      <Text
                        className={`font-heavy text-xl ${item.data.split('/')[0] === '0' ? 'text-red-5' : 'text-green-7'}`}
                      >
                        {item.data.split('/')[0]}

                        {item.data.split('/')[1] ? (
                          <Text className="font-heavy text-xl text-neutral-7">
                            /{item.data.split('/')[1]}
                          </Text>
                        ) : (
                          <></>
                        )}
                      </Text>

                      <Text className="pt-1 font-extrabold text-sm text-neutral-7">
                        {item.unit}
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="mt-auto flex-row flex-wrap items-center">
                  {item.status.phrase.map(({ text, highlight }) => (
                    <Text
                      key={text}
                      className={`text-sm leading-5 ${highlight ? 'text-indigo- font-extrabold' : ''}`}
                    >
                      {text}
                    </Text>
                  ))}
                </View>

                <Icon
                  name="ChevronRight"
                  size={16}
                  className="absolute right-4 top-[36%] size-10 rounded-full bg-neutral-3"
                  strokeWidth={3}
                />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Card className="flex-row items-center gap-x-4 !py-8">
          <View className="aspect-square items-center justify-center gap-y-3 rounded-full bg-neutral-1 p-4">
            <Image source={image_mypick} className="aspect-[1.45/1.2] h-12 opacity-80" />
          </View>

          <View className="gap-y-3">
            <Text className="font-extrabold text-neutral-7">
              아직 나의픽 식재료가 없어요
            </Text>

            <View className="gap-y-1">
              <Text className="text-sm text-neutral-7">나의 픽을 등록하고</Text>
              <Text className="text-sm text-neutral-7">
                냉장고 맞춤 정보를 받아보세요
              </Text>
            </View>
          </View>
        </Card>
      )}
    </>
  );
}

// 애호박찌개 빼기
// 문어다리슬라이스
// 해삼
// 냉장고에 넣은 반찬 추천
// 보관함에서 반찬 나의 픽 선택시 중복 추가 버그
// 식재료 보유율 높음에서 식사
// 태그 정보 불필요
