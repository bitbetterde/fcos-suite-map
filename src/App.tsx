import React, { useState } from 'react';
import './App.css';
import SidebarListView from './Sidebar/SidebarListView';
import data from './testData.json';
import type { PointOfInterest } from './types/PointOfInterest';
import SidebarSingleView from './Sidebar/SidebarSingleView';
import Map from './Map/Map';

interface AppProps {}

function App({}: AppProps) {
  const [selectedPoi, setSelectedPoi] = useState<null | PointOfInterest>(null);
  const [hoveredPoiId, setHoveredPoiId] = useState<null | number>(null);

  const handlePoiClick = (id: number) => {
    const newPoi = (data as PointOfInterest[]).find((poi) => poi.id === id);
    newPoi && setSelectedPoi(newPoi);
  };

  const handlePoiClose = () => {
    setSelectedPoi(null);
  };

  const handlePoiHoverOn = (poiId: number) => {
    setHoveredPoiId(poiId);
  };

  const handlePoiHoverOff = () => {
    setHoveredPoiId(null);
  };

  return (
    <div className={'flex h-full'}>
      {selectedPoi ? (
        <SidebarSingleView style={{ flex: 1, minWidth: '250px' }} value={selectedPoi} onClose={handlePoiClose} />
      ) : (
        <SidebarListView
          onMouseEnter={handlePoiHoverOn}
          onMouseLeave={handlePoiHoverOff}
          style={{ flex: 1, minWidth: '250px' }}
          values={data as PointOfInterest[]}
          onClick={handlePoiClick}
        />
      )}

      <Map
        onMouseEnter={handlePoiHoverOn}
        onMouseLeave={handlePoiHoverOff}
        hoveredPoiId={hoveredPoiId}
        values={data as PointOfInterest[]}
        onSelect={handlePoiClick}
        selectedEntry={selectedPoi}
      />
    </div>
  );
}

export default App;
