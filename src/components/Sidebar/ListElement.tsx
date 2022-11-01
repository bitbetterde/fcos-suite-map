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
        } fcmap-cursor-pointer fcmap-mx-4 fcmap-my-2`}
      >
        <div className="fcmap-p-3">
          <h2 className="fcmap-tracking-widest fcmap-text-xs fcmap-uppercase fcmap-title-font fcmap-font-medium fcmap-text-gray-400 fcmap-mb-1">
            {value.category}
          </h2>
          <h1 className="fcmap-title-font fcmap-text-lg fcmap-font-medium fcmap-text-gray-900">{value.name}</h1>
        </div>
      </div>
    )
  );
};

export default ListElement;
