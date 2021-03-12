import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React from 'react';
import type { PointOfInterest } from '../types/PointOfInterest';
import type { LatLngExpression } from 'leaflet';
import MapViewController from './MapViewController';

interface Props {
  values: PointOfInterest[];
  onSelect: (id: number) => void;
  selectedEntry?: PointOfInterest | null;
}

const DEFAULT_CENTER: LatLngExpression = [53.550359, 9.986701];

export const Map: React.FC<Props> = (props) => {
  return (
    <MapContainer
      id={'mapid'}
      className={'h-full w-full'}
      style={{ flex: 3 }}
      center={DEFAULT_CENTER}
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
      <MapViewController center={props.selectedEntry?.latlng ?? DEFAULT_CENTER} zoom={13} />
      {!!props.selectedEntry && <Marker position={props.selectedEntry.latlng} />}
      {!props.selectedEntry &&
        props.values.map((poi) => (
          <Marker key={poi.id} position={poi.latlng} eventHandlers={{ click: () => props.onSelect(poi.id) }} />
        ))}
    </MapContainer>
  );
};

export default Map;
