import type { PointsOfInterestDTO } from 'src/types/PointOfInterest';
import useSWR from 'swr';

export const usePoiData = () => {
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
