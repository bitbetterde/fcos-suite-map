import React from 'react';
import { X as CloseIcon } from 'heroicons-react';

interface Props {
  children: string | JSX.Element;
  color?: string;
  onClick?: () => void;
  onClickDelete?: () => void;
}

const Tag: React.FC<Props> = ({ children, onClick, onClickDelete, color = 'pink' }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        onClick ? 'cursor-pointer ' : ''
      }inline-flex flex-nowrap items-center px-2 py-0.5 m-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mr-2 whitespace-nowrap`}
      style={color ? { backgroundColor: color } : {}}
    >
      {children}
      {onClickDelete && (
        <CloseIcon
          onClick={onClickDelete}
          className="ml-0.5 inline-block cursor-pointer text-gray-600 hover:text-gray-800"
          size={12}
        />
      )}
    </div>
  );
};

export default Tag;
