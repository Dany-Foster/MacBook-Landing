import { create } from "zustand";

type MacBookState = {
  color: string;
  scale: number;
};

type MacBookActions = {
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
};

const useMacBookStore = create<MacBookState & MacBookActions>()((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),
  scale: 0.08,
  setScale: (scale) => set({ scale }),
  reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));

export default useMacBookStore;
