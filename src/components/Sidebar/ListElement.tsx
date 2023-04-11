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
        className="fcmap-flex fcmap-justify-start fcmap-items-start fcmap-h-[75px] fcmap-gap-4 fcmap-cursor-pointer"
      >
        <img src={value.image} alt={value.name} className="fcmap-h-full fcmap-aspect-square fcmap-object-cover" />
        <div className="fcmap-flex-col fcmap-gap-1">
          <h1
            className={`fcmap-font-plex fcmap-text-base fcmap-font-bold fcmap-multi-line-gray-900 hover:fcmap-multi-line-underline ${
              hovered ? 'fcmap-multi-line-underline' : ''
            } fcmap-text-gray-900 `}
          >
            {value.name}
          </h1>
          <h2 className="fcmap-text-sm fcmap-font-plex fcmap-font-normal fcmap-text-gray-500 fcmap-mb-1">
            {value.category}
          </h2>
        </div>
      </div>
    )
  );
};

export default ListElement;
