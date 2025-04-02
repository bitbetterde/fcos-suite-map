import type { SyntheticEvent } from 'react';
import { X as CloseIcon } from 'heroicons-react';

interface CloseButtonProps {
  onClick: (event: SyntheticEvent) => void;
  className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, className }) => {
  return (
    <div
      className={
        'fcmap-p-1 fcmap-flex fcmap-items-center fcmap-justify-center fcmap-text-gray-400 hover:fcmap-text-gray-900 ' +
        className
      }
    >
      <CloseIcon size={24} className="fcmap-inline-block fcmap-cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default CloseButton;
