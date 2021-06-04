import React, { useEffect } from 'react';
import { usePoiData, useStore } from '../hooks';

interface Props {
  poiId: string | null;
}

const PoiLoader: React.FC<Props> = ({ poiId }) => {
  const { data } = usePoiData();
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);

  useEffect(() => {
    if (data && poiId !== undefined) {
      const poi = poiId ? data.find((poi) => String(poi.id) === poiId) : null;
      if (poi !== undefined) setSelectedPoi(poi);
    }
  }, [data, poiId]);
  return <></>;
};

export default PoiLoader;
