import { createContext, useContext, useRef } from "react";

import { Canvas } from "../store/index";

// 创建useContent
export const CanvasContext = createContext();

export function useCanvas(canvas) {
  const canvasRef = useRef();

  if (!canvasRef.current) {
    if (canvas) {
      canvasRef.current = canvas;
    } else {
      const canvas = new Canvas();
      canvasRef.current = canvas.getPublicCanvas();
    }
  }

  return canvasRef.current;
}

// 获取操作canvas数据的函数
export function useCanvasByContext() {
  const canvas = useContext(CanvasContext);

  return canvas;
}

// 获取的是画布数据，this.canvas
export function useCanvasData() {
  const canvas = useContext(CanvasContext);
  return canvas.getCanvas();
}

export function useCanvasCmps() {
  const canvas = useContext(CanvasContext);
  return canvas.getCanvasCmps();
}
