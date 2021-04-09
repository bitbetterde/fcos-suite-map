import type { LatLngExpression } from 'leaflet';

export interface PointOfInterest {
  id: number;
  lat: number;
  lng: number;
  name: string;
  description: string;
  address: string;
  website: string;
  category?: string;
  pathToBanner?: string;
}
