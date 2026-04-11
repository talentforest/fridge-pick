import { searchKeywordAtom } from '@/atom/storageItemAtom';
import Icon from '@/components/common/ui/Icon';
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
    <View className="mt-5">
      <Text className="mb-4 text-xl">{storageLabel} 식재료 검색</Text>

      <TextInput
        isSheetInput
        icon="Search"
        placeholder="찾으시는 식재료를 검색해주세요."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      >
        {searchKeyword !== '' && (
          <Icon
            name="RefreshCcw"
            size={18}
            className="py-2.5 pl-4 pr-5"
            onPress={() => setSearchKeyword('')}
          />
        )}
      </TextInput>
    </View>
  );
}
