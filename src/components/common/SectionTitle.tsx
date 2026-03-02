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
    <Text
      className={`text-indigo-800 py-4 pl-2 text-xl font-extrabold ${className}`}
    >
      {title}
    </Text>
  );
}
