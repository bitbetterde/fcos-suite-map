import { useFilteredPoiData } from '../../hooks/useFilteredPoiData';
import { useStore } from '../../hooks';
import { Pill } from '@fchh/fcos-suite-ui';

const MapLayerControl: React.FC = () => {
  const data = useStore((state) => state.poiData);
  const { filterCategories, setFilterCategories } = useFilteredPoiData();
  const layers = Array.from(new Set(data?.map((poi) => poi.category)));

  const onChangePills = (layer: string) => {
    const isFilterActive = filterCategories.includes(layer);
    if (isFilterActive) {
      const updatedFilters = filterCategories.filter((filter) => filter !== layer);
      setFilterCategories(updatedFilters);
    } else {
      setFilterCategories([...filterCategories, layer]);
    }
  };

  return (
    <div className="fcmap-order-2 md:fcmap-order-1 fcmap-flex fcmap-items-start fcmap-justify-center md:fcmap-justify-end fcmap-flex-wrap fcmap-gap-[9px] fcmap-pointer-events-auto">
      {layers.map((layer) => {
        return (
          <Pill
            key={layer}
            type={filterCategories.includes(layer) ? 'info' : 'white'}
            size="sm"
            rounded
            title={layer}
            className="fcmap-shadow-lg fcmap-text-sm fcmap-font-plex fcmap-font-medium fcmap-text-gray-800"
            onClick={() => {
              onChangePills(layer);
            }}
          />
        );
      })}
    </div>
  );
};

export default MapLayerControl;
