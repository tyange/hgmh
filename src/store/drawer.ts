import { create } from "zustand";

export const useDrawerStore = create<{
  isDrawerOpen: boolean;
  drawerToggle: () => void;
}>((set) => ({
  isDrawerOpen: false,
  drawerToggle: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}));
