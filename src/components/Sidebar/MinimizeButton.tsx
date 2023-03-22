import type { SyntheticEvent } from 'react';
import { ChevronDown } from 'heroicons-react';
interface Props {
  onClick?: (event: SyntheticEvent) => void;
  isMinimized?: boolean;
  className?: string;
}

const MinimizeButton: React.FC<Props> = ({ onClick, isMinimized = false, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      <ChevronDown size={24} className={`${isMinimized ? 'fcmap-rotate-180' : ''} fcmap-text-gray-400`} />
    </button>
  );
};

export default MinimizeButton;
