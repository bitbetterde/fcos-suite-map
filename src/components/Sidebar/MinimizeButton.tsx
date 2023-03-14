import type { SyntheticEvent } from 'react';
import { ChevronDown } from 'heroicons-react';
interface Props {
  onClick: (event: SyntheticEvent) => void;
  isMinimized?: boolean;
}

const MinimizeButton: React.FC<Props> = ({ onClick, isMinimized = false }) => {
  return (
    <button onClick={onClick}>
      <ChevronDown className={`${isMinimized ? 'fcmap-rotate-180' : ''} fcmap-text-gray-400 fcmap-w-6 fcmap-h-6`} />
    </button>
  );
};

export default MinimizeButton;
