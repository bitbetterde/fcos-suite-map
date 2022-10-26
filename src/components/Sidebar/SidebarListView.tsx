import { useState } from 'react';
import { useStore } from '../../hooks';
import ListElement from './ListElement';
import SidebarContainer from './SidebarContainer';
import { removeDuplicateObjects } from '../../util/array';
import { useFilteredPoiData } from '../../hooks/useFilteredPoiData';
import type { Tag } from '../../types/PointOfInterest';
import { FilterOutline as FilterIcon } from 'heroicons-react';
import { useHistory } from 'react-router-dom';
import Select from '../Select';

const SidebarListView: React.FC = () => {
  const tagsToSelectOptions = (tags?: Tag[]) => tags?.map((tag) => ({ label: tag.displayName, value: tag }));
  const history = useHistory();

  const data = useStore((state) => state.poiData);
  const { data: filteredData, filterTags, setFilterTags } = useFilteredPoiData();
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const setHoveredPoi = useStore((state) => state.setHoveredPoi);
  const [filterInputIsOpen, setFilterInputIsOpen] = useState(false);

  const tags =
    data &&
    removeDuplicateObjects(
      data?.flatMap((poi) => poi.tags),
      'id',
    );
  const options = tagsToSelectOptions(tags);

  return (
    <SidebarContainer>
      <div className="flex-col m-4 mb-2 pb-2 border-black border-opacity-20 border-b-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium title-font text-gray-900">{filteredData?.length} Orte:</h1>
          <FilterIcon
            onClick={() => setFilterInputIsOpen(!filterInputIsOpen)}
            className="text-black text-opacity-20 hover:text-opacity-60 w-5 h-5 cursor-pointer"
          />
        </div>

        {filterInputIsOpen && (
          <div className="py-2">
            <Select
              options={options}
              isMulti={true}
              value={filterTags && tagsToSelectOptions(filterTags)}
              onChange={(selectedOptions) => setFilterTags(selectedOptions.map((opt) => opt.value))}
            />
          </div>
        )}
      </div>

      {filteredData?.map((poi) => (
        <ListElement
          key={poi.id}
          onMouseEnter={() => setHoveredPoi(poi)}
          onMouseLeave={() => setHoveredPoi(null)}
          onClick={() => {
            history.push(`/poi/${String(poi.id)}`);
          }}
          value={poi}
          hovered={hoveredPoi?.id === poi.id}
        />
      ))}
    </SidebarContainer>
  );
};

export default SidebarListView;
