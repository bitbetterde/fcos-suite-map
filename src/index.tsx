import React from 'react';
import { createRoot } from 'react-dom/client';
import FabCityMap from './components/FabCityMap';
import data from "./data.json"

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <FabCityMap data={data}/>
  </React.StrictMode>,
);
