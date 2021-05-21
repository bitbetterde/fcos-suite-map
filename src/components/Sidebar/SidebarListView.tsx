import React from 'react';
import { usePoiData, useStore } from '../../hooks';
import ListElement from './ListElement';
import SidebarContainer from './SidebarContainer';

const SidebarListView: React.FC = () => {
  const { data } = usePoiData();
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const setHoveredPoi = useStore((state) => state.setHoveredPoi);
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);

  return (
    <SidebarContainer>
      <h1 className="text-xl font-medium title-font m-4 text-gray-900 mb-2">{data?.length} Orte:</h1>
      {data?.map((poi) => (
        <ListElement
          key={poi.id}
          onMouseEnter={() => setHoveredPoi(poi)}
          onMouseLeave={() => setHoveredPoi(null)}
          onClick={() => setSelectedPoi(poi)}
          value={poi}
          hovered={hoveredPoi?.id === poi.id}
        />
      ))}
    </SidebarContainer>
  );
};

export default SidebarListView;
