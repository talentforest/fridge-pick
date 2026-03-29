import { searchKeywordAtom } from '@/atom/storageItemAtom';
import PressableIcon from '@/components/common/PressableIcon';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';
import { StorageTypeLabel } from '@/types/storage';
import { useAtom } from 'jotai';
import { View } from 'react-native';

export default function SearchItemSheet({
  storageLabel,
}: {
  storageLabel: StorageTypeLabel;
}) {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  return (
    <View className="mb-10 mt-5">
      <Text className="mb-4 !text-xl">{storageLabel} 속 식재료 검색</Text>
      <TextInput
        icon="Search"
        className="border border-gray-300 bg-white"
        placeholder="찾으시는 식재료를 검색해주세요."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      >
        {searchKeyword !== '' && (
          <PressableIcon
            icon="RefreshCcw"
            className="py-2.5 pl-4 pr-5"
            textClassName="text-gray-600 text-md"
            iconSize={20}
            onPress={() => setSearchKeyword('')}
          />
        )}
      </TextInput>
    </View>
  );
}
