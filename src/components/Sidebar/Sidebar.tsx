import { useStore } from '../../hooks';
import SidebarListView from './SidebarListView';
import SidebarSingleView from './SidebarSingleView';
import SidebarContainer from './SidebarContainer';
import clsx from 'clsx';

interface SidebarProps {
  className?: string;
  poiRoutePrefix?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className, poiRoutePrefix }) => {
  const selectedPoi = useStore((state) => state.selectedPoi);
  const isSidebarHidden = useStore((state) => state.isSidebarHidden);

  return (
    <SidebarContainer
      className={clsx(
        'fcmap-overflow-hidden fcmap-transition-all fcmap-duration-700 fcmap-ease-in-out fcmap-absolute fcmap-right-0 fcmap-translate-y-full',
        isSidebarHidden ? 'fcmap-bottom-[55px]' : 'fcmap-bottom-[100%]',
        className,
      )}
      clickable={true}
    >
      {selectedPoi ? <SidebarSingleView /> : <SidebarListView poiRoutePrefix={poiRoutePrefix} />}
    </SidebarContainer>
  );
};

export default Sidebar;
