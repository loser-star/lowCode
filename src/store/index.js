import { useRef } from "react";
import { getOnlyKey } from "../utils";
const defaultCanvas = {
  // 页面样式
  style: {
    width: 320,
    height: 568,
    backgroundColor: "#ffffff00",
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing: "content-box",
  },
  // 组件
  cmps: [],

  // 仅用于测试
  // cmps: [
  //   {
  //     key: getOnlyKey(),
  //     desc: "文本",
  //     value: "文本",
  //     style: {
  //       position: "absolute",
  //       top: 0,
  //       left: 0,
  //       width: 100,
  //       height: 30,
  //       fontSize: 12,
  //       color: "red",
  //     },
  //   },
  // ],
};

export class Canvas {
  constructor(_canvas = defaultCanvas) {
    this.canvas = _canvas; // 页面数据
    
    this.listeners = [];
  }
  // 获取画布数据
  getCanvas = () => {
    return { ...this.canvas };
  };

// 获取组件数据
  getCanvasCmps = () => {
    return [...this.canvas.cmps];
  }
// 修改画布数据
  setCanvas(canvas) {
    Object.assign(this.canvas, canvas);
  }
  // 修改组件数据
  addCmp = (_cmp) => {
    // 更新画布数据
    const cmp = {key:getOnlyKey(),..._cmp}
    this.canvas.cmps.push(cmp);

    // 组件更新
    this.updataApp()
    
  };
  // 组件更新
  updataApp = ()=> {
    this.listeners.forEach((listener) => {
      listener();
    });
  }
  // 监听组件更新
  subscribe = (listener) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };
  // 公开接口
  getPubilcCanvas() {
    const obj = {
      getCanvas:this.getCanvas,
      getCanvasCmps:this.getCanvasCmps,
      addCmp:this.addCmp,
      subscribe:this.subscribe
    }
    return obj;
  }

}