import type { Error } from 'src/types/Error';
import type { PointOfInterest } from 'src/types/PointOfInterest';
import type { Notification } from 'src/types/Notification';
import type { LatLngTuple } from 'leaflet';
import create, { GetState, SetState, State, StateCreator, StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store extends State {
  selectedPoi: PointOfInterest | null;
  setSelectedPoi: (poi: PointOfInterest | null) => void;
  hoveredPoi: PointOfInterest | null;
  setHoveredPoi: (poi: PointOfInterest | null) => void;
  error: Error | null;
  setError: (error: Error | null) => void;
  draftPoi: LatLngTuple | null;
  setDraftPoi: (latLng: LatLngTuple | null) => void;
  notification: Notification | null;
  setNotification: (notification: Notification | null) => void;
}

// const log = (config: StateCreator<Store>) => (set: SetState<Store>, get: GetState<Store>, api: StoreApi<Store>) =>
//   config(
//     (args) => {
//       console.group('Global state changed');
//       console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', args);
//       set(args);
//       console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', get());
//       console.groupEnd();
//     },
//     get,
//     api,
//   );

export const useStore = create<Store>(
  devtools((set) => ({
    selectedPoi: null,
    setSelectedPoi: (poi) => {
      set({
        selectedPoi: poi,
      });
    },
    hoveredPoi: null,
    setHoveredPoi: (poi) => {
      set({
        hoveredPoi: poi,
      });
    },
    error: null,
    setError: (error) => {
      set({ error });
    },
    draftPoi: null,
    setDraftPoi: (latLng) => {
      set({
        draftPoi: latLng,
      });
    },
    notification: null,
    setNotification: (notification) => {
      set({ notification });
    },
  })),
);
