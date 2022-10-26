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
        onClick ? 'fcmap-cursor-pointer ' : ''
      }fcmap-inline-flex fcmap-flex-nowrap fcmap-items-center fcmap-px-2 fcmap-py-0.5 fcmap-m-0.5 fcmap-rounded-full fcmap-text-sm fcmap-font-medium fcmap-bg-indigo-100 fcmap-text-indigo-800 fcmap-mr-2 fcmap-whitespace-nowrap`}
      style={color ? { backgroundColor: color } : {}}
    >
      {children}
      {onClickDelete && (
        <CloseIcon
          onClick={onClickDelete}
          className="fcmap-ml-0.5 fcmap-inline-block fcmap-cursor-pointer fcmap-text-gray-600 hover:fcmap-text-gray-800"
          size={12}
        />
      )}
    </div>
  );
};

export default Tag;
