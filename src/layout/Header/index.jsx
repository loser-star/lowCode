import React from 'react'
import {HeaderStyleDiv} from './style'
import {useCanvasByContext} from "@/hooks";
import classNames from "classnames";
 const Header = () =>{
 
  const canvas = useCanvasByContext();

  const save = () => {
    const data = canvas.getCanvas();

    console.log("data", data, JSON.stringify(data)); //sy-log
  };

  const emptyCanvas = () => {
    canvas.setCanvas(null);
  };

  const goPrevCanvasHistory = () => {
    canvas.goPrevCanvasHistory();
  };

  const goNextCanvasHistory = () => {
    canvas.goNextCanvasHistory();
  };


  return (
    <HeaderStyleDiv>
        <div className={classNames('item')} onClick={save}>
        <span
          className={classNames("iconfont icon-baocun", 'icon')}></span>
        <span className={'txt'}>保存</span>
      </div>

      <div className={classNames('item')} onClick={goPrevCanvasHistory}>
        <span
          className={classNames(
            "iconfont icon-chexiaofanhuichehuishangyibu",
           'icon'
          )}></span>
        <span className={'txt'}>上一步</span>
      </div>

      <div className={classNames('item')} onClick={goNextCanvasHistory}>
        <span
          className={classNames(
            "iconfont icon-chexiaofanhuichehuishangyibu",
            'icon'
          )}
          style={{transform: `rotateY{180}deg`}}></span>
        <span className={'txt'}>下一步</span>
      </div>

      <div className={classNames('item')} onClick={emptyCanvas}>
        <span
          className={classNames("iconfont icon-qingkong", 'icon')}></span>
        <span className={'txt'}>清空</span>
      </div>

      <div className={classNames('item')} onClick={save}>
        <span className={classNames("iconfont icon-fabu", 'icon')}></span>
        <span className={'txt'}>发布</span>
      </div>
    </HeaderStyleDiv>
  )
}

export default Header