import type { LatLngExpression } from 'leaflet';
import { divIcon, DivIconOptions } from 'leaflet';
import React, { useMemo } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { usePoiData, useStore } from '../../hooks';
import MapViewController from './MapViewController';

interface Props {
  hideAllPois?: boolean;
}

const DEFAULT_CENTER: LatLngExpression = [53.550359, 9.986701];
const iconProps: DivIconOptions = {
  className: 'marker',
  // Source: https://fontawesome.com/icons/map-marker-alt
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>`,
  iconSize: [24, 32],
  iconAnchor: [12, 32],
};

export const Map: React.FC<Props> = ({ hideAllPois = false }) => {
  const icon = useMemo(() => divIcon(iconProps), [iconProps]);
  const largeIcon = useMemo(() => divIcon({ ...iconProps, iconSize: [30, 40], iconAnchor: [15, 40] }), [iconProps]);

  const { data } = usePoiData();
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const setHoveredPoi = useStore((state) => state.setHoveredPoi);
  const selectedPoi = useStore((state) => state.selectedPoi);
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);
  const selectedLatlng: LatLngExpression | undefined = selectedPoi ? [selectedPoi?.lat, selectedPoi?.lng] : undefined;

  return (
    <MapContainer
      id={'mapid'}
      className={'h-full w-full z-0'}
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
        accessToken={import.meta.env.SNOWPACK_PUBLIC_MAPBOX_TOKEN}
        zoomOffset={-1}
        maxZoom={18}
      />
      <MapViewController center={selectedLatlng ?? DEFAULT_CENTER} zoom={13} />
      {/* Single marker when POI is selected */}
      {!!(selectedPoi && selectedLatlng && !hideAllPois) && <Marker icon={largeIcon} position={selectedLatlng} />}
      {/* Multiple markers, when no POI is selected */}
      {!selectedPoi &&
        !hideAllPois &&
        data?.map((poi) => {
          const poiLatLng: LatLngExpression = [poi.lat, poi.lng];
          return (
            <Marker
              icon={hoveredPoi?.id === poi.id ? largeIcon : icon}
              opacity={hoveredPoi?.id === poi.id ? 1 : 0.7}
              key={poi.id}
              position={poiLatLng}
              eventHandlers={{
                click: () => setSelectedPoi(poi),
                mouseover: () => {
                  setHoveredPoi(poi);
                },
                mouseout: () => {
                  setHoveredPoi(null);
                },
              }}
            />
          );
        })}
    </MapContainer>
  );
};

export default Map;
