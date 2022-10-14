import type { SyntheticEvent } from 'react';
import type { PointOfInterest } from 'src/types/PointOfInterest';

interface Props {
  value: PointOfInterest;
  hovered?: boolean;
  onMouseEnter: (event: SyntheticEvent) => void;
  onMouseLeave: (event: SyntheticEvent) => void;
  onClick: (event: SyntheticEvent) => void;
}

const ListElement: React.FC<Props> = ({ value, hovered, ...restProps }) => {
  return (
    value && (
      <div
        {...restProps}
        className={`border-2 border-black border-opacity-20 ${
          hovered ? 'border-opacity-40' : 'hover:border-opacity-40'
        } cursor-pointer rounded-lg mx-4 my-2`}
      >
        <div className="p-3">
          <h2 className="tracking-widest text-xs uppercase title-font font-medium text-gray-400 mb-1">
            {value.category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900">{value.name}</h1>
        </div>
      </div>
    )
  );
};

export default ListElement;
