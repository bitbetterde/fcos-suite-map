import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStore } from '../hooks';
import ErrorModal from './ErrorModal';
import Notification from './Notification';
import Map from './Map/Map';
import SidebarListView from './Sidebar/SidebarListView';
import SidebarSingleView from './Sidebar/SidebarSingleView';
import PoiLoader from './PoiLoader';
import { BrowserRouter as Router } from 'react-router-dom';
import { MapProvider } from 'react-map-gl';
import '../index.css';

interface Props {
  data: any;
  mapboxToken: string;
  className?: string;
}

const FabCityMap: React.FC<Props> = ({ data, mapboxToken, className }) => {
  const selectedPoi = useStore((state) => state.selectedPoi);
  const setPoiData = useStore((state) => state.setPoiData);

  useEffect(() => {
    setPoiData(data);
  }, []);

  return (
    <MapProvider>
      <Router>
        <ErrorModal />
        <Notification />
        <div className={`flex md:flex-row-reverse flex-col h-full bg-white ${className || ''}`}>
          <Route path="/">
            <Map mapboxToken={mapboxToken} />
          </Route>
          <Route path="/poi/:poiId">{({ match }) => <PoiLoader poiId={match?.params?.poiId as string} />}</Route>
          <Route exact path="/">
            <PoiLoader poiId={null} />
          </Route>
          <Switch>
            <Route>{selectedPoi ? <SidebarSingleView /> : <SidebarListView />}</Route>
          </Switch>
        </div>
      </Router>
    </MapProvider>
  );
};

export default FabCityMap;
