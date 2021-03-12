import type { LatLngExpression } from 'leaflet';
import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface Props {
  center: LatLngExpression;
  zoom: number;
}

const MapViewController: React.FC<Props> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom]);

  return <></>;
};

export default MapViewController;
