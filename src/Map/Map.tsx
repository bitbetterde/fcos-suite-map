import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import React, { useMemo } from 'react';
import { divIcon, DivIconOptions } from 'leaflet';
import type { PointOfInterest } from '../types/PointOfInterest';
import type { LatLngExpression } from 'leaflet';
import MapViewController from './MapViewController';

interface Props {
  values: PointOfInterest[];
  onSelect: (id: number) => void;
  selectedEntry?: PointOfInterest | null;
  hoveredPoiId?: number | null;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
}

const DEFAULT_CENTER: LatLngExpression = [53.550359, 9.986701];

export const Map: React.FC<Props> = (props) => {
  const iconProps: DivIconOptions = {
    className: 'marker',
    // Source: https://fontawesome.com/icons/map-marker-alt
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>`,
    iconSize: [24, 32],
    iconAnchor: [12, 32],
  };
  const icon = useMemo(() => divIcon(iconProps), [iconProps]);
  const largeIcon = useMemo(() => divIcon({ ...iconProps, iconSize: [30, 40], iconAnchor: [15, 40] }), [iconProps]);
  const selectedLatlng: LatLngExpression | undefined = props.selectedEntry
    ? [props.selectedEntry?.lat, props.selectedEntry?.lng]
    : undefined;

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
      {!!(props.selectedEntry && selectedLatlng) && <Marker icon={largeIcon} position={selectedLatlng} />}
      {/* Multiple markers, when no POI is selected */}
      {!props.selectedEntry &&
        props.values &&
        props.values.map((poi) => {
          const poiLatLng: LatLngExpression = [poi.lat, poi.lng];
          return (
            <Marker
              icon={props.hoveredPoiId === poi.id ? largeIcon : icon}
              opacity={props.hoveredPoiId === poi.id ? 1 : 0.7}
              key={poi.id}
              position={poiLatLng}
              eventHandlers={{
                click: () => props.onSelect(poi.id),
                mouseover: () => {
                  props.onMouseEnter && props.onMouseEnter(poi.id);
                },
                mouseout: () => {
                  props.onMouseLeave && props.onMouseLeave();
                },
              }}
            />
          );
        })}
    </MapContainer>
  );
};

export default Map;
