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
        absolute ? 'absolute left-5 top-5' : ''
      } p-1 text-gray-600 inline-block cursor-pointer bg-gray-200 bg-opacity-30 hover:bg-opacity-80 rounded-full`}
      onClick={onClick}
    />
  );
};

export default CloseButton;
