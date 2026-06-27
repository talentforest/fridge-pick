import { IconColor } from '@/components/common/ui/Icon';
import { image_instant, image_ready_to_eat } from '@/constants/image';
import { FoodSource } from '@/types/selectableItem';
import { StorageTypeId } from '@/types/storage';
import { ImageSourcePropType } from 'react-native';

type ConvenienceVariant = {
  id: FoodSource;
  label: '직접조리' | '간편식품' | '완성식품';
  description: string;
  recommendedStorageList: StorageTypeId[];
  expirationDays: {
    freezer?: number;
    fridge?: number;
    pantry?: number;
  };
  image: ImageSourcePropType;
  icon: 'Zap' | 'PackageOpen';
  color: IconColor;
};

export const convenienceVariantObj: {
  [key in FoodSource]: ConvenienceVariant;
} = {
  homemade: {
    id: 'homemade',
    label: '직접조리',
    description: '직접 요리해서 먹어요.',
    recommendedStorageList: ['fridge', 'freezer', 'pantry'],
    expirationDays: {
      fridge: 7,
      freezer: 365,
      pantry: 365,
    },
    image: image_instant,
    icon: 'Zap', // 변경
    color: 'indigo',
  },

  convenience: {
    id: 'convenience',
    label: '간편식품',
    description: '간단한 조리 후 먹을 수 있어요|- 인스턴트, 밀키트, 냉동식품 등',
    recommendedStorageList: ['fridge', 'freezer', 'pantry'],
    expirationDays: {
      fridge: 7,
      freezer: 365,
      pantry: 365,
    },
    image: image_instant,
    icon: 'Zap', // 변경
    color: 'indigo',
  },

  takeout: {
    id: 'takeout',
    label: '완성식품',
    description: '구매 후 바로 먹을 수 있어요|- 배달/포장, 편의점 가공식품 등',
    recommendedStorageList: ['fridge', 'pantry'],
    expirationDays: {
      fridge: 7,
      pantry: 30,
    },
    image: image_ready_to_eat,
    icon: 'PackageOpen',
    color: 'green',
  },
} as const;
