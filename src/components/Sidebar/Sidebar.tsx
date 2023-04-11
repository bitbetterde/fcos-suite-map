import { useStore } from '../../hooks';
import SidebarListView from './SidebarListView';
import SidebarSingleView from './SidebarSingleView';
import SidebarContainer from './SidebarContainer';

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = ({ className }) => {
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
      {selectedPoi ? <SidebarSingleView /> : <SidebarListView />}
    </SidebarContainer>
  );
};

export default Sidebar;
