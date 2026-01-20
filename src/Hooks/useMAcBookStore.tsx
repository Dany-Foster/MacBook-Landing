import { create } from "zustand";

type MacBookState = {
  color: string;
  scale: number;
  texture: string;
};

type MacBookActions = {
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
};

const useMacBookStore = create<MacBookState & MacBookActions>()((set) => ({
  color: "#777",
  setColor: (color) => set({ color }),
  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),
  reset: () =>
    set({ color: "#777", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacBookStore;
