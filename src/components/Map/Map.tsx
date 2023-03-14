import type React from 'react';
import { useEffect, useState } from 'react';
import { useStore, useFilteredPoiData } from '../../hooks';
import ReactMapGl, { Marker, useMap, AttributionControl } from 'react-map-gl';
import { useHistory } from 'react-router-dom';
import MapLayerControl from './MapLayerControl';
import { calcBoundsFromCoordinates } from '../../util/geo';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
  mapboxToken: string;
  mapStyle?: string;
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

const Map: React.FC<Props> = ({ mapboxToken, mapStyle }) => {
  const history = useHistory();
  const data = useStore((state) => state.poiData);
  const selectedPoi = useStore((state) => state.selectedPoi);
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const isSidebarHidden = useStore((state) => state.isSidebarHidden);
  const { data: filteredData } = useFilteredPoiData();
  const DEFAULT_CENTER: [number, number] = [9.986701, 53.550359];
  const { fcmap } = useMap();
  const [bounds, setBounds] = useState<[[number, number], [number, number]]>();
  const DEFAULT_MAP_PADDING = 50;
  const OVERLAY_WIDTH_PADDING = 300;

  useEffect(() => {
    const newBounds = calcBoundsFromCoordinates(data?.map((poi) => [poi.lng, poi.lat]) || [DEFAULT_CENTER]);
    setBounds(newBounds);
  }, [JSON.stringify(data)]);

  useEffect(() => {
    if (fcmap) {
      if (selectedPoi) {
        fcmap?.easeTo({
          center: [selectedPoi.lng, selectedPoi.lat],
          zoom: 14,
          duration: 1500,
          ...(!isSidebarHidden ? { padding: { right: OVERLAY_WIDTH_PADDING, left: 0, top: 0, bottom: 0 } } : {}),
        });
      } else if (!selectedPoi && bounds) {
        fcmap?.fitBounds(bounds, {
          ...(!isSidebarHidden
            ? {
                padding: {
                  right: DEFAULT_MAP_PADDING + OVERLAY_WIDTH_PADDING,
                  left: DEFAULT_MAP_PADDING,
                  top: DEFAULT_MAP_PADDING,
                  bottom: DEFAULT_MAP_PADDING,
                },
              }
            : {}),
          maxZoom: 16,
        });
      }
    }
  }, [selectedPoi, bounds, fcmap, isSidebarHidden]);

  return (
    <ReactMapGl
      initialViewState={{
        latitude: DEFAULT_CENTER[1],
        longitude: DEFAULT_CENTER[0],
        zoom: 10,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle={mapStyle ?? 'mapbox://styles/mapbox/light-v11'}
      mapboxAccessToken={mapboxToken}
      maxPitch={0}
      id="fcmap"
      attributionControl={false}
    >
      <AttributionControl position="top-left" />
      <MapLayerControl />
      {selectedPoi ? (
        <Marker key={selectedPoi.id} longitude={selectedPoi.lng} latitude={selectedPoi.lat} anchor="bottom">
          <MarkerSvg className="fcmap-w-8 fcmap-h-8 fcmap-opacity-100 fcmap-scale-125 fcmap-text-fabcity-red" />
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
                className={`fcmap-transition fcmap-ease-in-out fcmap-w-8 fcmap-h-8 hover:fcmap-scale-125 fcmap-opacity-70 hover:fcmap-opacity-100 hover:fcmap-cursor-pointer fcmap-text-fabcity-red ${
                  isHovered ? 'fcmap-scale-125 fcmap-opacity-100' : ''
                }`}
              />
            </Marker>
          );
        })
      )}
    </ReactMapGl>
  );
};

export default Map;
