import { useCanvasByContext } from "@/hooks";
import Cmp from "./c-cmps/Cmp";
import { CenterDiv } from "./style";
import { useCallback, useReducer, useEffect } from "react";

export default function Center(props) {
  const canvas = useCanvasByContext();

  const canvasData = canvas.getCanvas();

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
  }, []);

  const allowDrop = useCallback((e) => {
    e.preventDefault();
  }, []);

  const selectedIndex = canvas.getSelectedCmpIndex();

  // 重新渲染
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const unsubscribe = canvas.subscribe(() => {
      forceUpdate();
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <CenterDiv>
      <div className="canvas" onDrop={onDrop} onDragOver={allowDrop}>
        {cmps.map((cmp, index) => (
          <Cmp
            key={cmp.key}
            cmp={cmp}
            selected={selectedIndex === index}
            index={index}
          />
        ))}
      </div>
    </CenterDiv>
  );
}
