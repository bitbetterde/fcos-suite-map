import React from 'react';
import type { LatLngExpression } from 'leaflet';
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const hamburgCenter: LatLngExpression = [
    53.55035993851227,
    9.986701679608633,
  ];
  return (
    <MapContainer
      id={'mapid'}
      center={hamburgCenter}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={hamburgCenter}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
