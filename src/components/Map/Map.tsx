import type React from 'react';
import { useEffect, useState } from 'react';
import { useStore, useFilteredPoiData } from '../../hooks';
import ReactMapGl, { Marker, useMap, AttributionControl } from 'react-map-gl/mapbox';
import { useHistory } from 'react-router-dom';
import { calcBoundsFromCoordinates } from '../../util/geo';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useWindowSize } from 'usehooks-ts';

interface Props {
  mapboxToken: string;
  mapStyle?: string;
}

interface MarkerProps {
  className: string;
  [x: string]: unknown;
}

const MarkerSvg: React.FC<MarkerProps> = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} {...props}>
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
  const setHoveredPoi = useStore((state) => state.setHoveredPoi);
  const isSidebarHidden = useStore((state) => state.isSidebarHidden);
  const isDesktop = useStore((state) => state.isDesktop);
  const setIsDesktop = useStore((state) => state.setIsDesktop);
  const { data: filteredData } = useFilteredPoiData();
  const DEFAULT_CENTER: [number, number] = [9.986701, 53.550359];
  const { fcmap } = useMap();
  const [bounds, setBounds] = useState<[[number, number], [number, number]]>();
  const DEFAULT_MAP_PADDING = 50;
  const OVERLAY_WIDTH_PADDING = 330;
  const window = useWindowSize();

  const calculateMapPadding = (sidebarHidden: boolean, desktop: boolean) => {
    if (desktop && !sidebarHidden) {
      return {
        right: DEFAULT_MAP_PADDING + OVERLAY_WIDTH_PADDING,
        left: DEFAULT_MAP_PADDING,
        top: DEFAULT_MAP_PADDING,
        bottom: DEFAULT_MAP_PADDING,
      };
    }
    return DEFAULT_MAP_PADDING;
  };

  useEffect(() => {
    const newBounds = calcBoundsFromCoordinates(data?.map((poi) => [poi.lng, poi.lat]) || [DEFAULT_CENTER]);
    setBounds(newBounds);
  }, [JSON.stringify(data)]);

  useEffect(() => {
    if (fcmap) {
      if (selectedPoi) {
        const options = {
          center: [selectedPoi.lng, selectedPoi.lat] as [number, number],
          zoom: 14,
          duration: 1500,
          padding: calculateMapPadding(isSidebarHidden, isDesktop),
        };
        fcmap?.easeTo(options);
      } else if (!selectedPoi && bounds) {
        const options = {
          duration: 1000,
          padding: calculateMapPadding(isSidebarHidden, isDesktop),
        };
        fcmap?.fitBounds(bounds, options);
      }
    }
  }, [selectedPoi, bounds, fcmap, isSidebarHidden, isDesktop]);

  useEffect(() => {
    let newValue;
    if ((window?.width ?? 0) > 768) {
      newValue = true;
    } else {
      newValue = false;
    }
    if (newValue !== isDesktop) {
      setIsDesktop(newValue);
    }
  }, [window]);

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
                onMouseEnter={() => setHoveredPoi(poi)}
                onMouseLeave={() => setHoveredPoi(null)}
              />
            </Marker>
          );
        })
      )}
    </ReactMapGl>
  );
};

export default Map;
