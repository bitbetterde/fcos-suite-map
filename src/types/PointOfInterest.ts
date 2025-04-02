export interface PointOfInterestBase {
  lat: number;
  lng: number;
  name: string;
  description: string;
  address: string;
  website: string;
  category: string;
}

export interface PointOfInterest extends PointOfInterestBase {
  id: string;
  image?: string;
  tags: string[];
}
