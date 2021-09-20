import type { LatLngTuple } from 'leaflet';
import React, { useEffect } from 'react';
import { useMap, useMapEvent } from 'react-leaflet';
import { useStore } from '../../hooks';

interface Props {
  bounds: Array<LatLngTuple>;
  createPoiMode?: boolean;
}

const MapViewController: React.FC<Props> = ({ bounds, createPoiMode }) => {
  const setDraftPoi = useStore((state) => state.setDraftPoi);
  const map = useMap();

  useMapEvent('click', (event) => {
    if (createPoiMode) {
      setDraftPoi([event.latlng.lat, event.latlng.lng]);
    }
  });

  useEffect(() => {
    map.fitBounds(bounds, { maxZoom: 16 });
  }, [bounds]);

  return <></>;
};

export default MapViewController;
