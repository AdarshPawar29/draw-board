import create from "zustand";
import produce from "immer";
import { Layer } from "../types";

interface CanvasState {
  layers: Layer[];
  tool: string;
  setTool: (tool: string) => void;
  addLayer: (layer: Layer) => void;
  removeLayer: (index: number) => void;
  updateLayer: (index: number, newLayer: Layer) => void;
}

const useCanvasStore = create<CanvasState>((set) => ({
  layers: [],
  tool: "pencil",
  setTool: (tool) => set({ tool }),
  addLayer: (layer) =>
    set(
      produce((state) => {
        state.layers.push(layer);
      })
    ),
  removeLayer: (index) =>
    set(
      produce((state) => {
        state.layers.splice(index, 1);
      })
    ),
  updateLayer: (index, newLayer) =>
    set(
      produce((state) => {
        state.layers[index] = newLayer;
      })
    ),
}));

export default useCanvasStore;
