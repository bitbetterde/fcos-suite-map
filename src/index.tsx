import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FabCityMap from './components/FabCityMap';
import '@fontsource/inter';
import '@fontsource/ibm-plex-sans';
import mockData from './mock-data.json';

const container = document.getElementById('app');
const root = createRoot(container!);

const MAPBOX_TOKEN = import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN;
const POI_ROUTE_PREFIX = import.meta.env.VITE_PUBLIC_POI_ROUTE_PREFIX;
const MAP_STYLE = import.meta.env.VITE_MAP_STYLE;

/**
 * This entrypoint/file is only used as a demo/mock/dev setup when `npm run dev` is run within the project folder. This file is not used/relevant, when this is imported from another consuming project.
 */

root.render(
  <StrictMode>
    <FabCityMap
      data={mockData}
      mapboxToken={MAPBOX_TOKEN}
      mapStyle={MAP_STYLE}
      poiRoutePrefix={POI_ROUTE_PREFIX}
      tagColorMapping={{ Lasercutter: 'red' }}
      categoryColorMapping={{ Handwerksbetrieb: 'green' }}
    />
  </StrictMode>,
);
