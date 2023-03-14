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
        className={`fcmap-border fcmap-border-grey-900 fcmap-border-opacity-40 ${
          hovered ? 'fcmap-border-opacity-100' : ''
        } fcmap-cursor-pointer`}
      >
        <img src={value.image} alt={value.name} className="fcmap-h-full fcmap-aspect-square" />
        <div className="fcmap-flex-col fcmap-gap-1">
          <h1 className="fcmap-title-font fcmap-text-base fcmap-font-bold fcmap-text-gray-900">{value.name}</h1>
          <h2 className="fcmap-text-sm fcmap-title-font fcmap-font-normal fcmap-text-gray-500 fcmap-mb-1">
            {value.category}
          </h2>
        </div>
      </div>
    )
  );
};

export default ListElement;
