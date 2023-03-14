import { useState } from 'react';
import { useFilteredPoiData } from '../../hooks/useFilteredPoiData';
import { ChevronDownOutline as DownIcon } from 'heroicons-react';
import { useStore } from '../../hooks';

const MapLayerControl: React.FC = () => {
  const data = useStore((state) => state.poiData);
  const { filterCategories, setFilterCategories } = useFilteredPoiData();
  const layers = Array.from(new Set(data?.map((poi) => poi.category)));
  const [isOpen, setIsOpen] = useState(false);

  const onChangeCheckbox = (state: boolean, layer: string) => {
    if (state) {
      setFilterCategories([...filterCategories, layer]);
    } else {
      setFilterCategories(filterCategories.filter((cat) => cat !== layer));
    }
  };

  return (
    <div className="fcmap-shadow-lg fcmap-w-52 fcmap-absolute fcmap-left-5 fcmap-bottom-0 fcmap-mb-5 fcmap-mr-4 fcmap-bg-white fcmap-p-4 fcmap-z-10">
      <div
        className={`fcmap-flex fcmap-justify-between fcmap-cursor-pointer ${isOpen ? 'fcmap-mb-2' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="fcmap-text-base fcmap-font-semibold fcmap-text-gray-900">Kategorien:</h3>
        <DownIcon
          className={`fcmap-w-6 fcmap-h-6 fcmap-text-gray-400 fcmap-transform fcmap-transition fcmap-duration-300 ${
            isOpen ? 'fcmap-rotate-180' : 'fcmap-rotate-0'
          }`}
        />
      </div>
      {isOpen &&
        layers.map((layer) => {
          return (
            <div key={layer} className="fcmap-my-2">
              <label className="fcmap-inline-flex fcmap-items-center">
                <input
                  type="checkbox"
                  checked={!!filterCategories?.find((cat) => cat === layer)}
                  onChange={(e) => onChangeCheckbox(e.target.checked, layer)}
                />
                <span className="fcmap-ml-2 fcmap-text-black fcmap-text-sm">{layer}</span>
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default MapLayerControl;
