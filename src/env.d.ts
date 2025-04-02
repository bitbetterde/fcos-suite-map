/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_MAPBOX_TOKEN: string;
  readonly VITE_PUBLIC_POI_ROUTE_PREFIX?: string;
  readonly VITE_MAP_STYLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
