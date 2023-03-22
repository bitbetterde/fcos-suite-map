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

  const getPositionClasses = (isSidebarHidden: boolean, isSingleView: boolean) => {
    if (isSidebarHidden && isSingleView) {
      return '-fcmap-bottom-[calc(100%-70px)]';
    } else if (isSidebarHidden && !isSingleView) {
      return '-fcmap-bottom-[calc(100%-150px)] md:fcmap-top-[calc(100vh-108px)]';
    } else if (!isSidebarHidden) {
      return 'fcmap-bottom-0 md:fcmap-top-0';
    }
  };

  return (
    <SidebarContainer
      className={`fcmap-absolute fcmap-overflow-hidden fcmap-transition-[bottom] md:fcmap-transition-[top] fcmap-duration-700 fcmap-ease-in-out ${getPositionClasses(
        isSidebarHidden,
        Boolean(selectedPoi),
      )} ${className || ''}`}
      clickable={!isSidebarHidden}
    >
      {selectedPoi ? <SidebarSingleView /> : <SidebarListView />}
    </SidebarContainer>
  );
};

export default Sidebar;
