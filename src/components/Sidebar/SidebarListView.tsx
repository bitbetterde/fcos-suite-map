import React from 'react';
import { usePoiData, useStore } from '../../hooks';
import ListElement from './ListElement';
import SidebarContainer from './SidebarContainer';
import Select from 'react-select';

const SidebarListView: React.FC = () => {
  const { data } = usePoiData();
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const setHoveredPoi = useStore((state) => state.setHoveredPoi);
  const setSelectedPoi = useStore((state) => state.setSelectedPoi);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <SidebarContainer>
      <div className="p-4">
        <Select
          defaultValue={[options[2], options[3]]}
          isMulti
          name="pois"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <h1 className="text-xl font-medium title-font m-4 text-gray-900 mb-2">{data?.length} Orte:</h1>
      {data?.map((poi) => (
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
