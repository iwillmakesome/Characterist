import { create } from 'zustand';

export const useStore = create((set) => ({
  searchedData: [],
  setSearchedData: (data) => set(() => ({ searchedData: data })),

  selectedData: {},
  setSelectedData: (data) => set(() => ({ selectedData: data })),
}));
