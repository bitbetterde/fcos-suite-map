import { useEffect } from 'react';
import { useStore } from '../hooks';

interface Props {
  poiId: string | null;
}

const PoiLoader: React.FC<Props> = ({ poiId }) => {
  const data = useStore((state) => state.poiData);
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);

  useEffect(() => {
    if (data && poiId !== undefined) {
      const poi = poiId ? data.find((poi) => String(poi.id) === poiId) : null;

      if (poi !== undefined) {
        setSelectedPoi(poi);
      }
    }
  }, [poiId, data]);
  return <></>;
};

export default PoiLoader;
