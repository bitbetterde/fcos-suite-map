import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import SidebarListView from './Sidebar/SidebarListView';
// import mockData from './testData.json';
import type { PointOfInterest } from './types/PointOfInterest';
import SidebarSingleView from './Sidebar/SidebarSingleView';
import Map from './Map/Map';

function App() {
  const [poiData, setPoiData] = useState<PointOfInterest[]>([]);
  const [selectedPoi, setSelectedPoi] = useState<null | PointOfInterest>(null);
  const [hoveredPoiId, setHoveredPoiId] = useState<null | number>(null);

  const handlePoiClick = (id: number) => {
    const newPoi = poiData.find((poi) => poi.id === id);
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

  const { data, error } = useSWR(
    `{
      pois {
        id
        name
        description
        website
        lat
        lng
        pathToBanner
      }
    }
    `,
  );

  useEffect(() => {
    data && console.log('Fetched new data', data);
    data && data.pois && setPoiData(data.pois);
  }, [data]);

  useEffect(() => {
    error && console.error('Error while fetching', error);
  }, [error]);

  return (
    <div className={'flex md:flex-row-reverse flex-col h-full'}>
      <Map
        onMouseEnter={handlePoiHoverOn}
        onMouseLeave={handlePoiHoverOff}
        hoveredPoiId={hoveredPoiId}
        values={poiData}
        onSelect={handlePoiClick}
        selectedEntry={selectedPoi}
      />
      {selectedPoi ? (
        <SidebarSingleView className="sidebar" value={selectedPoi} onClose={handlePoiClose} />
      ) : (
        <SidebarListView
          onMouseEnter={handlePoiHoverOn}
          onMouseLeave={handlePoiHoverOff}
          className="sidebar"
          values={poiData}
          onClick={handlePoiClick}
        />
      )}
    </div>
  );
}

export default App;
