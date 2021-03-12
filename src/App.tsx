import React from "react";
import type { LatLngExpression } from "leaflet";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "./App.css";
import { Sidebar } from "./Sidebar";

interface AppProps {
}

function App({}: AppProps) {
  const hamburgCenter: LatLngExpression = [
    53.55035993851227,
    9.986701679608633
  ];
  return (
    <div className={"flex h-full"}>
      <Sidebar style={{flex: 1}} />
      <MapContainer
        id={"mapid"}
        className={"h-full w-full"}
        style={{flex: 3}}
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
