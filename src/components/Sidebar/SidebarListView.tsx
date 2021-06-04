import React from 'react';
import { usePoiData, useStore } from '../../hooks';
import ListElement from './ListElement';
import SidebarContainer from './SidebarContainer';
import { removeDuplicateObjects } from '../../util/array';
import { useFilteredPoiData } from '../../hooks/useFilteredPoiData';
import type { Tag } from '../../types/PointOfInterest';
import Select from '../Select';

const SidebarListView: React.FC = () => {
  const tagsToSelectOptions = (tags?: Tag[]) => tags?.map((tag) => ({ label: tag.displayName, value: tag }));

  const { data } = usePoiData();
  const { data: filteredData, filterTags, setFilterTags } = useFilteredPoiData();
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const setHoveredPoi = useStore((state) => state.setHoveredPoi);
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);

  const tags =
    data &&
    removeDuplicateObjects(
      data?.flatMap((poi) => poi.tags),
      'id',
    );
  const options = tagsToSelectOptions(tags);

  return (
    <SidebarContainer>
      <div className="p-4">
        <Select
          options={options}
          isMulti={true}
          value={filterTags && tagsToSelectOptions(filterTags)}
          onChange={(selectedOptions) => setFilterTags(selectedOptions.map((opt) => opt.value))}
        />
      </div>
      <h1 className="text-xl font-medium title-font m-4 text-gray-900 mb-2">{filteredData?.length} Orte:</h1>
      {filteredData?.map((poi) => (
        <ListElement
          key={poi.id}
          onMouseEnter={() => setHoveredPoi(poi)}
          onMouseLeave={() => setHoveredPoi(null)}
          onClick={() => setSelectedPoi(poi)}
          value={poi}
          hovered={hoveredPoi?.id === poi.id}
        />
      ))}
    </SidebarContainer>
  );
};

export default SidebarListView;
