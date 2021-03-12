import React, { useState } from 'react';
import type { LatLngExpression } from 'leaflet';
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import './App.css';
import SidebarListView from './Sidebar/SidebarListView';
import data from './testData.json';
import type { PointOfInterest } from './types/PointOfInterest';
import SidebarSingleView from './Sidebar/SidebarSingleView';

interface AppProps {}

function App({}: AppProps) {
  const hamburgCenter: LatLngExpression = [53.550359, 9.986701];
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

      <MapContainer
        id={'mapid'}
        className={'h-full w-full'}
        style={{ flex: 3 }}
        center={hamburgCenter}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          id="mapbox/streets-v11"
          tileSize={512}
          accessToken="pk.eyJ1IjoicHJleWEyayIsImEiOiJja202N2JucGowbGU4MnB1aWtxNGkzMW9jIn0.rVBLRZtohLEgdSLO0nlWng"
          zoomOffset={-1}
          maxZoom={18}
        />
        <Marker position={hamburgCenter}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
