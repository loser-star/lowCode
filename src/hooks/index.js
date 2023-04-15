
import  { createContext, useContext } from "react";
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