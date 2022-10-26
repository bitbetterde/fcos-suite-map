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
    <div className="border-2 border-black w-52 border-opacity-20 rounded-lg absolute right-0 bottom-0 mb-4 mr-4 bg-white p-4 z-10">
      <div className={`flex justify-between cursor-pointer ${isOpen ? 'mb-2' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-base font-semibold text-gray-900">Kategorien:</h3>
        <DownIcon
          className={`w-6 h-6 text-gray-400 transform transition duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {isOpen &&
        layers.map((layer) => {
          return (
            <div key={layer} className="my-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={!!filterCategories?.find((cat) => cat === layer)}
                  onChange={(e) => onChangeCheckbox(e.target.checked, layer)}
                />
                <span className="ml-2 text-black text-sm">{layer}</span>
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default MapLayerControl;
