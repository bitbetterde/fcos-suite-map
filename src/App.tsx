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

  const handlePoiClick = (id: number) => {
    console.log('Selected', id);
    const newPoi = (data as PointOfInterest[]).find((poi) => poi.id === id);
    newPoi && setSelectedPoi(newPoi);
  };

  const handlePoiClose = () => {
    console.log('Close');
    setSelectedPoi(null);
  };

  return (
    <div className={'flex h-full'}>
      {selectedPoi ? (
        <SidebarSingleView style={{ flex: 1 }} value={selectedPoi} onClose={handlePoiClose} />
      ) : (
        <SidebarListView style={{ flex: 1 }} values={data as PointOfInterest[]} onClick={handlePoiClick} />
      )}

      <Map values={data as PointOfInterest[]} onSelect={handlePoiClick} selectedEntry={selectedPoi} />
    </div>
  );
}

export default App;
