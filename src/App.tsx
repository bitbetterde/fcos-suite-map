import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import SidebarListView from './Sidebar/SidebarListView';
import type { PointOfInterest } from './types/PointOfInterest';
import SidebarSingleView from './Sidebar/SidebarSingleView';
import Map from './Map/Map';
import Modal from './Modal';
import { ExclamationOutline as AlertIcon } from 'heroicons-react';

function App() {
  const [poiData, setPoiData] = useState<PointOfInterest[]>([]);
  const [selectedPoi, setSelectedPoi] = useState<null | PointOfInterest>(null);
  const [hoveredPoiId, setHoveredPoiId] = useState<null | number>(null);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

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
    data?.pois && setPoiData(data.pois);
  }, [data]);

  useEffect(() => {
    error && console.error('Error while fetching', error);
    setShowErrorModal(true);
  }, [error]);

  return (
    <>
      {showErrorModal && (
        <Modal
          title="API nicht erreichbar"
          text="Kann die API nicht erreichen. Bitte später erneut probieren."
          icon={<AlertIcon className="h-6 w-6 text-red-600" />}
        />
      )}
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
    </>
  );
}

export default App;
