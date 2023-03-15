import type { SyntheticEvent } from 'react';
import { X as CloseIcon } from 'heroicons-react';
interface Props {
  onClick: (event: SyntheticEvent) => void;
}

const CloseButton: React.FC<Props> = ({ onClick }) => {
  return (
    <CloseIcon
      size={28}
      className="fcmap-p-1 fcmap-text-gray-400 fcmap-inline-block fcmap-cursor-pointer"
      onClick={onClick}
    />
  );
};

export default CloseButton;
