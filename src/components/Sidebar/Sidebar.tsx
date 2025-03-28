import { useStore } from '../../hooks';
import SidebarListView from './SidebarListView';
import SidebarSingleView from './SidebarSingleView';
import SidebarContainer from './SidebarContainer';

interface SidebarProps {
  className?: string;
  poiRoutePrefix?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className, poiRoutePrefix }) => {
  const selectedPoi = useStore((state) => state.selectedPoi);
  const isSidebarHidden = useStore((state) => state.isSidebarHidden);

  const getPositionClasses = (isSidebarHidden: boolean) => {
    if (isSidebarHidden) {
      return 'fcmap-absolute fcmap-right-0 fcmap-translate-y-full fcmap-bottom-[55px]';
    } else {
      return 'fcmap-absolute fcmap-right-0 fcmap-translate-y-full fcmap-bottom-[100%]';
    }
  };

  return (
    <SidebarContainer
      className={`fcmap-overflow-hidden fcmap-transition-all fcmap-duration-700 fcmap-ease-in-out ${getPositionClasses(
        isSidebarHidden,
      )} ${className || ''}`}
      clickable={true}
    >
      {selectedPoi ? <SidebarSingleView /> : <SidebarListView poiRoutePrefix={poiRoutePrefix} />}
    </SidebarContainer>
  );
};

export default Sidebar;
