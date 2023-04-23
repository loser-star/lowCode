import { getOnlyKey } from "../utils";

const getDefaultCanvas = () => {
  return {
  // 页面样式
  style: {
    width: 320,
    height: 500,
    backgroundColor: "#ffffff",
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing: "content-box",
  },
  // 组件
  cmps: [],
}
};

// 状态
export class Canvas {
  constructor(_canvas = getDefaultCanvas()) {
    this.canvas = _canvas; // 页面数据

    // 被选中的组件的下标
    this.selectedCmpIndex = null;

    this.listeners = [];


    // 画布历史
    this.canvasChangeHistory = [JSON.stringify(this.canvas)];
    // 前进、后退
    this.canvasChangeHistoryIndex = 0;

    // 最多记录100条数据
    this.maxCanvasChangeHistory = 100;
  }

  // get

  getCanvas = () => {
    return { ...this.canvas };
  };

  getCanvasCmps = () => {
    return [...this.canvas.cmps];
  };

  getSelectedCmpIndex = () => {
    return this.selectedCmpIndex;
  };
  // 返回选中组件的参数
  getSelectedCmp = () => {
    const cmps = this.getCanvasCmps();
    return cmps[this.selectedCmpIndex];
  };

  setSelectedCmpIndex = (index) => {
    if (this.selectedCmpIndex === index) {
      return;
    }

    this.selectedCmpIndex = index;

    this.updateApp();
  };

  // set
  setCanvas = (_canvas) => {

    if(_canvas){
      Object.assign(this.canvas, _canvas);
    }else{
      this.canvas = getDefaultCanvas();
    }
    
    this.updateApp()
    this.recordCanvasChangeHistory();
  };

  // 新增组件
  addCmp = (_cmp) => {
    const cmp = {..._cmp, key: getOnlyKey()};
    console.log("addCmp", cmp);
    // 1. 更新画布数据
    this.canvas.cmps.push(cmp);
    // 2. 选中新增的组件为选中组件
    this.selectedCmpIndex = this.canvas.cmps.length - 1;
    // 3. 更新组件
    this.updateApp();
// 记录历史
    this.recordCanvasChangeHistory();
  };

  // 删除组件
  deleteCmp = (selectedIndex) => {
    this.canvas.cmps.splice(selectedIndex, 1);

    this.selectedCmpIndex = -1;

    this.updateApp();
    this.recordCanvasChangeHistory();
  };

  updateSelectedCmp = (newStyle = {}, newValue) => {
    const selectedCmp = this.getSelectedCmp();

    Object.assign(this.canvas.cmps[this.getSelectedCmpIndex()], {
      style: { ...selectedCmp.style, ...newStyle },
      // todo
      // value:
    });
    //  更新组件
    this.updateApp();
  };

  updateCanvasStyle = (newStyle) => {
    this.canvas.style = {
      ...this.canvas.style,
      ...newStyle,
    };

    console.log("this", this.canvas.style); //sy-log
    this.updateApp();
    this.recordCanvasChangeHistory();
  };


  updateApp = () => {
    console.log(1111)
    // 希望组件更新
    this.listeners.forEach((lis) => lis());
  };

  subscribe = (listener) => {
    this.listeners.push(listener);
    // 取消时间
    return () => {
      this.listeners = this.listeners.filter((lis) => lis !== listener);
    };
  };


  recordCanvasChangeHistory = () => {
    this.canvasChangeHistory[++this.canvasChangeHistoryIndex] = JSON.stringify(
      this.canvas
    );
    this.canvasChangeHistory = this.canvasChangeHistory.slice(
      0,
      this.canvasChangeHistoryIndex + 1
    );

    // 最多记录100条
    if (this.canvasChangeHistory.length > this.maxCanvasChangeHistory) {
      this.canvasChangeHistory.shift();
      this.canvasChangeHistoryIndex--;
    }
  };


  goPrevCanvasHistory = () => {
    let newIndex = this.canvasChangeHistoryIndex - 1;
    if (newIndex < 0) {
      newIndex = 0;
    }

    if (this.canvasChangeHistoryIndex === newIndex) {
      return;
    }
    this.canvasChangeHistoryIndex = newIndex;
    const newCanvas = JSON.parse(this.canvasChangeHistory[newIndex]);
    this.canvas = newCanvas;
    this.updateApp();
  };

  goNextCanvasHistory = () => {
    let newIndex = this.canvasChangeHistoryIndex + 1;
    if (newIndex >= this.canvasChangeHistory.length) {
      newIndex = this.canvasChangeHistory.length - 1;
    }

    if (this.canvasChangeHistoryIndex === newIndex) {
      return;
    }
    this.canvasChangeHistoryIndex = newIndex;
    const newCanvas = JSON.parse(this.canvasChangeHistory[newIndex]);
    this.canvas = newCanvas;
    this.updateApp();
  };


  getPublicCanvas = () => {
    const obj = {
      getCanvas: this.getCanvas,
      setCanvas: this.setCanvas,
      getCanvasCmps: this.getCanvasCmps,
      addCmp: this.addCmp,
      deleteCmp: this.deleteCmp,
      getSelectedCmpIndex: this.getSelectedCmpIndex,
      getSelectedCmp: this.getSelectedCmp,
      setSelectedCmpIndex: this.setSelectedCmpIndex,
      updateSelectedCmp: this.updateSelectedCmp,
      subscribe: this.subscribe,
      updateCanvasStyle: this.updateCanvasStyle,
      recordCanvasChangeHistory: this.recordCanvasChangeHistory,
      goPrevCanvasHistory: this.goPrevCanvasHistory,
      goNextCanvasHistory: this.goNextCanvasHistory,
    };

    return obj;
  };
}
