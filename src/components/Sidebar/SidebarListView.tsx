import { useStore } from '../../hooks';
import ListElement from './ListElement';
import { useFilteredPoiData } from '../../hooks/useFilteredPoiData';
import { useHistory } from 'react-router-dom';
import MinimizeButton from './MinimizeButton';
import SidebarHeader from './SidebarHeader';

const SidebarListView: React.FC = () => {
  const history = useHistory();
  const { data: filteredData } = useFilteredPoiData();
  const hoveredPoi = useStore((state) => state.hoveredPoi);
  const setHoveredPoi = useStore((state) => state.setHoveredPoi);
  const isSidebarHidden = useStore((state) => state.isSidebarHidden);
  const setIsSidebarHidden = useStore((state) => state.setIsSidebarHidden);

  return (
    <>
      <SidebarHeader>
        <h1 className="fcmap-text-lg fcmap-font-medium fcmap-font-plex fcmap-text-gray-900">
          {filteredData?.length} Orte:
        </h1>
        <div className="fcmap-flex fcmap-justify-end">
          <MinimizeButton
            isMinimized={isSidebarHidden}
            onClick={() => {
              setIsSidebarHidden(!isSidebarHidden);
            }}
          />
        </div>
      </SidebarHeader>
      <div className="fcmap-overflow-y-auto fcmap-flex fcmap-flex-col fcmap-gap-6 fcmap-m-4 fcmap-mr-2 fcmap-pr-2">
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
      </div>
    </>
  );
};

export default SidebarListView;
