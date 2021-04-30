import type { LatLngTuple } from 'leaflet';
import React, { useEffect } from 'react';
import { useMap, useMapEvent } from 'react-leaflet';
import { useStore } from '../../hooks';

interface Props {
  center: LatLngTuple;
  zoom: number;
  createPoiMode?: boolean;
}

const MapViewController: React.FC<Props> = ({ center, zoom, createPoiMode }) => {
  const setDraftPoi = useStore((state) => state.setDraftPoi);
  const map = useMap();

  useMapEvent('click', (event) => {
    if (createPoiMode) {
      setDraftPoi([event.latlng.lat, event.latlng.lng]);
    }
  });

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom]);

  return <></>;
};

export default MapViewController;
