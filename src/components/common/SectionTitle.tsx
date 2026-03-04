import Text from '@/components/common/ui/Text';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({
  title,
  className = '',
}: SectionTitleProps) {
  return (
    <Text className={`pl-2 font-extrabold text-xl ${className}`}>{title}</Text>
  );
}
