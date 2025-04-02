import type { Error } from 'src/types/Error';
import type { PointOfInterest } from 'src/types/PointOfInterest';
import type { Notification } from 'src/types/Notification';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  categoryColorMapping: Record<string, string> | null;
  setCategoryColorMapping: (data: Record<string, string> | null) => void;
  tagColorMapping: Record<string, string> | null;
  setTagColorMapping: (data: Record<string, string> | null) => void;
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
  filterTags: string[];
  setFilterTags: (tags: string[]) => void;
  filterCategories: string[];
  setFilterCategories: (categories: string[]) => void;
  isSidebarHidden: boolean;
  setIsSidebarHidden: (value: boolean) => void;
  isDesktop: boolean;
  setIsDesktop: (value: boolean) => void;
}

export const useStore = create<Store>()(
  devtools((set) => ({
    categoryColorMapping: null,
    setCategoryColorMapping: (data) => {
      set({ categoryColorMapping: data });
    },
    tagColorMapping: null,
    setTagColorMapping: (data) => {
      set({ tagColorMapping: data });
    },
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
    isSidebarHidden: false,
    setIsSidebarHidden: (isSidebarHidden) => {
      set({ isSidebarHidden });
    },
    isDesktop: false,
    setIsDesktop: (isDesktop) => {
      set({ isDesktop });
    },
  })),
);
