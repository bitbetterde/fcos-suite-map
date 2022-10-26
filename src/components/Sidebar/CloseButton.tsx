import type { SyntheticEvent } from 'react';
import { X as CloseIcon } from 'heroicons-react';
interface Props {
  onClick: (event: SyntheticEvent) => void;
  absolute?: boolean;
}

const CloseButton: React.FC<Props> = ({ onClick, absolute = false }) => {
  return (
    <CloseIcon
      size={32}
      className={`${
        absolute ? 'fcmap-absolute fcmap-left-5 fcmap-top-5' : ''
      } fcmap-p-1 fcmap-text-gray-600 fcmap-inline-block fcmap-cursor-pointer fcmap-bg-gray-200 fcmap-bg-opacity-30 hover:fcmap-bg-opacity-80 fcmap-rounded-full`}
      onClick={onClick}
    />
  );
};

export default CloseButton;
