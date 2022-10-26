import type React from 'react';
import { useEffect } from 'react';
import { useStore, useFilteredPoiData } from '../../hooks';
import Map, { Marker, useMap, AttributionControl } from 'react-map-gl';
import { useHistory } from 'react-router-dom';
import MapLayerControl from './MapLayerControl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
  mapboxToken: string;
}

interface MarkerProps {
  className: string;
}

const MarkerSvg: React.FC<MarkerProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className}>
      <path
        fill="currentColor"
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      />
    </svg>
  );
};

export const MapGl: React.FC<Props> = ({ mapboxToken }) => {
  const history = useHistory();
  const data = useStore((state) => state.poiData);
  const selectedPoi = useStore((state) => state.selectedPoi);
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const { data: filteredData } = useFilteredPoiData();
  const DEFAULT_CENTER: [number, number] = [9.986701, 53.550359];
  const { fcmap } = useMap();

  useEffect(() => {
    if (selectedPoi) fcmap?.easeTo({ center: [selectedPoi.lng, selectedPoi.lat], zoom: 14, duration: 1500 });
  }, [selectedPoi]);

  return (
    <Map
      initialViewState={{
        latitude: DEFAULT_CENTER[1],
        longitude: DEFAULT_CENTER[0],
        zoom: 10,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapboxToken}
      maxPitch={0}
      id="fcmap"
      attributionControl={false}
    >
      <AttributionControl position='top-right' />
      <MapLayerControl />
      {selectedPoi ? (
        <Marker key={selectedPoi.id} longitude={selectedPoi.lng} latitude={selectedPoi.lat} anchor="bottom">
          <MarkerSvg className="w-8 h-8 opacity-100 scale-125 text-fabcity-red" />
        </Marker>
      ) : (
        (filteredData || data)?.map((poi) => {
          const isHovered = hoveredPoi?.id === poi.id;
          return (
            <Marker
              key={poi.id}
              longitude={poi.lng}
              latitude={poi.lat}
              anchor="bottom"
              onClick={() => {
                history.push(`/poi/${String(poi.id)}`);
              }}
            >
              <MarkerSvg
                className={`transition ease-in-out w-8 h-8 hover:scale-125 opacity-70 hover:opacity-100 hover:cursor-pointer text-fabcity-red ${
                  isHovered ? 'scale-125 opacity-100' : ''
                }`}
              />
            </Marker>
          );
        })
      )}
    </Map>
  );
};

export default MapGl;
