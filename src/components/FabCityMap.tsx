import { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useStore } from '../hooks';
import ErrorModal from './ErrorModal';
import Notification from './Notification';
import Map from './Map/Map';
import PoiLoader from './PoiLoader';
import { MapProvider } from 'react-map-gl/mapbox';
import MapLayerControl from './Map/MapLayerControl';
import FilterSelect from './FilterSelect';
import type { PointOfInterest } from 'src/types/PointOfInterest';
import Sidebar from './Sidebar/Sidebar';
import '@fchh/fcos-suite-ui/style.css';
import '../index.css';

interface FabCityMapProps {
  data: PointOfInterest[] | null;
  mapboxToken: string;
  className?: string;
  baseUrl?: string;
  mapStyle?: string;
  poiRoutePrefix?: string;
  categoryColorMapping?: Record<string, string>;
  tagColorMapping?: Record<string, string>;
  defaultCenter?: [number, number];
}

const FabCityMap: React.FC<FabCityMapProps> = ({
  data,
  categoryColorMapping,
  tagColorMapping,
  mapboxToken,
  className,
  baseUrl,
  mapStyle,
  poiRoutePrefix = '/poi',
}) => {
  const setPoiData = useStore((state) => state.setPoiData);
  const setCategoryColorMapping = useStore((state) => state.setCategoryColorMapping);
  const setTagColorMapping = useStore((state) => state.setTagColorMapping);

  useEffect(() => {
    if (data) {
      setPoiData(data);
    }
    if (categoryColorMapping) {
      setCategoryColorMapping(categoryColorMapping);
    }
    if (tagColorMapping) {
      setTagColorMapping(tagColorMapping);
    }
  }, []);

  return (
    <MapProvider>
      <Router {...(baseUrl ? { basename: baseUrl } : {})}>
        <ErrorModal />
        <Notification />
        <div className={`fcmap-h-full fcmap-bg-white fcmap-overflow-hidden ${className || ''}`}>
          <Route path="/">
            {/* This route will always match, so the actual Map is always visible */}
            <Map poiRoutePrefix={poiRoutePrefix} mapboxToken={mapboxToken} mapStyle={mapStyle} />
          </Route>
          <Route path={`${poiRoutePrefix || ''}/:poiId`}>
            {/* This route loads individual POIs */}
            {({ match }) => <PoiLoader poiId={match?.params?.poiId as string} />}
          </Route>
          <Route exact path="/">
            <PoiLoader poiId={null} />
          </Route>
          <div className="fcmap-absolute fcmap-w-full fcmap-h-full fcmap-top-0 fcmap-left-0 fcmap-px-5 fcmap-pt-7 fcmap-flex fcmap-flex-col fcmap-items-end fcmap-gap-4 fcmap-pointer-events-none fcmap-overflow-hidden">
            <Route exact path="/">
              <div className="fcmap-flex fcmap-flex-col md:fcmap-flex-row fcmap-justify-end fcmap-items-center fcmap-pointer-events-none fcmap-gap-4 md:fcmap-h-10">
                <MapLayerControl />
                <FilterSelect />
              </div>
            </Route>
            <Switch>
              <Route>
                <div className="fcmap-relative fcmap-h-full fcmap-w-full">
                  <Sidebar poiRoutePrefix={poiRoutePrefix} />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </MapProvider>
  );
};

export default FabCityMap;
