import { useCanvasByContext } from "@/hooks";
import Cmp from "./c-cmps/Cmp";
import { CenterDiv } from "./style";
import { useCallback, useReducer, useEffect,useState } from "react";
import classNames from "classnames";

export default function Center(props) {
  const canvas = useCanvasByContext();

  const canvasData = canvas.getCanvas();
  console.log('canvasData', canvasData);

  const { cmps } = canvasData;

  const onDrop = useCallback((e) => {
    // 获取移动结束的数据
    const endX = e.pageX;
    const endY = e.pageY;
    // 获取开始移动的数据
    const start = e.dataTransfer.getData("text").split(",");
    // 获得一个移动的数据
    const disX = endX - start[0];
    const disY = endY - start[1];

    const selectedCmp = canvas.getSelectedCmp();

    const oldStyle = selectedCmp.style;

    const top = oldStyle.top + disY;
    const left = oldStyle.left + disX;

    canvas.updateSelectedCmp({ top, left });
    canvas.recordCanvasChangeHistory();
  }, []);

  const allowDrop = useCallback((e) => {
    e.preventDefault();
  }, []);

  const selectedIndex = canvas.getSelectedCmpIndex();


  useEffect(() => {
    document.getElementById("center").onkeydown = whichKeyEvent
  }, []);


  const whichKeyEvent = (e) => {
    const selectedCmp = canvas.getSelectedCmp();
    if (!selectedCmp) {
      return;
    }

    if (e.keyCode < 37 || e.keyCode > 40) {
      return;
    }

    // 阻止事件传播，不然别的输入框的输入事件都不生效了
    e.stopPropagation();
    // 禁止默认事件，不然引发的可能是页面的上下左右滚动。
    e.preventDefault();

    const {top, left} = selectedCmp.style;
    const newStyle = {top, left};

    switch (e.keyCode) {
      // 左
      case 37:
        newStyle.left -= 1;
        break;

      // 上
      case 38:
        newStyle.top -= 1;
        break;

      // 右
      case 39:
        newStyle.left += 1;
        break;

      // 下
      case 40:
        newStyle.top += 1;
        break;

      default:
        break;
    }

    canvas.updateSelectedCmp(newStyle);
    canvas.recordCanvasChangeHistory();
  };

  // 重新渲染
  // const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // useEffect(() => {
  //   const unsubscribe = canvas.subscribe(() => {
  //     forceUpdate();
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const [zoom, setZoom] = useState(() =>parseInt(canvasData.style.width) > 790 ? 50 : 100);
  return (
    <CenterDiv id="center" tabIndex='0' onClick={ ()=>canvas.setSelectedCmpIndex(-1)}>
      <div className="canvas" onDrop={onDrop} onDragOver={allowDrop}
      style={{
        ...canvasData.style
      }}>
        {cmps.map((cmp, index) => (
          <Cmp
            key={cmp.key}
            cmp={cmp}
            selected={selectedIndex === index}
            index={index}
            zoom={zoom}
          />
        ))}
      </div>

      <ul className='zoom'>
        <li
          className={classNames('icon')}
          onClick={() => {
            setZoom(zoom + 25);
          }}>
          +
        </li>
        <li className={classNames('num')}>
          <input
            type="num"
            value={zoom}
            onChange={(e) => {
              let newValue = e.target.value;
              newValue = newValue >= 1 ? newValue : 1;
              setZoom(newValue - 0);
            }}
          />
          %
        </li>
        <li
          className={classNames('icon')}
          onClick={() => {
            const newZoom = zoom - 25 >= 1 ? zoom - 25 : 1;
            setZoom(newZoom);
          }}>
          -
        </li>
      </ul>

    </CenterDiv>
  );
}
