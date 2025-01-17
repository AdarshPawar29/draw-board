import { useState } from "react";

const useCanvasState = () => {
  const [canvasState, setCanvasState] = useState([]);

  const addState = (newState) => {
    setCanvasState([...canvasState, newState]);
  };

  return {
    canvasState,
    addState,
  };
};

export default useCanvasState;
