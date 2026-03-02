import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import SectionTitle from '@/components/common/SectionTitle';
import { View } from 'react-native';

export default function ShoppingListScreen() {
  // const flatListData: ShoppingItem[] = [
  //   {id: string;
  //   ingredientId?: IngredientName;
  //   name: string;
  //   quantity: number;
  //   unit?: string;
  //   isChecked: boolean;
  //   createdAt: Timestamp;
  //   updatedAt: Timestamp;}
  // ];

  return (
    <SafeAreaViewContainer>
      <View className="flex-1 border px-6">
        <SectionTitle title="장보기 목록" />
        {/* <FlatList
          ref={listRef}
          data={flatListData}
          nestedScrollEnabled
          initialScrollIndex={initialIndex}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          contentContainerStyle={
            {
              // paddingHorizontal: (width - CARD_WIDTH) / 2,
            }
          }
          getItemLayout={(_, index) => ({
            length: ITEM_SIZE,
            offset: ITEM_SIZE * index,
            index,
          })}
          renderItem={({ item, index }) =>
            renderItem({ item, index, currentIndex })
          }
          keyExtractor={keyExtractor}
        /> */}
      </View>
    </SafeAreaViewContainer>
  );
}
