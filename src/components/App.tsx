import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStore } from '../hooks';
import ErrorModal from './ErrorModal';
import Map from './Map/Map';
import SidebarCreateView from './Sidebar/SidebarCreateView';
import SidebarListView from './Sidebar/SidebarListView';
import SidebarSingleView from './Sidebar/SidebarSingleView';

const App = () => {
  const selectedPoi = useStore((state) => state.selectedPoi);

  return (
    <>
      <ErrorModal />
      <div className={'flex md:flex-row-reverse flex-col h-full'}>
        <Route path="/add" children={({ match }) => <Map hideAllPois={!!match} />} />
        <Switch>
          <Route exact path="/add">
            <SidebarCreateView />
          </Route>
          <Route>{selectedPoi ? <SidebarSingleView /> : <SidebarListView />}</Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
