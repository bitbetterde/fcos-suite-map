import type { PointOfInterest, PointsOfInterestDTO } from 'src/types/PointOfInterest';
import useSWR from 'swr';

export interface poiData {
  data: PointOfInterest[] | undefined;
}

export const usePoiData = (): poiData => {
  const { data } = useSWR<PointsOfInterestDTO>(
    `{
      pois {
        id
        name
        description
        website
        address
        lat
        lng
        image
        category
        relationStatus
        tags {
          id
          displayName
          displayName
          color
        }
      }
    }
    `,
  );

  return { data: data?.pois };
};
