import React from 'react';
import type { LatLngExpression } from 'leaflet';
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const hamburgCenter: LatLngExpression = [
    53.550359,
    9.986701,
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
  );
}

export default App;
