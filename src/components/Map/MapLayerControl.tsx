import React from 'react';
import { useFilteredPoiData } from '../../hooks/useFilteredPoiData';
import { usePoiData } from '../../hooks';

const MapLayerControl: React.FC = () => {
  const { data } = usePoiData();
  const { filterCategories, setFilterCategories } = useFilteredPoiData();
  const layers = Array.from(new Set(data?.map((poi) => poi.category)));

  const onChangeCheckbox = (state: boolean, layer: string) => {
    if (state) {
      setFilterCategories([...filterCategories, layer]);
    } else {
      setFilterCategories(filterCategories.filter((cat) => cat !== layer));
    }
  };

  return (
    <div className="border-2 border-black border-opacity-20 rounded-lg absolute right-0 bottom-0 mb-4 mr-4 bg-white p-4 z-10">
      {layers.map((layer) => {
        return (
          <div key={layer}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                checked={!!filterCategories?.find((cat) => cat === layer)}
                onChange={(e) => onChangeCheckbox(e.target.checked, layer)}
              />
              <span className="ml-2">{layer}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default MapLayerControl;
