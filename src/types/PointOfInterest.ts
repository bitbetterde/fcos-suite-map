import type { LatLngExpression } from 'leaflet';

export interface PointOfInterest {
  id: number;
  latlng: LatLngExpression;
  name: string;
  description: string;
  address: string;
  category: string;
  website?: string;
  image: string;
}

interface Map {
  values: PointOfInterest[];
  onSelect: (entry: PointOfInterest) => void;
  selectedEntry: PointOfInterest;
}

interface Sidebar {
  values: PointOfInterest[];
  onSelect: (entry: PointOfInterest) => void;
  selectedEntry: PointOfInterest;
}
