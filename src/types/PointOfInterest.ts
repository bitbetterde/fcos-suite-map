export interface PointOfInterestBase {
  lat: number;
  lng: number;
  name: string;
  description: string;
  address: string;
  website: string;
  category: string;
  relationStatus: string;
}
export interface PointOfInterest extends PointOfInterestBase {
  id: number;
  image?: string;
  tags: Tag[];
}

export interface PointOfInterestFormData extends PointOfInterestBase {
  email: string;
  image: File | null;
  tags: number[];
}

export interface Tag {
  id: string;
  displayName: string;
  color: string;
}

export interface PointsOfInterestDTO {
  pois: PointOfInterest[];
}
