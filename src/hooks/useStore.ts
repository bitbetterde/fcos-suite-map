import type { Error } from 'src/types/Error';
import type { PointOfInterest, Tag } from 'src/types/PointOfInterest';
import type { Notification } from 'src/types/Notification';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  poiData: PointOfInterest[] | null;
  setPoiData: (data: PointOfInterest[] | null) => void;
  selectedPoi: PointOfInterest | null;
  setSelectedPoi: (poi: PointOfInterest | null) => void;
  hoveredPoi: PointOfInterest | null;
  setHoveredPoi: (poi: PointOfInterest | null) => void;
  error: Error | null;
  setError: (error: Error | null) => void;
  notification: Notification | null;
  setNotification: (notification: Notification | null) => void;
  filterTags: Tag[];
  setFilterTags: (tags: Tag[]) => void;
  filterCategories: string[];
  setFilterCategories: (categories: string[]) => void;
}

export const useStore = create<Store>()(
  devtools((set) => ({
    poiData: null,
    setPoiData: (data) => {
      set({
        poiData: data,
      });
    },
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
    notification: null,
    setNotification: (notification) => {
      set({ notification });
    },
    filterTags: [],
    setFilterTags: (tags) => {
      set({ filterTags: tags });
    },
    filterCategories: [],
    setFilterCategories: (categories) => {
      set({ filterCategories: categories });
    },
  })),
);
