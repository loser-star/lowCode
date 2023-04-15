
import  { createContext, useContext,useRef } from "react";

import {Canvas} from '../store/index'
// 创建useContent
 export const CanvasContext = createContext();

//  导出useContext.getCanvas数据
 export function useCanvasData() {
  const canvas = useContext(CanvasContext);
  return canvas.getCanvas();
}

//  导出useContext.getCanvasCmps组件数据
export function useCanvasCmps() {
  const canvas = useContext(CanvasContext);
  return canvas.getCanvasCmps();
}
// 导出自定义useCanvasAddCmp
export function useCanvasAddCmp() {
  const canvas = useContext(CanvasContext);
  return canvas;
}


// 自定义useCanvas
export function useCanvas(canvas) {

  const canvasRef = useRef();
  if(!canvasRef.current) {
    if(canvas) {
      canvasRef.current = canvas;
    } else {
      const canvas = new Canvas();
      canvasRef.current = canvas.getPubilcCanvas();
    }
  }
  return canvasRef.current;
}