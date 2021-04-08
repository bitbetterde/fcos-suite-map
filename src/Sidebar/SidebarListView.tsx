import React, { CSSProperties } from 'react';
import SidebarContainer from './SidebarContainer';
import SidebarListElement from './SidebarListElement';
import type { PointOfInterest } from '../types/PointOfInterest';

interface Props {
  style?: CSSProperties;
  values: PointOfInterest[];
  onClick?: (id: number) => void;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
  className?: string;
}

const SidebarListView: React.FC<Props> = ({ values, onMouseEnter, onMouseLeave, onClick, ...restProps }) => {
  return (
    values && (
      <SidebarContainer {...restProps}>
        <h1 className="text-xl font-medium title-font m-4 text-gray-900 mb-2">{values.length} Orte:</h1>
        {values.map((poi) => (
          <SidebarListElement
            key={poi.id}
            {...(onMouseLeave ? { onMouseLeave: () => onMouseLeave() } : {})}
            {...(onMouseEnter ? { onMouseEnter: () => onMouseEnter(poi.id) } : {})}
            {...(onClick ? { onClick: () => onClick(poi.id) } : {})}
            value={poi}
          />
        ))}
      </SidebarContainer>
    )
  );
};

export default SidebarListView;
