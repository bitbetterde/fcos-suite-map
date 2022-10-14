
import { useStore } from './useStore';
import type { Tag } from '../types/PointOfInterest';
import type { PointOfInterest } from 'src/types/PointOfInterest';

export interface poiData {
  data: PointOfInterest[] | undefined;
}

export interface poiFilteredData extends poiData {
  filterTags: Tag[] | null;
  setFilterTags: (tags: Tag[]) => void;
  filterCategories: string[];
  setFilterCategories: (categories: string[]) => void;
}

export const useFilteredPoiData = (): poiFilteredData => {
  const data = useStore((state) => state.poiData);
  const filterTags = useStore((store) => store.filterTags);
  const setFilterTags = useStore((state) => state.setFilterTags);
  const filterCategories = useStore((store) => store.filterCategories);
  const setFilterCategories = useStore((state) => state.setFilterCategories);

  let filteredData = data;
  if (filterTags?.length) {
    filteredData = filteredData?.filter(
      (poi) => !filterTags.filter((fTag) => !poi.tags.find((tag) => tag.id === fTag.id)).length,
    );
  }
  if (filterCategories?.length) {
    filteredData = filteredData?.filter((poi) => !!filterCategories.find((category) => poi.category === category));
  }

  return {
    data: filteredData,
    filterTags,
    setFilterTags,
    filterCategories,
    setFilterCategories,
  };
};
