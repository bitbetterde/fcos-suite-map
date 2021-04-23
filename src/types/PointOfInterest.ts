export interface PointOfInterest {
  id: number;
  lat: number;
  lng: number;
  name: string;
  description: string;
  address: string;
  website: string;
  category?: string;
  image?: string;
  tags: Tag[];
}

export interface Tag {
  id: string;
  displayName: string;
  color: string;
}

export interface PointsOfInterestDTO {
  pois: PointOfInterest[];
}
