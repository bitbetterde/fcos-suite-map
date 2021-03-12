import React, { CSSProperties, useState } from 'react';
import SidebarContainer from './SidebarContainer';
import SidebarListElement from './SidebarListElement';
import type { PointOfInterest } from '../types/PointOfInterest';

interface Props {
  style?: CSSProperties;
  values: PointOfInterest[];
  onClick?: (id: number) => void;
}

const SidebarListView: React.FC<Props> = ({ values, onClick, ...restProps }) => {
  return (
    <SidebarContainer {...restProps}>
      {values.map((poi) => (
        <SidebarListElement key={poi.id} {...(onClick ? { onClick: () => onClick(poi.id) } : {})} value={poi} />
      ))}
    </SidebarContainer>
  );
};

export default SidebarListView;
