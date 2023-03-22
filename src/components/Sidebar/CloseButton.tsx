import type { SyntheticEvent } from 'react';
import { X as CloseIcon } from 'heroicons-react';
interface Props {
  onClick: (event: SyntheticEvent) => void;
}

const CloseButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="fcmap-p-1 fcmap-flex fcmap-items-center fcmap-justify-center">
      <CloseIcon size={24} className="fcmap-text-gray-400 fcmap-inline-block fcmap-cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default CloseButton;
